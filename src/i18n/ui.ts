import type { Locale } from "./config";

const fr = {
  "site.description":
    "Guides sur les réglages de jeux, l'optimisation et le matériel, et les apps open source de Xantoom.",
  skip: "Aller au contenu",
  "nav.home": "Accueil",
  "nav.blog": "Blog",
  "nav.projects": "Apps",
  "nav.about": "À propos",
  "nav.main": "Navigation principale",
  "nav.github": "GitHub",
  "nav.rss": "Flux RSS",
  "lang.label": "Langue",
  "theme.label": "Thème",
  "theme.system": "Système",
  "theme.light": "Clair",
  "theme.dark": "Sombre",

  "home.hello": "Salut, moi c'est Xavier.",
  "home.lede":
    "Je développe des apps gratuites et open source, et j'écris des guides : réglages de jeux, optimisation, matériel.",
  "home.newRelease": "Nouvelle version :",
  "home.latest": "Articles",
  "home.allPosts": "Tout voir",
  "home.projects": "Apps",
  "home.allProjects": "Tout voir",

  "blog.title": "Blog",
  "blog.description": "Guides, réglages de jeux, optimisation et explications.",
  "blog.latest": "Dernier article",
  "blog.recent": "Articles récents",
  "blog.filterAll": "Tout",
  "blog.filters": "Filtrer par catégorie",
  "blog.search": "Rechercher…",
  "blog.searchLabel": "Rechercher dans les articles",
  "blog.count.one": "article",
  "blog.count.other": "articles",
  "blog.empty": "Aucun article ne correspond.",
  "blog.none": "Pas encore d'article. Le premier arrive bientôt.",
  "blog.follow": "Suivre le flux RSS",
  "post.back": "Blog",
  "post.toc": "Sommaire",
  "post.minRead": "min",
  "post.readingTime": "Temps de lecture",
  "post.updated": "Mis à jour le",
  "post.published": "Publié le",
  "post.translation": "Lire en anglais",
  "post.prev": "Précédent",
  "post.next": "Suivant",
  "post.related": "App liée",
  "post.backToTop": "Haut de page",
  "code.copy": "Copier",
  "code.copied": "Copié",

  "projects.title": "Apps",
  "projects.description": "Mes apps. Toutes gratuites et open source.",
  "project.visit": "Ouvrir",
  "project.download": "Télécharger",
  "project.source": "Code source",
  "project.release": "Dernière version",
  "project.license": "Licence",
  "project.platforms": "Plateformes",
  "project.stack": "Technologies",
  "project.status.stable": "Disponible",
  "project.status.beta": "Bêta",
  "project.status.wip": "En développement",
  "project.features": "Fonctionnalités",
  "project.articles": "Articles liés",
  "project.all": "Apps",

  "video.play": "Lire la vidéo",
  "video.youtubeNotice": "La vidéo se charge depuis YouTube (youtube-nocookie.com) après ton clic.",

  "callout.note": "Note",
  "callout.tip": "Astuce",
  "callout.warning": "Attention",

  "settings.setting": "Réglage",
  "settings.value": "Valeur",
  "settings.why": "Pourquoi",

  "footer.legal": "Mentions légales",
  "footer.privacy": "Confidentialité",
  "footer.noTracking": "Aucun cookie, aucun traceur.",
  "footer.source": "Code source du site",

  "404.title": "Page introuvable",
  "404.text": "Cette page n'existe pas ou a été déplacée.",
  "404.home": "Accueil",
} as const;

export type UIKey = keyof typeof fr;

const en: Record<UIKey, string> = {
  "site.description":
    "Guides on game settings, optimization and hardware, and Xantoom's open source apps.",
  skip: "Skip to content",
  "nav.home": "Home",
  "nav.blog": "Blog",
  "nav.projects": "Apps",
  "nav.about": "About",
  "nav.main": "Main navigation",
  "nav.github": "GitHub",
  "nav.rss": "RSS feed",
  "lang.label": "Language",
  "theme.label": "Theme",
  "theme.system": "System",
  "theme.light": "Light",
  "theme.dark": "Dark",

  "home.hello": "Hi, I'm Xavier.",
  "home.lede":
    "I build free, open source apps, and I write guides: game settings, optimization, hardware.",
  "home.newRelease": "New release:",
  "home.latest": "Posts",
  "home.allPosts": "See all",
  "home.projects": "Apps",
  "home.allProjects": "See all",

  "blog.title": "Blog",
  "blog.description": "Guides, game settings, optimization and explainers.",
  "blog.latest": "Latest post",
  "blog.recent": "Recent posts",
  "blog.filterAll": "All",
  "blog.filters": "Filter by category",
  "blog.search": "Search…",
  "blog.searchLabel": "Search posts",
  "blog.count.one": "post",
  "blog.count.other": "posts",
  "blog.empty": "No post matches.",
  "blog.none": "No posts yet. The first one is coming soon.",
  "blog.follow": "Follow the RSS feed",
  "post.back": "Blog",
  "post.toc": "Contents",
  "post.minRead": "min",
  "post.readingTime": "Reading time",
  "post.updated": "Updated",
  "post.published": "Published",
  "post.translation": "Read in French",
  "post.prev": "Previous",
  "post.next": "Next",
  "post.related": "Related app",
  "post.backToTop": "Back to top",
  "code.copy": "Copy",
  "code.copied": "Copied",

  "projects.title": "Apps",
  "projects.description": "My apps. All free and open source.",
  "project.visit": "Open",
  "project.download": "Download",
  "project.source": "Source code",
  "project.release": "Latest version",
  "project.license": "License",
  "project.platforms": "Platforms",
  "project.stack": "Built with",
  "project.status.stable": "Available",
  "project.status.beta": "Beta",
  "project.status.wip": "In development",
  "project.features": "Features",
  "project.articles": "Related posts",
  "project.all": "Apps",

  "video.play": "Play video",
  "video.youtubeNotice": "The video loads from YouTube (youtube-nocookie.com) after you click.",

  "callout.note": "Note",
  "callout.tip": "Tip",
  "callout.warning": "Warning",

  "settings.setting": "Setting",
  "settings.value": "Value",
  "settings.why": "Why",

  "footer.legal": "Legal notice",
  "footer.privacy": "Privacy",
  "footer.noTracking": "No cookies, no trackers.",
  "footer.source": "Site source code",

  "404.title": "Page not found",
  "404.text": "This page doesn't exist or has moved.",
  "404.home": "Home",
};

const dictionaries: Record<Locale, Record<UIKey, string>> = { fr, en };

export function useTranslations(locale: Locale) {
  return (key: UIKey): string => dictionaries[locale][key];
}

export const CATEGORIES = {
  guide: { fr: "Guide", en: "Guide" },
  settings: { fr: "Réglages", en: "Settings" },
  optimization: { fr: "Optimisation", en: "Optimization" },
  explainer: { fr: "Comment ça marche", en: "How it works" },
  hardware: { fr: "Matériel", en: "Hardware" },
  dev: { fr: "Dev", en: "Dev" },
  news: { fr: "Annonce", en: "Announcement" },
} as const satisfies Record<string, Record<Locale, string>>;

export type Category = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [Category, ...Category[]];

export function categoryLabel(category: Category, locale: Locale): string {
  return CATEGORIES[category][locale];
}

export function formatDate(date: Date, locale: Locale, style: "long" | "short" = "long"): string {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
