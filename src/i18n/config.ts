export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

/** `flag` is a Circle Flags icon name (country code). */
export const LOCALE_META: Record<
  Locale,
  { label: string; htmlLang: string; ogLocale: string; flag: string }
> = {
  fr: { label: "Français", htmlLang: "fr", ogLocale: "fr_FR", flag: "fr" },
  en: { label: "English", htmlLang: "en", ogLocale: "en_US", flag: "gb" },
};

/** Route segments that are translated. Keys are stable ids used in code. */
const SEGMENTS = {
  blog: { fr: "blog", en: "blog" },
  projects: { fr: "projets", en: "projects" },
  about: { fr: "a-propos", en: "about" },
  legal: { fr: "mentions-legales", en: "legal" },
  privacy: { fr: "confidentialite", en: "privacy" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof SEGMENTS;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

function prefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Build a localized path. Always ends with a trailing slash. */
export function localePath(locale: Locale, route?: RouteKey, slug?: string): string {
  const parts = [prefix(locale)];
  if (route) parts.push(SEGMENTS[route][locale]);
  if (slug) parts.push(slug);
  const path = parts.join("/").replace(/\/+/g, "/");
  return path === "" ? "/" : `${path.startsWith("/") ? "" : "/"}${path}/`;
}

export function homePath(locale: Locale): string {
  return localePath(locale);
}
