import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import satori from "satori";
import sharp from "sharp";

const require = createRequire(import.meta.url);

type Node = { type: string; props: Record<string, unknown> & { children?: unknown } };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 600 | 800; style: "normal" }[]>;
let avatarUri: Promise<string>;

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

function loadAvatar() {
  avatarUri ??= (async () => {
    const avatarPath = resolve(process.cwd(), "src/assets/avatar.jpg");
    const buf = await sharp(avatarPath)
      .resize(112, 112, { fit: "cover" })
      .jpeg({ quality: 90 })
      .toBuffer();
    return `data:image/jpeg;base64,${buf.toString("base64")}`;
  })();
  return avatarUri;
}

export type OgInput = {
  title: string;
  /** Small line above the title: category, project tagline… */
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
  const size = title.length > 70 ? 54 : title.length > 40 ? 64 : 76;
  const [loadedFonts, avatar] = await Promise.all([loadFonts(), loadAvatar()]);

  const tree = h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "#15161c",
      color: "#ededf2",
      fontFamily: "Inter",
    },
    [
      h("div", {
        width: "100%",
        height: "8px",
        backgroundImage: `linear-gradient(90deg, ${accent[0]}, ${accent[1]})`,
      }),
      h(
        "div",
        {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px 68px",
        },
        [
          h("div", { display: "flex", alignItems: "center", gap: "18px" }, [
            {
              type: "img",
              props: {
                src: avatar,
                width: 54,
                height: 54,
                style: {
                  borderRadius: "999px",
                  border: "2px solid #2c2e38",
                },
              },
            },
            h("div", { fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em" }, "xantoom"),
          ]),
          h("div", { display: "flex", flexDirection: "column", gap: "20px" }, [
            ...(kicker
              ? [h("div", { fontSize: "26px", fontWeight: 600, color: "#a9acb8" }, kicker)]
              : []),
            h(
              "div",
              {
                fontSize: `${size}px`,
                fontWeight: 800,
                lineHeight: 1.08,
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
              fontSize: "24px",
              color: "#8d909c",
              borderTop: "1px solid #2c2e38",
              paddingTop: "24px",
            },
            [h("div", {}, footer), h("div", {}, "xantoom.dev")],
          ),
        ],
      ),
    ],
  );

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: loadedFonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
