import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import type { Locale } from "~/i18n/config";
import { useTranslations } from "~/i18n/ui";
import { getPosts, postUrl } from "./content";
import { SITE } from "./site";

export async function buildFeed(context: APIContext, locale: Locale) {
  const t = useTranslations(locale);
  const posts = await getPosts(locale);
  return rss({
    title: `${SITE.name} · ${t("blog.title")}`,
    description: t("blog.description"),
    site: context.site ?? SITE.url,
    trailingSlash: true,
    customData: `<language>${locale}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
