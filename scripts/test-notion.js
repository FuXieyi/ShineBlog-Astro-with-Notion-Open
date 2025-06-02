import { Client } from "@notionhq/client";
import "dotenv/config";

async function testNotion() {
  console.log('==== Notion 连接测试 ====');
  console.log('环境变量检查:');
  console.log('- NOTION_API_KEY:', process.env.NOTION_API_KEY ? '已设置' : '未设置');
  console.log('- NOTION_DATABASE_ID:', process.env.NOTION_DATABASE_ID ? '已设置' : '未设置');
  
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    console.error('错误: 环境变量未正确设置，请检查 .env 文件');
    return;
  }
  
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
    // 1. 测试 API 连接
    console.log('\n1. 测试 API 连接...');
    const user = await notion.users.me();
    console.log('连接成功! 当前用户:', user.name);
    
    // 2. 测试数据库访问
    console.log('\n2. 测试数据库访问...');
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
      const database = await notion.databases.retrieve({ database_id: databaseId });
      console.log('数据库访问成功!');
      console.log('数据库标题:', database.title[0]?.plain_text || '无标题');
      
      // 3. 查询数据库内容
      console.log('\n3. 查询数据库内容...');
      const pages = await notion.databases.query({ database_id: databaseId, page_size: 5 });
      console.log(`查询成功! 共有 ${pages.results.length} 个页面`);
      
      // 4. 检查数据库结构
      console.log('\n4. 检查数据库结构...');
      const properties = database.properties;
      const requiredProps = ['Name', 'Public'];
      const recommendedProps = ['Published', 'Updated', 'Description', 'Image', 'Tags', 'Category', 'Lang'];
      
      console.log('属性检查:');
      requiredProps.forEach(prop => {
        console.log(`- ${prop}: ${properties[prop] ? '✅ 已存在' : '❌ 缺失'}`);
      });
      
      recommendedProps.forEach(prop => {
        console.log(`- ${prop}: ${properties[prop] ? '✅ 已存在' : '⚠️ 建议添加'}`);
      });
      
      // 5. 检查属性类型
      console.log('\n5. 检查属性类型...');
      const expectedTypes = {
        'Name': 'title',
        'Published': 'date',
        'Updated': 'date',
        'Description': 'rich_text',
        'Image': 'url',
        'Tags': 'multi_select',
        'Category': 'select',
        'Public': 'checkbox',
        'Lang': 'select'
      };
      
      let hasTypeErrors = false;
      for (const [prop, expectedType] of Object.entries(expectedTypes)) {
        if (properties[prop]) {
          const actualType = properties[prop].type;
          if (actualType !== expectedType) {
            console.log(`- ${prop}: ❌ 类型不匹配 - 期望 ${expectedType}, 实际 ${actualType}`);
            hasTypeErrors = true;
          } else {
            console.log(`- ${prop}: ✅ 类型正确 (${expectedType})`);
          }
        }
      }
      
      // 6. 检查公开文章
      console.log('\n6. 检查公开文章...');
      let publicCount = 0;
      for (const page of pages.results) {
        const isPublic = page.properties.Public?.checkbox === true;
        if (isPublic) publicCount++;
      }
      console.log(`公开文章数量: ${publicCount}/${pages.results.length}`);
      
      if (hasTypeErrors) {
        console.log('\n⚠️ 测试完成，但有属性类型不匹配。请按照上述建议修改数据库结构。');
      } else {
        console.log('\n✅ 测试完成! Notion 集成配置正确。');
      }
    } catch (dbError) {
      console.error('数据库访问失败:', dbError.message);
      if (dbError.code === 'object_not_found') {
        console.error('可能原因: 数据库 ID 不正确或该集成没有访问数据库的权限');
        console.error('解决方法: 在 Notion 页面中，点击"共享"并添加您的集成');
      }
    }
  } catch (error) {
    console.error('API 连接失败:', error.message);
    if (error.code === 'unauthorized') {
      console.error('可能原因: API 密钥不正确或已过期');
    }
  }
}

testNotion(); 