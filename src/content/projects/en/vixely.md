---
name: Vixely
tagline: Edit videos, images and GIFs in your browser.
description: A 100% local, free media editor. Nothing is uploaded to a server, there isn't even a server. No account, no sign-up.
status: stable
order: 1
logo: vixely
colors: ["#a78bfa", "#7c3aed"]
url: https://vixely.app/
repo: https://github.com/Xantoom/Vixely
license: MIT
platforms: [Browser (Chrome, Edge, Firefox, Safari)]
stack: [React 19, TypeScript, TanStack Router, Zustand, WebCodecs, WebGL2]
features:
  - "<strong>Video</strong>: trim, crop, resize, color correction, switch audio or subtitle tracks."
  - "<strong>Image</strong>: crop, filters, brightness, contrast, saturation and format conversion."
  - "<strong>GIF</strong>: trim, frame-by-frame editing, size optimization, export to APNG or animated WebP."
  - "<strong>Real-time preview</strong>: every adjustment renders instantly through WebGL2."
  - "<strong>Export presets</strong> for Discord, TikTok, Twitter, YouTube and Twitch."
  - "<strong>Local-only</strong>: your files never leave your device, and the app works offline after the first load."
---

Vixely comes from a simple frustration: to trim a video or shrink a GIF, most online tools ask you to upload your files to a server, create an account, or pay to remove a watermark.

Vixely does everything in the browser, using the native **WebCodecs** (hardware decode and encode) and **WebGL2** (real-time preview) APIs. No FFmpeg, no backend: the app is a static site.

## Supported formats

| Type  | Import and export                                 |
| ----- | ------------------------------------------------- |
| Video | MP4, WebM, MKV, AVI, MOV, FLV, WMV, OGV, M4V, MTS |
| Image | PNG, JPG, WebP, AVIF, BMP, TIFF, ICO              |
| GIF   | GIF, APNG, animated WebP                          |
