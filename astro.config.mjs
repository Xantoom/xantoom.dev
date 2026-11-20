// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

const SITE = "https://xantoom.dev";

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  build: { format: "directory" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },

  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/og/"),
    }),
  ],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      weights: ["100 800"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["monospace"],
    },
  ],

  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-dimmed" },
      defaultColor: false,
      wrap: false,
      transformers: [
        {
          pre(node) {
            const lang = this.options.lang;
            if (lang && lang !== "plaintext" && lang !== "text") {
              node.properties["data-lang"] = lang;
            }
            const raw = this.options.meta?.["__raw"] ?? "";
            const match = /\btitle=(?:"([^"]+)"|'([^']+)'|(\S+))/.exec(raw);
            const title = match?.[1] ?? match?.[2] ?? match?.[3];
            if (title) node.properties["data-title"] = title;
          },
        },
      ],
    },
  },

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "media-src 'self'",
        "font-src 'self'",
        // Cloudflare Web Analytics beacon reports here.
        "connect-src 'self' https://cloudflareinsights.com",
        "frame-src https://www.youtube-nocookie.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
      scriptDirective: {
        resources: ["'self'", "https://static.cloudflareinsights.com"],
      },
      styleDirective: {
        resources: [
          "'self'",
          // Shiki colours code tokens through inline style attributes (CSS variables only).
          { resource: "'unsafe-inline'", kind: "attribute" },
        ],
      },
    },
  },
});
