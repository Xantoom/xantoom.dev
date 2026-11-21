---
name: Vixely
tagline: Video, image and GIF editor that runs in the browser.
description: A video, image and GIF editor that runs fully locally in the browser. No uploads, no account, works offline.
status: stable
order: 1
logo: vixely
colors: ["#a78bfa", "#7c3aed"]
url: https://vixely.app/
repo: https://github.com/Xantoom/Vixely
license: MIT
platforms: [web]
stack:
  [
    React 19,
    TypeScript,
    Tailwind CSS,
    Vite,
    TanStack Router,
    Zustand,
    Mediabunny,
    WebCodecs,
    WebGL2,
    Rust,
    WebAssembly,
  ]
features:
  - title: "Video"
    text: "Trim, crop, resize, color correction, audio and subtitle track selection."
  - title: "Image"
    text: "Crop, filters, brightness, contrast, saturation, format conversion."
  - title: "GIF"
    text: "Trim, frame-by-frame editing, size reduction, APNG or animated WebP export."
  - title: "Real-time preview"
    text: "Every adjustment renders immediately with WebGL2."
  - title: "Export presets"
    text: "Discord, TikTok, X, YouTube and Twitch."
  - title: "Local processing"
    text: "Files stay on the device. The app works offline after the first load."
---

Files are read and written with **Mediabunny**, decoding and encoding go through hardware-accelerated **WebCodecs**, and the preview through **WebGL2**. GIF encoding is a Rust module compiled to WebAssembly. No FFmpeg and no server: the app is a static site.

## Formats

| Type  | Import and export                                 |
| ----- | ------------------------------------------------- |
| Video | MP4, WebM, MKV, AVI, MOV, FLV, WMV, OGV, M4V, MTS |
| Image | PNG, JPG, WebP, AVIF, BMP, TIFF, ICO              |
| GIF   | GIF, APNG, animated WebP                          |
