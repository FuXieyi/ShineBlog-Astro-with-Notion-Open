# 特别感谢saicaca
此项目原始模版是基于此作者的fuwari
https://github.com/saicaca/fuwari

# 🌟 Shine - 简约静态博客模板

一个基于Astro构建的现代静态博客模板,界面简洁,功能丰富。支持从Notion数据库自动同步内容！并通过vercel实时部署更新博客网站!

**🖥️ [在线演示](https://your-demo-site-url.com)** / **📦 [源代码](https://github.com/your-username/shine)**

> README版本: `2025-06-03`

## ✨ 特性

* 基于Astro和Tailwind CSS构建
* **✅ Notion集成：从Notion数据库自动同步博客内容**
* **✅ 自动化工作流：通过GitHub Actions自动更新内容并部署**
* 流畅的页面过渡和动画效果
* 支持亮色/暗色模式
* 自定义主题色彩和横幅
* 完全响应式设计
* 支持数学公式(KaTeX)
* 表格内容(TOC)自动生成
* 文章搜索功能
* 多语言支持(中文、英文等)
* 标签和分类系统
* 自定义Markdown扩展功能

## 📋 系统要求

* Node.js >= 18
* pnpm >= 9

## 🚀 使用方法

1. 从此模板生成新仓库或fork此仓库
2. 克隆您的仓库到本地
3. 安装依赖:
   ```bash
   pnpm install
   pnpm add sharp
   ```
   * 如果尚未安装pnpm,请先运行 `npm install -g pnpm`
4. 在`src/config.ts`中自定义您的博客设置
5. 运行`pnpm dev`启动本地开发服务器
6. 使用`pnpm new-post <文件名>`创建新文章,并在`src/content/posts/`中编辑

## 🔄 Notion集成与自动同步

本模板内置了 Notion 自动同步功能，可以定期从 Notion 数据库同步内容到博客，并自动部署最新版本。

### 1. 创建Notion数据库

在Notion中创建包含以下属性的数据库:
- `Name` (标题)：文章标题
- `Published` (日期)：发布日期
- `Updated` (日期)：更新日期
- `Description` (富文本)：文章描述
- `Image` (URL)：封面图片链接
- `Tags` (多选)：文章标签
- `Category` (选择)：文章分类
- `Public` (复选框)：控制是否公开发布
- `Lang` (选择)：文章语言

### 2. 配置Notion API

1. 创建[Notion集成](https://www.notion.so/my-integrations)
2. 获取API密钥
3. 将您的集成添加到数据库共享设置中
4. 复制数据库ID (从URL中获取)

### 3. 设置环境变量

在项目根目录创建`.env`文件:

```bash
NOTION_API_KEY=your-notion-api-key
NOTION_DATABASE_ID=your-notion-database-id
```

### 4. 手动同步内容

运行以下命令从Notion同步内容:

```bash
node scripts/fetch-notion.js
```

或测试Notion连接:

```bash
node scripts/test-notion.js
```

### 5. 启用自动同步

模板默认关闭了自动同步功能，仅保留手动触发选项。要启用自动同步，请按照以下步骤操作：

1. 编辑 `.github/workflows/vercel-build.yml` 文件
2. 取消注释以下部分（移除 `#` 符号）：
   ```yaml
   schedule:
     - cron: '0 2 * * *' # 每天凌晨2点（UTC）自动触发
   ```
3. 如需调整同步频率，可修改 cron 表达式（默认为每天凌晨2点UTC）

### 6. Vercel与GitHub自动部署配置

#### Vercel部署配置:

1. 在[Vercel](https://vercel.com)创建账户并导入您的GitHub仓库
2. 部署设置中选择:
   - 框架预设: `Astro`
   - 构建命令: `pnpm build`
   - 输出目录: `dist`
   - 安装命令: `pnpm install`
3. 设置环境变量 (如果需要)
4. 点击"Deploy"按钮完成初始部署

#### 创建Vercel部署Hook:

1. 在Vercel项目设置中找到"Git"选项卡
2. 向下滚动到"Deploy Hooks"部分
3. 创建一个新的Hook(例如命名为"Notion Auto Sync")
4. 选择要部署的分支(通常是`main`)
5. 复制生成的URL

#### GitHub Secrets配置:

在GitHub仓库设置中添加以下密钥:
1. 进入仓库的`Settings` > `Secrets and variables` > `Actions`
2. 添加以下secrets:
   - `VERCEL_DEPLOY_HOOK`: 粘贴从Vercel复制的部署Hook URL
   - `NOTION_API_KEY`: 您的Notion API密钥
   - `NOTION_DATABASE_ID`: 您的Notion数据库ID

### 7. 手动触发同步

即使不启用自动同步，您也可以随时手动触发同步流程：

1. 进入 GitHub 仓库的 "Actions" 标签页
2. 在左侧找到 "Auto Sync Notion and Deploy" 工作流
3. 点击 "Run workflow"

### 8. 同步机制说明

本工作流采用智能同步机制，会自动：

1. 从 Notion 获取最新内容
2. 智能过滤非实质性变化（如 S3 图片 URL 签名变化、元数据时间戳等）
3. 仅当检测到实质性内容变化时才创建新的提交
4. 自动触发 Vercel 部署以更新网站

## ⚙️ 文章frontmatter配置

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
updated: 2023-09-09
description: 这是我的Astro博客的第一篇文章。
image: ./cover.jpg
tags: [前端, Astro, 博客]
category: Web开发
draft: false
lang: zh_CN  # 仅当文章语言与config.ts中设置的站点语言不同时设置
---
```

## 📝 自定义配置

在`src/config.ts`中,您可以配置:

- 网站标题和副标题
- 网站语言
- 主题色调
- 横幅设置和图片
- 目录显示选项
- 网站图标(favicon)
- 导航栏链接
- 个人资料信息
- 许可证信息

## 🧞 常用命令

所有命令都在项目根目录下的终端中运行:

| 命令                          | 操作                           |
| ----------------------------- | ------------------------------ |
| `pnpm install`                | 安装依赖                       |
| `pnpm dev`                    | 在localhost:4321启动本地开发服务器 |
| `pnpm build`                  | 构建生产站点到./dist/目录      |
| `pnpm preview`                | 在部署前本地预览构建结果       |
| `pnpm new-post <文件名>`      | 创建新文章                     |
| `node scripts/fetch-notion.js` | 从Notion同步博客内容            |
| `node scripts/test-notion.js` | 测试Notion API连接和数据库结构  |
| `pnpm astro ...`              | 运行Astro CLI命令              |
| `pnpm astro --help`           | 获取Astro CLI帮助              |

## 📚 Markdown扩展功能

本模板支持多种Markdown扩展功能:

### 数学公式

```markdown
行内公式: $\omega = d\phi / dt$

独立公式:
$$I = \int \rho R^{2} dV$$
```

### 提示框

```markdown
::: note
这是一个笔记提示框
:::

::: tip
这是一个提示框
:::

::: warning
这是一个警告框
:::

::: caution
这是一个注意框
:::
```

## 🌐 部署

在部署之前,请编辑`astro.config.mjs`中的站点配置:

```javascript
export default defineConfig({
  site: "https://你的网站域名.com",
  // ...
});
```

### Vercel一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fshine)

1. 点击上方按钮
2. 连接您的GitHub账户
3. 配置项目名称和团队设置
4. 添加必要的环境变量
5. 点击"Deploy"开始部署

### 其他部署选项
- Netlify
- GitHub Pages
- 或其他静态网站托管服务

## 📜 许可证

MIT License

## 🙏 致谢

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Svelte](https://svelte.dev/)
- 所有开源贡献者

---

如有问题或建议，欢迎提交Issue或Pull Request。

[⬆ 返回顶部](#-shine---简约静态博客模板) 