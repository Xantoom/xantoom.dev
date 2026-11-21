/**
 * Icon for each technology listed in a project's `stack` (see Icon.astro).
 * Brands use Simple Icons; a technology without a brand icon gets a Lucide one.
 * A name missing here is shown as text only.
 */
const STACK_ICONS: Record<string, string> = {
  react: "si:react",
  typescript: "si:typescript",
  javascript: "si:javascript",
  "tanstack router": "si:tanstack",
  "tanstack query": "si:tanstack",
  zustand: "package",
  mediabunny: "clapperboard",
  "tailwind css": "si:tailwindcss",
  vite: "si:vite",
  axum: "server",
  tokio: "si:tokio",
  sqlite: "si:sqlite",
  webcodecs: "film",
  webgl: "si:webgl",
  webgl2: "si:webgl",
  webassembly: "si:webassembly",
  rust: "si:rust",
  tauri: "si:tauri",
  docker: "si:docker",
  astro: "si:astro",
  bun: "si:bun",
};

/** "React 19" → "si:react": the version suffix is ignored. */
export function stackIcon(name: string): string | undefined {
  const key = name.toLowerCase().trim();
  return STACK_ICONS[key] ?? STACK_ICONS[key.replace(/\s+[\d.]+$/, "")];
}
