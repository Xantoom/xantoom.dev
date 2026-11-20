import type { APIRoute, GetStaticPaths } from "astro";
import { LOCALES } from "~/i18n/config";
import { categoryLabel, formatDate, useTranslations } from "~/i18n/ui";
import { entrySlug, getPosts, getProjects } from "~/lib/content";
import { renderOgImage, type OgInput } from "~/lib/og";

export const getStaticPaths = (async () => {
  const paths: { params: { path: string }; props: OgInput }[] = [
    {
      params: { path: "default" },
      props: {
        title: "Xantoom",
        kicker: "Blog & apps open source",
        footer: "FR / EN",
      },
    },
  ];

  for (const locale of LOCALES) {
    const t = useTranslations(locale);
    for (const post of await getPosts(locale)) {
      paths.push({
        params: { path: `${locale}/${entrySlug(post)}` },
        props: {
          title: post.data.title,
          kicker: categoryLabel(post.data.category, locale),
          footer: formatDate(post.data.pubDate, locale),
        },
      });
    }
    for (const project of await getProjects(locale)) {
      paths.push({
        params: { path: `${locale}/projects/${entrySlug(project)}` },
        props: {
          title: project.data.name,
          kicker: project.data.tagline,
          footer: t("projects.title"),
          accent: project.data.colors,
        },
      });
    }
  }
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props as OgInput);
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
