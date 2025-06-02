import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Shine",
	subtitle: "Blog",
	lang: "zh_CN", // 'zh_CN', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true, // 启用banner功能
		src: "", // 设置背景图路径，放在public目录下
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Shine", // Credit text to be displayed
			url: "https://your/", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		//Leave this array empty to use the default favicon
		{
			src: "", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
		{
			src: "",
			theme: "dark",
			sizes: "32x32",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "MyGitHub",
			url: "https://github.com",
			external: true,
		},
		{
			name: "Bilibili",
			url: "https://space.bilibili.com/",
			external: true,
		},
		{
			name: "知乎",
			url: "https://www.zhihu.com/",
			external: true,
		},
		{
			name: "CSDN",
			url: "https://blog.csdn.net/",
			external: true,
		},
		{
			name: "V2EX",
			url: "https://www.v2ex.com/",
			external: true,
		},
		{
			name: "Steam",
			url: "https://store.steampowered.com/",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Shine",
	bio: "Freiheit als Autonomie",
	links: [
		{
			name: "CV",
			icon: "tabler:file-cv-filled", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https:",
		},
		{
			name: "My Email",
			icon: "material-symbols:attach-email",
			url: "mailto:",
		},
		{
			name: "QQ",
			icon: "cib:tencent-qq",
			url: "https:",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "Shine",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
