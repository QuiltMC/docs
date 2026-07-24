import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.quiltmc.org",
	integrations: [
		starlight({
			title: "Quilt Documentation",
			favicon: "src/assets/favicon.ico",
			customCss: [
				"./src/styles/theme.css"
			],
			defaultLocale: "en",
			locales: {
				en: {
					label: "English"
				}
			},
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/quiltmc/" },
				{icon: "discord", label: "Discord", href: "https://discord.quiltmc.org"}
		 ],
			editLink: { baseUrl: "https://github.com/QuiltMC/docs/edit/main/" },
			sidebar: [
				{
					label: "For Users",
					items: [{autogenerate: {"directory": "user"}}]
				},
				{
					label: "For Mod Developers",
					items: [
						{
							label: "Quilt Config",
							items: [{autogenerate: {"directory": "developer/quilt-config"}}]
							
						}
					]
				},
			],
		}),
	],
	adapter: cloudflare({
		prerenderEnvironment: "node",
		imageService: "passthrough"
	}),
});