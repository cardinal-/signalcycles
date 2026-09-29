import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bikes = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/bikes' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      year: z.number(),
      type: z.string(),
      materials: z.string().optional(),
      summary: z.string(),
      coverImage: image(),
      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      heroDefault: z.number().int().positive().optional(),
    }),
});

export const collections = { bikes };
