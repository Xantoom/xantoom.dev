# AGENTS.md

Guide for AI coding agents (Claude Code, Codex, Cursor…) working on xantoom.dev.
The whole codebase is written by agents: keep it consistent with what is already here.

## Project

Personal site of Xantoom: a blog (guides, best game settings, optimization, explainers)
and one page per app (Vixely, Vixion, Vixeeny). French is the default language, English
is a full translation, more languages must stay easy to add.

Static Astro site deployed to Cloudflare Workers (static assets only, no server code).

## Commands

Always use Bun.

| Command              | What it does                                                                     |
| -------------------- | -------------------------------------------------------------------------------- |
| `bun install`        | Install dependencies                                                             |
| `bun run dev`        | Dev server on http://localhost:4321 (draft posts are visible here)               |
| `bun run build`      | Production build to `dist/`                                                      |
| `bun run preview`    | Serve the production build locally                                               |
| `bun run preview:cf` | Serve `dist/` with Wrangler as on Cloudflare, `_headers` applied (needs Node.js) |
| `bun run fmt`        | Format with oxfmt (`.astro`, `.ts`, `.css`, `.md`, `.mdx`, `.json`)              |
| `bun run lint`       | `bun lint` (oxlint inside Bun, canary until it ships in a stable Bun)            |
| `bun run check`      | Type check, `.astro` included (`tsc` 7.1 + `@astrojs/ts-content-mapper`)         |
| `bun run verify`     | Everything CI runs: format check, lint, types, build                             |
| `bun run deploy`     | Manual build and `wrangler deploy` (normally CI deploys, see below)              |
| `bun run new-post`   | Create a draft article in both languages (see "Writing an article")              |

Run `bun run verify` before calling a change done. CI runs the same steps on every push
and pull request; a push to `main` that passes them is deployed to production
(`.github/workflows/ci.yml`). Never deploy around a failing check.

Notes:

- `bun fmt` does not support `.astro` files, so formatting uses oxfmt directly.
- `astro check` does not support TypeScript 7: do not add `@astrojs/check` back.

## Structure

```
src/
  content/              Markdown/MDX content (see "Content" below)
  content.config.ts     Collection schemas (Zod): the source of truth for frontmatter
  i18n/config.ts        Locales, translated URL segments, localePath()
  i18n/ui.ts            Interface strings per locale, categories, date formatting
  lib/                  content helpers, site constants, RSS, OG image rendering
  layouts/              BaseLayout (html shell, header, footer)
  views/                Page bodies, shared by every locale
  pages/                Routes only: thin files that pick a locale and render a view
  components/           UI components; components/mdx/ = components usable in articles
  styles/global.css     Tokens (colours, spacing, motion), reset, base styles
  styles/prose.css      Article typography
  assets/projects/      Project logos (SVG)
public/                 Copied as is: icons, robots.txt, _headers (security headers)
```

Routes live in `src/pages/` (French, no prefix) and `src/pages/en/`. They stay thin:
all markup goes in `src/views/`, so a page exists once whatever the number of languages.

## Content

### Articles

One folder per article and per language, so images sit next to the text:

```
src/content/blog/fr/<slug>/index.mdx
src/content/blog/fr/<slug>/capture.png
src/content/blog/en/<slug>/index.mdx
```

- The folder name is the URL slug (`/blog/<slug>/`, `/en/blog/<slug>/`). Slugs may differ
  between languages; translations are linked by the same `translationKey`.
- Frontmatter is validated by `src/content.config.ts`. `description` is 50 to 200
  characters (used for SEO and share cards).
- `draft: true` hides a post from the production build (still visible with `bun run dev`).
- `##` and `###` headings build the table of contents automatically.
- `src/content/blog/*/guide-de-style|style-guide` is the reference draft that uses every
  element. Read it before writing a post.

#### Writing an article

1. `bun run new-post <fr-slug> [en-slug] [--category=<key>]` creates both `index.mdx`
   files as drafts, with the same `translationKey`.
2. Write the French text, put images next to it, check it with `bun run dev`.
3. Translate it in the English file.
4. Remove `draft: true` from both files, run `bun run verify`, push to `main`: CI deploys.

Components available in MDX without importing them:

- `<Figure src={img} alt="…" caption="…" />` for an imported local image (optimized to AVIF/WebP).
- `<Video src="/media/x.webm" gif alt="…" />` for a muted looping video instead of a GIF
  (files go in `public/media/`). Without `gif`, a normal video with controls.
- `<YouTube id="…" title="…" />`: nothing is loaded from YouTube before the click.
- `<Callout type="note|tip|warning" title="…">…</Callout>`.
- `<Settings title="…" rows={[{ name, value, why?, highlight? }]} />` for settings tables.

Technologies in a project's `stack` get an icon from `src/lib/stack.ts`; add new names there.

Code blocks are highlighted by Shiki at build time, with light and dark themes.

### Projects

`src/content/projects/<locale>/<slug>.md`, plus a logo in `src/assets/projects/<logo>.svg`
(or `<logo>-light.svg` and `<logo>-dark.svg`). `order` sets the position in lists,
`colors` tints the project tile and its page.
`platforms` takes keys from `src/lib/platforms.ts` (`web`, `windows`, `macos`, `linux`,
`docker`), each shown with its icon. The latest GitHub release of `repo` is fetched at
build time (`src/lib/github.ts`) and shown as the version; CI rebuilds daily to keep it
current. A repository without releases simply shows no version.

### Fixed pages

About, legal notice and privacy policy are Markdown in `src/content/pages/<locale>/`.
The About page is MDX and lists the apps with `<AppList />` (`components/mdx/AppList.astro`).

## Adding a language

1. `src/i18n/config.ts`: add it to `LOCALES`, `LOCALE_META` and every entry of `SEGMENTS`.
2. `src/i18n/ui.ts`: add the dictionary and the category labels (`bun run check` lists
   what is missing).
3. `astro.config.mjs`: add it to `i18n.locales`.
4. Copy `src/pages/en/` to `src/pages/<locale>/` and replace `"en"` with the new locale,
   renaming files to the translated segments.
5. Add content under `src/content/*/<locale>/`.

## Rules

- **Privacy:** no cookies, no third-party requests on page load except the cookieless
  Cloudflare Web Analytics beacon (production builds only, `BaseHead.astro`). Fonts are
  self-hosted (Astro Fonts API). Anything embedded from another site loads only after a
  user action (see `YouTube.astro`). The only browser storage is `localStorage.theme`.
  If this ever changes, update the privacy pages in both languages.
- **Security:** Astro generates a hash-based CSP (`security.csp` in `astro.config.mjs`).
  No inline `<script>` that is not processed by Astro, no `eval`, no external scripts.
  Response headers are in `public/_headers`.
- **Performance:** static HTML first, JavaScript only for small progressive enhancements
  in component `<script>` tags. No UI framework unless a feature truly needs one; if React
  is ever added, follow Vercel's React best practices.
- **Accessibility:** WCAG AA contrast in both themes, visible focus, keyboard support,
  `prefers-reduced-motion` respected for every animation.
- **Design:** use the tokens in `global.css`, never raw colours in components (except
  project brand colours from content).
- **Sizes:** use `rem`, not `px` (except 1–2px borders, shadows and media queries). The root
  font size grows slightly on large screens, and everything in `rem` scales with it.
- **Icons:** `<Icon name="…" />` inlines icons at build time: Lucide names (`"arrow-right"`),
  `"si:…"` for brands (Simple Icons), `"flag:…"` for flags (Circle Flags). Prefer an icon
  with a `label`/`title` over a short text label when the icon is clear. Never use emoji
  or Unicode symbols as icons.
- **Copy:** plain, short and explanatory. No marketing tone, no slogans, no claims that
  only restate a default (e.g. "no cookies" outside the privacy page). Never address the
  reader ("tu", "vous", "you"): write impersonally; the author may speak as "je"/"I". Both themes must be checked for every UI change.
  Avoid generic "AI-looking" UI: no gradient text, no glassmorphism cards, no emoji icons,
  no decorative blobs.
- **i18n:** every visible string goes through `useTranslations()`; never hardcode French
  or English in a component.
- **Repository hygiene:** this repo is public. No brainstorming, plans or scratch notes in
  tracked files. Working notes go in `docs/`, which is git-ignored.
- Code and comments are in English. Content is written in French first, then translated.
