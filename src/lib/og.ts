import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";
import sharp from "sharp";

const require = createRequire(import.meta.url);

type Node = { type: string; props: Record<string, unknown> & { children?: unknown } };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 600 | 800; style: "normal" }[]>;

function loadFonts() {
  fonts ??= Promise.all(
    [
      ["@fontsource/inter/files/inter-latin-400-normal.woff", 400],
      ["@fontsource/inter/files/inter-latin-600-normal.woff", 600],
      ["@fontsource/inter/files/inter-latin-800-normal.woff", 800],
    ].map(async ([file, weight]) => ({
      name: "Inter",
      data: await readFile(require.resolve(file as string)),
      weight: weight as 400 | 600 | 800,
      style: "normal" as const,
    })),
  );
  return fonts;
}

export type OgInput = {
  title: string;
  /** Small line above the footer: category, project tagline… */
  kicker?: string;
  footer: string;
  accent?: [string, string];
};

/** 1200×630 PNG share image. */
export async function renderOgImage({
  title,
  kicker,
  footer,
  accent = ["#ff5a2c", "#ffae1a"],
}: OgInput): Promise<Buffer> {
  const size = title.length > 70 ? 56 : title.length > 40 ? 68 : 80;

  const tree = h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 80px",
      background: "#15161c",
      backgroundImage: `linear-gradient(180deg, ${accent[0]}26 0%, ${accent[1]}0d 45%, #15161c00 80%)`,
      color: "#ededf2",
      fontFamily: "Inter",
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: "18px" }, [
        h("div", {
          width: "56px",
          height: "56px",
          borderRadius: "16px",
          backgroundImage: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`,
        }),
        h("div", { fontSize: "34px", fontWeight: 800, letterSpacing: "-0.02em" }, "xantoom"),
      ]),
      h("div", { display: "flex", flexDirection: "column", gap: "24px" }, [
        ...(kicker
          ? [h("div", { fontSize: "28px", fontWeight: 600, color: "#a9acb8" }, kicker)]
          : []),
        h(
          "div",
          {
            fontSize: `${size}px`,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "1040px",
          },
          title,
        ),
      ]),
      h(
        "div",
        {
          display: "flex",
          justifyContent: "space-between",
          fontSize: "26px",
          color: "#8d909c",
          borderTop: "1px solid #2c2e38",
          paddingTop: "24px",
        },
        [h("div", {}, footer), h("div", {}, "xantoom.dev")],
      ),
    ],
  );

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: await loadFonts() });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
