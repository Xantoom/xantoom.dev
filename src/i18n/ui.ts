import type { Locale } from "./config";

const fr = {
  "site.description":
    "Articles sur les réglages de jeux, l'optimisation et le matériel, et applications open source de Xantoom.",
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

  "home.hello":
    "Je développe des applications open source et j'écris sur les jeux vidéo, l'optimisation et le matériel.",
  "home.latest": "Derniers articles",
  "home.allPosts": "Tous les articles",
  "home.allApps": "Toutes les apps",

  "blog.title": "Blog",
  "blog.description": "Guides, réglages de jeux, optimisation et explications.",
  "blog.filterAll": "Tout",
  "blog.filters": "Filtrer par catégorie",
  "blog.search": "Rechercher…",
  "blog.searchLabel": "Rechercher dans les articles",
  "blog.count.one": "article",
  "blog.count.other": "articles",
  "blog.empty": "Aucun article ne correspond.",
  "blog.reset": "Réinitialiser les filtres",
  "blog.none": "Aucun article publié pour l'instant.",
  "blog.follow": "Flux RSS",
  "post.back": "Blog",
  "post.toc": "Sommaire",
  "post.minRead": "min",
  "post.readingTime": "Temps de lecture",
  "post.updated": "Mis à jour le",
  "post.published": "Publié le",
  "post.prev": "Précédent",
  "post.next": "Suivant",
  "post.related": "App liée",
  "post.tags": "Mots-clés",
  "post.backToTop": "Haut de page",
  "post.headingLink": "Copier le lien vers cette section",
  "post.linkCopied": "Lien copié",
  "code.copy": "Copier le code",
  "code.copied": "Copié",
  "figure.zoom": "Agrandir l'image",
  "figure.close": "Fermer",

  "projects.title": "Apps",
  "projects.description": "Applications open source que je développe.",
  "project.visit": "Ouvrir",
  "project.download": "Télécharger",
  "project.source": "Code source",
  "project.release": "Dernière version",
  "project.license": "Licence",
  "project.platforms": "Plateformes",
  "project.stack": "Technologies",
  "project.statusLabel": "Statut",
  "project.status.stable": "Disponible",
  "project.status.beta": "Bêta",
  "project.status.wip": "En développement",
  "project.features": "Fonctionnalités",
  "project.articles": "Articles liés",
  "project.all": "Apps",

  "video.play": "Lire la vidéo",
  "video.youtubeNotice": "Au clic, la vidéo est chargée depuis youtube-nocookie.com (Google).",
  "video.watchOnYouTube": "Voir sur YouTube",

  "callout.note": "Note",
  "callout.tip": "Astuce",
  "callout.warning": "Attention",

  "settings.setting": "Réglage",
  "settings.value": "Valeur",
  "settings.why": "Pourquoi",

  "footer.legal": "Mentions légales",
  "footer.privacy": "Confidentialité",
  "footer.source": "Code source du site",

  "404.title": "Page introuvable",
  "404.text": "Cette page n'existe pas ou a été déplacée.",
  "404.home": "Accueil",
} as const;

export type UIKey = keyof typeof fr;

const en: Record<UIKey, string> = {
  "site.description":
    "Posts on game settings, optimization and hardware, and open source apps by Xantoom.",
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

  "home.hello": "I build open source apps and write about video games, optimization and hardware.",
  "home.latest": "Latest posts",
  "home.allPosts": "All posts",
  "home.allApps": "All apps",

  "blog.title": "Blog",
  "blog.description": "Guides, game settings, optimization and explainers.",
  "blog.filterAll": "All",
  "blog.filters": "Filter by category",
  "blog.search": "Search…",
  "blog.searchLabel": "Search posts",
  "blog.count.one": "post",
  "blog.count.other": "posts",
  "blog.empty": "No post matches.",
  "blog.reset": "Reset filters",
  "blog.none": "No posts published yet.",
  "blog.follow": "RSS feed",
  "post.back": "Blog",
  "post.toc": "Contents",
  "post.minRead": "min",
  "post.readingTime": "Reading time",
  "post.updated": "Updated",
  "post.published": "Published",
  "post.prev": "Previous",
  "post.next": "Next",
  "post.related": "Related app",
  "post.tags": "Tags",
  "post.backToTop": "Back to top",
  "post.headingLink": "Copy link to this section",
  "post.linkCopied": "Link copied",
  "code.copy": "Copy code",
  "code.copied": "Copied",
  "figure.zoom": "Zoom image",
  "figure.close": "Close",

  "projects.title": "Apps",
  "projects.description": "Open source apps I build.",
  "project.visit": "Open",
  "project.download": "Download",
  "project.source": "Source code",
  "project.release": "Latest version",
  "project.license": "License",
  "project.platforms": "Platforms",
  "project.stack": "Built with",
  "project.statusLabel": "Status",
  "project.status.stable": "Available",
  "project.status.beta": "Beta",
  "project.status.wip": "In development",
  "project.features": "Features",
  "project.articles": "Related posts",
  "project.all": "Apps",

  "video.play": "Play video",
  "video.youtubeNotice": "On click, the video loads from youtube-nocookie.com (Google).",
  "video.watchOnYouTube": "Watch on YouTube",

  "callout.note": "Note",
  "callout.tip": "Tip",
  "callout.warning": "Warning",

  "settings.setting": "Setting",
  "settings.value": "Value",
  "settings.why": "Why",

  "footer.legal": "Legal notice",
  "footer.privacy": "Privacy",
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

/** Join a label and value using locale-appropriate colon spacing. */
export function labelValue(label: string, value: string, locale: Locale): string {
  return locale === "fr" ? `${label} : ${value}` : `${label}: ${value}`;
}
