import { getCollection, type CollectionEntry } from "astro:content";
import { DEFAULT_LOCALE, isLocale, localePath, type Locale } from "~/i18n/config";

export type Post = CollectionEntry<"blog">;
export type Project = CollectionEntry<"projects">;

/** Entry ids look like "fr/my-post" or "fr/my-post/index". */
function splitId(id: string): { locale: Locale; slug: string } {
  const [first, ...rest] = id.split("/");
  const locale = isLocale(first) ? first : DEFAULT_LOCALE;
  const slug = (isLocale(first) ? rest : [first, ...rest])
    .filter((part) => part !== "index")
    .join("/");
  return { locale, slug };
}

export const entryLocale = (entry: Post | Project): Locale => splitId(entry.id).locale;
export const entrySlug = (entry: Post | Project): string => splitId(entry.id).slug;

const isPublished = (post: Post) => import.meta.env.DEV || !post.data.draft;

/** Published posts of one locale, newest first. */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    (post) => entryLocale(post) === locale && isPublished(post),
  );
  return posts.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  const projects = await getCollection("projects", (project) => entryLocale(project) === locale);
  return projects.toSorted((a, b) => a.data.order - b.data.order);
}

export const postUrl = (post: Post) => localePath(entryLocale(post), "blog", entrySlug(post));
export const projectUrl = (project: Project) =>
  localePath(entryLocale(project), "projects", entrySlug(project));

/** The same article in the other locales, keyed by locale. */
export async function getPostTranslations(post: Post): Promise<Partial<Record<Locale, string>>> {
  const all = await getCollection(
    "blog",
    (other) => other.data.translationKey === post.data.translationKey && isPublished(other),
  );
  return Object.fromEntries(all.map((other) => [entryLocale(other), postUrl(other)]));
}

/** Reading time in minutes, from the raw Markdown/MDX source. */
export function readingTime(source: string | undefined): number {
  if (!source) return 1;
  const text = source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^import .*$/gm, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`[\]()!-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
