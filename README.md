# 🌟 Shine - Notion自动同步静态博客模板

一个基于Astro构建的现代静态博客模板，支持从Notion数据库自动同步内容并通过Vercel实时部署更新。最大的特点是**不会在GitHub仓库产生内容更新的提交记录**，保持代码仓库整洁。

**📦 [源代码](https://github.com/your-username/shine)**

## ✨ 主要特性

* **Notion集成**：自动从Notion数据库同步博客内容
* **无提交更新**：内容更新不会在GitHub产生提交记录
* **GitHub Actions自动化**：自动触发Vercel部署流程
* **Astro静态站点**：快速、高性能的博客体验

## 🔄 工作原理详解

本模板实现了一种高效的内容管理流程，将Notion作为CMS，GitHub Actions作为触发器，Vercel作为构建和部署平台：

### 1. 核心技术流程

```
[Notion数据库] → [GitHub Actions] → [Vercel部署钩子] → [Vercel构建] → [发布网站]
```

### 2. 详细流程说明

1. **触发阶段**
   - GitHub Actions工作流程可通过手动触发或定时执行
   - 工作流脚本执行，但**不会**将内容变更提交到仓库

2. **内容同步阶段**
   - 在GitHub Actions运行时，执行`fetch-notion.js`脚本
   - 脚本通过Notion API获取最新内容并处理格式
   - 内容仅在工作流运行环境中临时存在，不会提交到GitHub仓库

3. **部署触发阶段**
   - GitHub Actions直接调用Vercel部署钩子
   - Vercel从GitHub拉取最新代码（仅包含模板结构，不包含内容）

4. **构建发布阶段**
   - Vercel执行构建命令(`pnpm build`)
   - 构建过程中，再次执行`fetch-notion.js`获取最新Notion内容
   - 生成完整的静态网站并部署

### 3. 技术优势

- **仓库整洁**：GitHub仓库中不会积累内容变更的提交记录
- **实时内容**：每次构建都获取最新的Notion内容
- **简化工作流**：内容创作者只需在Notion中编辑内容
- **资源高效**：不消耗GitHub存储空间存储内容文件

## 🚀 使用方法

### 系统要求

* Node.js >= 18
* pnpm >= 9

### 第一步：设置Notion数据库

1. 在Notion中创建数据库，包含以下属性：
   - `Name` (标题)：文章标题
   - `Published` (日期)：发布日期
   - `Updated` (日期)：更新日期（可选，如不设置将使用发布日期）
   - `Description` (富文本)：文章描述
   - `Image` (URL/Files)：封面图片
   - `Tags` (多选)：文章标签
   - `Category` (选择)：文章分类
   - `Public` (复选框)：控制是否发布

2. 创建[Notion集成](https://www.notion.so/my-integrations)
   - 获取API密钥
   - 将集成分享给您的数据库
   - 复制数据库ID（从URL中获取）

### 第二步：设置项目

1. 从此模板生成新仓库或fork此仓库
2. 克隆您的仓库到本地
3. 安装依赖：
   ```bash
   pnpm install
   ```

4. 创建`.env`文件设置环境变量：
   ```
   NOTION_API_KEY=your-notion-api-key
   NOTION_DATABASE_ID=your-notion-database-id
   ```

5. 测试同步功能：
   ```bash
   node scripts/fetch-notion.js
   ```

### 第三步：配置Vercel部署

1. 在[Vercel](https://vercel.com)创建账户并导入您的GitHub仓库
2. 部署设置中设置：
   - 构建命令: `pnpm build`
   - 输出目录: `dist`
   - 安装命令: `pnpm install`
3. 添加环境变量:
   - `NOTION_API_KEY`: 您的Notion API密钥
   - `NOTION_DATABASE_ID`: 您的Notion数据库ID
4. 在Vercel项目设置的"Git"选项卡中创建Deploy Hook
   - 命名为"Notion Auto Sync"
   - 选择要部署的分支（通常是`main`）
   - 复制生成的URL

### 第四步：配置GitHub Actions

1. 在GitHub仓库设置中添加密钥：
   - `Settings` > `Secrets and variables` > `Actions`
   - 添加以下secrets:
     - `VERCEL_DEPLOY_HOOK`: 从Vercel复制的部署钩子URL
     - `NOTION_API_KEY`: 您的Notion API密钥
     - `NOTION_DATABASE_ID`: 您的Notion数据库ID

2. 配置自动同步（可选）：
   - 编辑`.github/workflows/vercel-build.yml`文件
   - 取消注释以下部分以启用定时触发：
     ```yaml
     schedule:
       - cron: '0 2 * * *' # 每天凌晨2点（UTC）自动触发
     ```

### 第五步：使用和管理

1. 在Notion中创建和编辑内容
2. 触发同步更新：
   - 自动：等待定时任务执行
   - 手动：在GitHub仓库的"Actions"标签页中，选择"Auto Sync Notion and Deploy"工作流，点击"Run workflow"
3. 查看Vercel部署日志确认更新完成

## 🧞 常用命令

| 命令                          | 操作                           |
| ----------------------------- | ------------------------------ |
| `pnpm install`                | 安装依赖                       |
| `pnpm dev`                    | 启动本地开发服务器             |
| `pnpm start`                  | 先从Notion同步内容再启动开发   |
| `pnpm build`                  | 构建生产站点                   |
| `node scripts/fetch-notion.js` | 手动从Notion同步博客内容       |

## 📝 自定义配置

编辑 `src/config.ts` 文件自定义您的博客设置，包括网站标题、主题颜色、导航栏等。

## 📌 Notion与本地开发的关系

- **Notion**：作为内容管理系统，是文章内容的唯一源头
- **本地开发**：仅用于开发博客模板功能，而非编辑内容
- **Vercel**：每次部署时都会获取最新的Notion内容

---

项目基于MIT许可证开源，特别感谢[saicaca/fuwari](https://github.com/saicaca/fuwari)作为原始模板的启发。 