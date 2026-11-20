/**
 * Creates a draft article in every language, with its frontmatter filled in.
 *
 *   bun run new-post <slug> [english-slug] [--category=<key>]
 *
 * The French slug comes first; the English slug defaults to the same value.
 * Both files start as `draft: true` and are visible with `bun run dev` only.
 */
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { CATEGORY_KEYS } from "../src/i18n/ui";

const args = process.argv.slice(2);
const flags = Object.fromEntries(
  args.filter((a) => a.startsWith("--")).map((a) => a.slice(2).split("=") as [string, string]),
);
const [frSlug, enSlug = frSlug] = args.filter((a) => !a.startsWith("--"));
const category = flags.category ?? "guide";
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

if (!frSlug || !slugPattern.test(frSlug) || !slugPattern.test(enSlug!)) {
  console.error("Usage: bun run new-post <slug> [english-slug] [--category=<key>]");
  console.error("Slugs: lowercase letters, digits and dashes, e.g. reglages-cs2.");
  process.exit(1);
}
if (!(CATEGORY_KEYS as readonly string[]).includes(category)) {
  console.error(`Unknown category "${category}". Use one of: ${CATEGORY_KEYS.join(", ")}.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const posts = [
  {
    locale: "fr",
    slug: frSlug,
    title: "Titre de l'article",
    description:
      "Résumé en une ou deux phrases, entre 50 et 200 caractères, affiché dans les listes et les aperçus de partage.",
  },
  {
    locale: "en",
    slug: enSlug!,
    title: "Post title",
    description:
      "One or two sentence summary, 50 to 200 characters, shown in lists and in share previews.",
  },
];

for (const post of posts) {
  const dir = `src/content/blog/${post.locale}/${post.slug}`;
  if (existsSync(dir)) {
    console.error(`${dir} already exists.`);
    process.exit(1);
  }
}

for (const post of posts) {
  const dir = `src/content/blog/${post.locale}/${post.slug}`;
  await mkdir(dir, { recursive: true });
  await writeFile(
    `${dir}/index.mdx`,
    `---
title: ${post.title}
description: ${post.description}
pubDate: ${today}
category: ${category}
tags: []
translationKey: ${frSlug}
draft: true
---

## ${post.locale === "fr" ? "Première partie" : "First section"}
`,
  );
  console.log(`Created ${dir}/index.mdx`);
}
