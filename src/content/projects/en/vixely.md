---
name: Vixely
tagline: Video, image, GIF, audio and subtitle editor that runs in the browser.
description: A video, image, GIF, audio and subtitle editor that runs fully locally in the browser. No uploads, no account, works offline.
status: stable
order: 1
logo: vixely
colors: ["#2f6bff", "#9b4dff"]
url: https://vixely.app/
repo: https://github.com/Xantoom/Vixely
license: AGPL-3.0
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
    text: "Trim, crop, resize, speed, colour, layers, audio and subtitle tracks."
  - title: "Image"
    text: "Crop, resize, colour, layers, format conversion."
  - title: "GIF"
    text: "Trim, crop, frame-by-frame editing, size reduction, APNG or animated WebP export."
  - title: "Audio"
    text: "Trim, volume, loudness normalisation, noise reduction."
  - title: "Subtitles"
    text: "Lines, timing, styles, side-by-side translation, muxing into the video with their fonts."
  - title: "Export presets"
    text: "Discord, WhatsApp, TikTok, Instagram, YouTube, X, Bluesky, Twitch and more, kept under their size limits."
  - title: "Local processing"
    text: "Files stay on the device. The site works offline once loaded and can be installed as an app."
---

Files are read and written with **Mediabunny**, decoding and encoding go through hardware-accelerated **WebCodecs**, and the preview through **WebGL2**. GIF, image, audio and subtitle processing are Rust modules compiled to WebAssembly. No FFmpeg and no server: the app is a static site.

## Formats

| Type      | Opens                                                |
| --------- | ---------------------------------------------------- |
| Video     | MP4, M4V, MKV, WebM, MOV, ProRes                     |
| Image     | JPEG, PNG, WebP, AVIF, JPEG XL, HEIC, BMP, TIFF, ICO |
| GIF       | GIF, APNG, animated WebP                             |
| Audio     | MP3, WAV, FLAC, Ogg, Opus, M4A, AAC, MKA             |
| Subtitles | SRT, VTT, ASS, SSA, SUP                              |

AVI, FLV, WMV, MPEG and OGV are not supported: neither Mediabunny nor WebCodecs can read them.
