import type { Locale } from "~/i18n/config";

/** Platforms an app runs on: an icon (see Icon.astro) and a label per locale. */
export const PLATFORMS = {
  web: { icon: "app-window", fr: "Navigateur", en: "Web browser" },
  windows: { icon: "si:windows", fr: "Windows", en: "Windows" },
  macos: { icon: "si:apple", fr: "macOS", en: "macOS" },
  linux: { icon: "si:linux", fr: "Linux", en: "Linux" },
  docker: { icon: "si:docker", fr: "Docker", en: "Docker" },
} as const satisfies Record<string, { icon: string } & Record<Locale, string>>;

export type Platform = keyof typeof PLATFORMS;
export const PLATFORM_KEYS = Object.keys(PLATFORMS) as [Platform, ...Platform[]];
