import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CATEGORY_KEYS } from "./i18n/ui";
import { PLATFORM_KEYS } from "./lib/platforms";

const blog = defineCollection({
  // src/content/blog/<locale>/<slug>.mdx or src/content/blog/<locale>/<slug>/index.mdx
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(110),
      description: z.string().min(50).max(200),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(CATEGORY_KEYS),
      tags: z.array(z.string()).default([]),
      /** Same value on every translation of one article: links FR and EN versions. */
      translationKey: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Slug of a related project (e.g. "vixely"). */
      project: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  // src/content/projects/<locale>/<slug>.md
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string().max(200),
    status: z.enum(["stable", "beta", "wip"]),
    order: z.number().int(),
    /** File name of the logo in src/assets/projects/ (SVG). */
    logo: z.string(),
    /** Brand colours used for the project accent, [start, end] of its gradient. */
    colors: z.tuple([z.string(), z.string()]),
    url: z.url().optional(),
    repo: z.url(),
    license: z.string(),
    platforms: z.array(z.enum(PLATFORM_KEYS)).min(1),
    stack: z.array(z.string()),
    features: z.array(z.string()),
  }),
});

const pages = defineCollection({
  // src/content/pages/<locale>/<about|legal|privacy>.md
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects, pages };
