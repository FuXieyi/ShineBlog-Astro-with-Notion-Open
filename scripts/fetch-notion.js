import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import "dotenv/config";

// 打印环境变量状态（不显示具体值，保护隐私）
console.log('环境变量检查:');
console.log('- NOTION_API_KEY:', process.env.NOTION_API_KEY ? '已设置' : '未设置');
console.log('- NOTION_DATABASE_ID:', process.env.NOTION_DATABASE_ID ? '已设置' : '未设置');

// 辅助函数：将富文本转换为纯文本
function richTextToPlainText(richTextArray) {
  if (!Array.isArray(richTextArray)) return '';
  return richTextArray.map(rt => rt.plain_text || '').join('');
}

// 将标题转换为有效的文件名
function slugify(text) {
  if (!text) return '';
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // 将空格替换为连字符
    .replace(/[^\w\u4e00-\u9fa5\-\.]+/g, '') // 保留字母、数字、中文、连字符和点
    .replace(/\-\-+/g, '-')         // 替换多个连字符为单个连字符
    .replace(/^-+/, '')             // 移除开头的连字符
    .replace(/-+$/, '');            // 移除结尾的连字符
}

// YAML转义
function yamlEscape(str) {
  if (str === "" || str === undefined || str === null) return "''";
  return /[:\[\]\{\},\n\"]/.test(str) ? `"${str.replace(/"/g, '"')}"` : str;
}

// 初始化Notion客户端
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });
const databaseId = process.env.NOTION_DATABASE_ID;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, "../src/content/posts/notion");

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`创建输出目录: ${outputDir}`);
}

/**
 * 从Notion数据库同步文章到本地Markdown文件
 */
export async function syncNotion() {
  console.log('开始同步 Notion 数据...');
  try {
    // 1. 查询数据库
    const pages = await notion.databases.query({ database_id: databaseId });
    console.log(`数据库查询成功，获取到 ${pages.results.length} 个页面`);
    
    // 2. 获取本地现有文件列表
    const localFiles = fs.readdirSync(outputDir).filter((f) => f.endsWith(".md"));
    console.log(`本地已存在 ${localFiles.length} 个 Markdown 文件`);
    
    // 3. 记录处理的文件
    const newFiles = [];
    const titleToFilename = {}; // 用标题作为追踪依据
    let publicPagesCount = 0;
    
    // 4. 处理每个页面
    for (const page of pages.results) {
      const draft = !(page.properties.Public?.checkbox === true);
      if (draft) continue; // 跳过草稿
      
      publicPagesCount++;
      
      try {
        // 获取页面内容并转换为Markdown
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = n2m.toMarkdownString(mdblocks);
        
        // 提取页面属性
        const title = page.properties.Name.title[0]?.plain_text || "untitled";
        const published = page.properties.Published?.date?.start || new Date().toISOString().slice(0, 10);
        const updated = page.properties.Updated?.date?.start || published;
        const description = richTextToPlainText(page.properties.Description?.rich_text) || "''";
        const tags = (page.properties.Tags?.multi_select?.map((tag) => tag.name) || []).filter(Boolean);
        const category = page.properties.Category?.select?.name || "''";
        const lang = page.properties.Lang?.select?.name || "''";
        
        // 获取封面图片
        let cover = "";
        if (page.cover) {
          cover = page.cover.type === "external" ? page.cover.external.url : page.cover.file.url;
        }
        
        // 生成文件名
        let filename = slugify(title);
        if (!filename) filename = "untitled";
        
        // 处理文件名冲突
        const baseFilename = filename;
        let counter = 1;
        while (newFiles.includes(`${filename}.md`)) {
          filename = `${baseFilename}-${counter++}`;
        }
        filename = `${filename}.md`;
        newFiles.push(filename);
        
        // 记录标题和文件名的映射关系
        titleToFilename[title] = filename;
        
        // 生成frontmatter
        const imageValue = cover || "''";
        const frontmatter = [
          '---',
          `title: ${yamlEscape(title)}`,
          `published: ${published}`,
          `updated: ${updated}`,
          `description: ${yamlEscape(description)}`,
          `image: ${yamlEscape(imageValue)}`,
          `tags: [${tags.map(yamlEscape).join(", ")}]`,
          `category: ${yamlEscape(category)}`,
          `draft: ${draft}`,
          `lang: ${yamlEscape(lang)}`,
          '---',
          ''
        ].join('\n');
        
        // 写入文件
        fs.writeFileSync(
          path.join(outputDir, filename),
          frontmatter + "\n" + mdString.parent
        );
        console.log(`成功保存: ${title} (${filename})`);
      } catch (pageError) {
        console.error(`处理页面时出错 ${page.id}:`, pageError);
      }
    }
    
    console.log(`共处理了 ${publicPagesCount} 个公开页面`);
    
    // 5. 清理过时文件
    await cleanupOldFiles(localFiles, newFiles);
    
    console.log('Notion 同步完成');
  } catch (error) {
    console.error('Notion 同步过程中出错:', error);
    throw error;
  }
}

/**
 * 清理过时的文件
 */
async function cleanupOldFiles(localFiles, newFiles) {
  // 删除本地存在但新生成文件中不存在的文件
  for (const file of localFiles) {
    if (!newFiles.includes(file)) {
      try {
        fs.unlinkSync(path.join(outputDir, file));
        console.log(`删除过时文件: ${file}`);
      } catch (err) {
        console.error(`删除文件出错 ${file}:`, err);
      }
    }
  }
}

// 使用CommonJS风格的条件来检测直接执行
const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);
console.log('检测脚本执行方式:', isDirectRun ? '直接执行' : '作为模块导入');

if (isDirectRun) {
  console.log('直接执行脚本，调用 syncNotion()...');
  syncNotion()
    .then(() => console.log('完成: Notion文章已成功同步到本地'))
    .catch(error => console.error('同步过程中出现错误:', error));
}