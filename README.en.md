# Special thanks to saicaca
The original template of this project is based on fuwari by this author
https://github.com/saicaca/fuwari

# 🌟 Shine - Minimalist Static Blog Template

A modern static blog template built with Astro, featuring a clean interface and rich functionality.

**🖥️ [Live Demo](https://your-demo-site-url.com)** / **📦 [Source Code](https://github.com/your-username/shine)**

> README version: `2025-06-01`

## ✨ Features

* Built with Astro and Tailwind CSS
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
| `pnpm install && pnpm add sharp` | Install dependencies                        |
| `pnpm dev`                      | Start local dev server at localhost:4321     |
| `pnpm build`                    | Build production site to ./dist/ directory   |
| `pnpm preview`                  | Preview build locally before deployment      |
| `pnpm new-post <filename>`      | Create a new post                           |
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

Then you can deploy to:
- Vercel
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