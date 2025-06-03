# 🌟 Shine - Notion Auto-Sync Blog Template

A modern static blog template built with Astro, featuring automatic content synchronization from Notion database and real-time deployment through Vercel. The key feature is that it **does not create content update commits in the GitHub repository**, keeping your codebase clean.

**📦 [Source Code](https://github.com/your-username/shine)**

## ✨ Key Features

* **Notion Integration**: Automatically sync blog content from Notion database
* **No Content Commits**: Content updates won't create commit records in GitHub
* **GitHub Actions Automation**: Automatically triggers Vercel deployment process
* **Astro Static Site**: Fast, high-performance blog experience

## 🔄 Technical Architecture Explained

This template implements an efficient content management workflow using Notion as CMS, GitHub Actions as trigger, and Vercel as build and deployment platform:

### 1. Core Technical Flow

```
[Notion Database] → [GitHub Actions] → [Vercel Deploy Hook] → [Vercel Build] → [Published Site]
```

### 2. Detailed Process

1. **Trigger Phase**
   - GitHub Actions workflow can be triggered manually or on schedule
   - The workflow executes without committing content changes to the repository

2. **Content Sync Phase**
   - During GitHub Actions execution, the `fetch-notion.js` script runs
   - The script fetches latest content via Notion API and processes it
   - Content exists only temporarily in the workflow environment, not committed to GitHub

3. **Deployment Trigger Phase**
   - GitHub Actions directly calls the Vercel deploy hook
   - Vercel pulls the latest code from GitHub (template structure only, no content)

4. **Build and Publish Phase**
   - Vercel executes the build command (`pnpm build`)
   - During build, `fetch-notion.js` runs again to get latest Notion content
   - Generates complete static site and deploys

### 3. Technical Advantages

- **Clean Repository**: No accumulated content change commits in GitHub repository
- **Real-time Content**: Each build fetches the latest Notion content
- **Simplified Workflow**: Content creators only need to edit in Notion
- **Resource Efficient**: Doesn't consume GitHub storage space for content files

## 🚀 How to Use

### Requirements

* Node.js >= 18
* pnpm >= 9

### Step 1: Set Up Notion Database

1. Create a database in Notion with these properties:
   - `Name` (title): Article title
   - `Published` (date): Publication date
   - `Updated` (date): Update date (optional, will use Published date if not set)
   - `Description` (rich text): Article description
   - `Image` (URL/Files): Cover image
   - `Tags` (multi-select): Article tags
   - `Category` (select): Article category
   - `Public` (checkbox): Controls publishing status

2. Create a [Notion integration](https://www.notion.so/my-integrations)
   - Get your API key
   - Share the integration with your database
   - Copy the database ID (from the URL)

### Step 2: Set Up Project

1. Generate a new repository from this template or fork it
2. Clone your repository locally
3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Create a `.env` file with environment variables:
   ```
   NOTION_API_KEY=your-notion-api-key
   NOTION_DATABASE_ID=your-notion-database-id
   ```

5. Test the sync functionality:
   ```bash
   node scripts/fetch-notion.js
   ```

### Step 3: Configure Vercel Deployment

1. Create an account on [Vercel](https://vercel.com) and import your GitHub repository
2. In deployment settings, set:
   - Build command: `pnpm build`
   - Output directory: `dist`
   - Install command: `pnpm install`
3. Add environment variables:
   - `NOTION_API_KEY`: Your Notion API key
   - `NOTION_DATABASE_ID`: Your Notion database ID
4. Create a Deploy Hook in Vercel project settings under "Git" tab
   - Name it "Notion Auto Sync"
   - Select the branch to deploy (typically `main`)
   - Copy the generated URL

### Step 4: Configure GitHub Actions

1. Add secrets in your GitHub repository settings:
   - `Settings` > `Secrets and variables` > `Actions`
   - Add these secrets:
     - `VERCEL_DEPLOY_HOOK`: Deploy hook URL copied from Vercel
     - `NOTION_API_KEY`: Your Notion API key
     - `NOTION_DATABASE_ID`: Your Notion database ID

2. Configure automatic sync (optional):
   - Edit `.github/workflows/vercel-build.yml` file
   - Uncomment this section to enable scheduled triggers:
     ```yaml
     schedule:
       - cron: '0 2 * * *' # Trigger automatically every day at 2 AM UTC
     ```

### Step 5: Usage and Management

1. Create and edit content in Notion
2. Trigger sync updates:
   - Automatic: Wait for scheduled task to run
   - Manual: In GitHub repository "Actions" tab, select "Auto Sync Notion and Deploy" workflow, click "Run workflow"
3. Check Vercel deployment logs to confirm updates are complete

## 🧞 Common Commands

| Command                       | Action                               |
| ----------------------------- | ------------------------------------ |
| `pnpm install`                | Install dependencies                 |
| `pnpm dev`                    | Start local development server       |
| `pnpm start`                  | Sync from Notion then start dev      |
| `pnpm build`                  | Build production site                |
| `node scripts/fetch-notion.js`| Manually sync content from Notion    |

## 📝 Custom Configuration

Edit the `src/config.ts` file to customize your blog settings, including site title, theme colors, navigation, and more.

## 📌 Notion and Local Development Relationship

- **Notion**: Acts as content management system, the single source of truth for content
- **Local Development**: Used only for developing blog template features, not for content editing
- **Vercel**: Gets the latest Notion content on each deployment

---

Project is open-source under MIT License. Special thanks to [saicaca/fuwari](https://github.com/saicaca/fuwari) for inspiration as the original template. 