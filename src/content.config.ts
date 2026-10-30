import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['personal', 'university']),
    tech: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.enum(['done', 'in-progress']).default('done'),
    note: z.string().optional(),
    shots: z.array(z.object({ src: z.string(), alt: z.string(), w: z.number(), h: z.number() })).default([]),
    shotsLabel: z.string().default('screenshots'),
    figure: z.enum(['tlv', 'coffee', 'scanner', 'cluster', 'nlp', 'notes']),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
