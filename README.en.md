# Special thanks to saicaca
The original template of this project is based on fuwari by this author
https://github.com/saicaca/fuwari

# 🌟 Shine - Minimalist Static Blog Template

A modern static blog template built with Astro, featuring a clean interface and rich functionality. Supports automatic content synchronization from Notion database and real-time deployment through Vercel!

**🖥️ [Live Demo](https://your-demo-site-url.com)** / **📦 [Source Code](https://github.com/your-username/shine)**

> README version: `2025-06-03`

## ✨ Features

* Built with Astro and Tailwind CSS
* **✅ Notion Integration: Automatically sync blog content from Notion database**
* **✅ Automated Workflow: Auto-update content and deploy through GitHub Actions**
* Smooth page transitions and animations
* Light/dark mode support
* Customizable theme colors and banner
* Fully responsive design
* Math formula support (KaTeX)
* Automatic table of contents generation
* Article search functionality
* Multilingual support (Chinese, English, etc.)
* Tag and category system
* Custom Markdown extensions

## 📋 Requirements

* Node.js >= 18
* pnpm >= 9

## 🚀 How to Use

1. Generate a new repository from this template or fork this repository
2. Clone your repository locally
3. Install dependencies:
   ```bash
   pnpm install
   pnpm add sharp
   ```
   * If you haven't installed pnpm yet, run `npm install -g pnpm` first
4. Customize your blog settings in `src/config.ts`
5. Run `pnpm dev` to start the local development server
6. Create new posts using `pnpm new-post <filename>` and edit them in `src/content/posts/`

## 🔄 Notion Integration and Auto-Sync

This template has built-in Notion auto-sync functionality, allowing you to periodically sync content from a Notion database to your blog and automatically deploy updates.

### 1. Create a Notion Database

Create a database in Notion with the following properties:
- `Name` (title): Article title
- `Published` (date): Publication date
- `Updated` (date): Update date
- `Description` (rich text): Article description
- `Image` (URL): Cover image link
- `Tags` (multi-select): Article tags
- `Category` (select): Article category
- `Public` (checkbox): Controls whether to publish publicly
- `Lang` (select): Article language

### 2. Configure Notion API

1. Create a [Notion integration](https://www.notion.so/my-integrations)
2. Get your API key
3. Add your integration to the database's sharing settings
4. Copy the database ID (from the URL)

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
NOTION_API_KEY=your-notion-api-key
NOTION_DATABASE_ID=your-notion-database-id
```

### 4. Manual Content Synchronization

Run the following command to sync content from Notion:

```bash
node scripts/fetch-notion.js
```

Or test your Notion connection:

```bash
node scripts/test-notion.js
```

### 5. Enable Automatic Synchronization

The template has automatic sync disabled by default, with only manual triggering enabled. To enable automatic synchronization, follow these steps:

1. Edit the `.github/workflows/vercel-build.yml` file
2. Uncomment the following section (remove the `#` symbols):
   ```yaml
   schedule:
     - cron: '0 2 * * *' # Trigger automatically every day at 2 AM UTC
   ```
3. If needed, adjust the cron expression to change the sync frequency (default is every day at 2 AM UTC)

### 6. Vercel and GitHub Automated Deployment Setup

#### Vercel Deployment Configuration:

1. Create an account on [Vercel](https://vercel.com) and import your GitHub repository
2. In deployment settings, choose:
   - Framework preset: `Astro`
   - Build command: `pnpm build`
   - Output directory: `dist`
   - Install command: `pnpm install`
3. Set environment variables (if needed)
4. Click the "Deploy" button to complete initial deployment

#### Create a Vercel Deploy Hook:

1. In your Vercel project settings, find the "Git" tab
2. Scroll down to the "Deploy Hooks" section
3. Create a new hook (e.g., named "Notion Auto Sync")
4. Select the branch to deploy (typically `main`)
5. Copy the generated URL

#### GitHub Secrets Configuration:

Add the following secrets in your GitHub repository settings:
1. Go to repository's `Settings` > `Secrets and variables` > `Actions`
2. Add the following secrets:
   - `VERCEL_DEPLOY_HOOK`: Paste the deploy hook URL copied from Vercel
   - `NOTION_API_KEY`: Your Notion API key
   - `NOTION_DATABASE_ID`: Your Notion database ID

### 7. Manual Sync Triggering

Even without enabling automatic synchronization, you can manually trigger the sync process at any time:

1. Go to the "Actions" tab of your GitHub repository
2. Find the "Auto Sync Notion and Deploy" workflow in the left sidebar
3. Click "Run workflow"

### 8. Sync Mechanism Explanation

This workflow uses an intelligent sync mechanism that will automatically:

1. Fetch the latest content from Notion
2. Intelligently filter non-substantial changes (like S3 image URL signatures, metadata timestamps, etc.)
3. Create a new commit only when substantial content changes are detected
4. Trigger Vercel deployment to update your website

## ⚙️ Post Frontmatter Configuration

```yaml
---
title: My First Blog Post
published: 2023-09-09
updated: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Frontend, Astro, Blog]
category: Web Development
draft: false
lang: en  # Set only if the post's language differs from the site's language in config.ts
---
```

## 📝 Custom Configuration

In `src/config.ts`, you can configure:

- Website title and subtitle
- Site language
- Theme color
- Banner settings and image
- TOC display options
- Website favicon
- Navbar links
- Profile information
- License information

## 🧞 Common Commands

All commands are run from the project root directory in the terminal:

| Command                         | Action                                       |
| ------------------------------- | -------------------------------------------- |
| `pnpm install`                  | Install dependencies                         |
| `pnpm dev`                      | Start local dev server at localhost:4321     |
| `pnpm build`                    | Build production site to ./dist/ directory   |
| `pnpm preview`                  | Preview build locally before deployment      |
| `pnpm new-post <filename>`      | Create a new post                           |
| `node scripts/fetch-notion.js`  | Sync blog content from Notion               |
| `node scripts/test-notion.js`   | Test Notion API connection and database structure |
| `pnpm astro ...`                | Run Astro CLI commands                       |
| `pnpm astro --help`             | Get help using the Astro CLI                 |

## 📚 Markdown Extension Features

This template supports various Markdown extension features:

### Math Formulas

```markdown
Inline formula: $\omega = d\phi / dt$

Display formula:
$$I = \int \rho R^{2} dV$$
```

### Admonitions

```markdown
::: note
This is a note admonition
:::

::: tip
This is a tip admonition
:::

::: warning
This is a warning admonition
:::

::: caution
This is a caution admonition
:::
```

## 🌐 Deployment

Before deploying, edit the site configuration in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: "https://your-domain-name.com",
  // ...
});
```

### One-Click Deployment with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fshine)

1. Click the button above
2. Connect your GitHub account
3. Configure project name and team settings
4. Add necessary environment variables
5. Click "Deploy" to start deployment

### Other Deployment Options
- Netlify
- GitHub Pages
- Or other static website hosting services

## 📜 License

MIT License

## 🙏 Acknowledgments

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Svelte](https://svelte.dev/)
- All open source contributors

---

For questions or suggestions, feel free to submit an Issue or Pull Request.

[⬆ Back to top](#-shine---minimalist-static-blog-template) 