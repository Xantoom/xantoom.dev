import type { Locale } from "./config";

const fr = {
  "site.description":
    "Articles sur les jeux vidéo, l'optimisation, le matériel et le fonctionnement des choses, et les apps que je construis.",
  skip: "Aller au contenu",
  "nav.home": "Accueil",
  "nav.blog": "Blog",
  "nav.projects": "Projets",
  "nav.about": "À propos",
  "nav.main": "Navigation principale",
  "nav.github": "Xantoom sur GitHub",
  "nav.rss": "Flux RSS",
  "lang.switch": "Read in English",
  "lang.switchShort": "EN",
  "theme.label": "Thème",
  "theme.system": "Système",
  "theme.light": "Clair",
  "theme.dark": "Sombre",

  "home.title": "Xantoom",
  "home.lede":
    "Je construis des outils petits, rapides et respectueux de la vie privée, et j'écris sur ce qui m'intéresse : réglages de jeux, optimisation, matériel, et comment marchent les choses.",
  "home.latest": "Derniers articles",
  "home.allPosts": "Tous les articles",
  "home.projects": "Projets",
  "home.allProjects": "Tous les projets",

  "blog.title": "Blog",
  "blog.description":
    "Guides, réglages, optimisation et explications : tous les articles de xantoom.dev.",
  "blog.latest": "Dernier article",
  "blog.recent": "Articles récents",
  "blog.filterAll": "Tout",
  "blog.filters": "Filtrer par catégorie",
  "blog.search": "Rechercher un article…",
  "blog.searchLabel": "Rechercher dans les articles",
  "blog.count.one": "article",
  "blog.count.other": "articles",
  "blog.empty": "Aucun article ne correspond.",
  "blog.none": "Le premier article arrive bientôt.",
  "post.back": "Blog",
  "post.toc": "Sur cette page",
  "post.minRead": "min de lecture",
  "post.updated": "Mis à jour le",
  "post.published": "Publié le",
  "post.translation": "Cet article existe en anglais",
  "post.prev": "Article précédent",
  "post.next": "Article suivant",
  "post.related": "Projet lié",
  "post.backToTop": "Haut de page",
  "code.copy": "Copier",
  "code.copied": "Copié",

  "projects.title": "Projets",
  "projects.description":
    "Les apps que je construis : open source, gratuites, et respectueuses de la vie privée.",
  "project.visit": "Ouvrir",
  "project.source": "Code source",
  "project.license": "Licence",
  "project.platforms": "Plateformes",
  "project.stack": "Technologies",
  "project.status": "Statut",
  "project.status.stable": "Disponible",
  "project.status.beta": "Bêta",
  "project.status.wip": "En développement",
  "project.features": "Ce que ça fait",
  "project.articles": "Articles liés",
  "project.all": "Tous les projets",

  "video.play": "Lire la vidéo",
  "video.youtubeNotice":
    "La vidéo est chargée depuis YouTube (youtube-nocookie.com) uniquement après ton clic.",

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
  "404.home": "Retour à l'accueil",
} as const;

export type UIKey = keyof typeof fr;

const en: Record<UIKey, string> = {
  "site.description":
    "Articles about video games, optimization, hardware and how things work, plus the apps I build.",
  skip: "Skip to content",
  "nav.home": "Home",
  "nav.blog": "Blog",
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.main": "Main navigation",
  "nav.github": "Xantoom on GitHub",
  "nav.rss": "RSS feed",
  "lang.switch": "Lire en français",
  "lang.switchShort": "FR",
  "theme.label": "Theme",
  "theme.system": "System",
  "theme.light": "Light",
  "theme.dark": "Dark",

  "home.title": "Xantoom",
  "home.lede":
    "I build small, fast, privacy-respecting tools, and I write about what I care about: game settings, optimization, hardware, and how things work.",
  "home.latest": "Latest posts",
  "home.allPosts": "All posts",
  "home.projects": "Projects",
  "home.allProjects": "All projects",

  "blog.title": "Blog",
  "blog.description": "Guides, settings, optimization and explainers: every post on xantoom.dev.",
  "blog.latest": "Latest post",
  "blog.recent": "Recent posts",
  "blog.filterAll": "All",
  "blog.filters": "Filter by category",
  "blog.search": "Search posts…",
  "blog.searchLabel": "Search posts",
  "blog.count.one": "post",
  "blog.count.other": "posts",
  "blog.empty": "No post matches.",
  "blog.none": "The first post is coming soon.",
  "post.back": "Blog",
  "post.toc": "On this page",
  "post.minRead": "min read",
  "post.updated": "Updated",
  "post.published": "Published",
  "post.translation": "This post is available in French",
  "post.prev": "Previous post",
  "post.next": "Next post",
  "post.related": "Related project",
  "post.backToTop": "Back to top",
  "code.copy": "Copy",
  "code.copied": "Copied",

  "projects.title": "Projects",
  "projects.description": "The apps I build: open source, free, and privacy-respecting.",
  "project.visit": "Open",
  "project.source": "Source code",
  "project.license": "License",
  "project.platforms": "Platforms",
  "project.stack": "Built with",
  "project.status": "Status",
  "project.status.stable": "Available",
  "project.status.beta": "Beta",
  "project.status.wip": "In development",
  "project.features": "What it does",
  "project.articles": "Related posts",
  "project.all": "All projects",

  "video.play": "Play video",
  "video.youtubeNotice":
    "The video loads from YouTube (youtube-nocookie.com) only after you click.",

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
  "404.home": "Back to home",
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
