import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({
		extend: z.object({
			banner: z.object({ content: z.string() }).default({
				content: "🚧 This documentation is still under construction and very experimental 🚧"
			})
		})
	}) }),
};
