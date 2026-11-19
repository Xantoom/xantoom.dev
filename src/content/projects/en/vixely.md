---
name: Vixely
tagline: Edit videos, images and GIFs in your browser.
description: A video, image and GIF editor that runs entirely in your browser. Your files are not sent anywhere, and there is no account to create.
status: stable
order: 1
logo: vixely
colors: ["#a78bfa", "#7c3aed"]
url: https://vixely.app/
repo: https://github.com/Xantoom/Vixely
license: MIT
platforms: [web]
stack: [React 19, TypeScript, TanStack Router, Zustand, WebCodecs, WebGL2]
features:
  - "<strong>Video</strong>: trim, crop, resize, color correction, switch audio or subtitle tracks."
  - "<strong>Image</strong>: crop, filters, brightness, contrast, saturation and format conversion."
  - "<strong>GIF</strong>: trim, frame-by-frame editing, size optimization, export to APNG or animated WebP."
  - "<strong>Real-time preview</strong>: every adjustment renders instantly through WebGL2."
  - "<strong>Export presets</strong> for Discord, TikTok, Twitter, YouTube and Twitch."
  - "<strong>Local-only</strong>: your files never leave your device, and the app works offline after the first load."
---

To trim a video or shrink a GIF, most online tools ask you to upload your files to a server, create an account or pay to remove a watermark.

Vixely does everything in your browser, with the **WebCodecs** (hardware decode and encode) and **WebGL2** (real-time preview) APIs. No FFmpeg, no backend: the app is a static site.

## Supported formats

| Type  | Import and export                                 |
| ----- | ------------------------------------------------- |
| Video | MP4, WebM, MKV, AVI, MOV, FLV, WMV, OGV, M4V, MTS |
| Image | PNG, JPG, WebP, AVIF, BMP, TIFF, ICO              |
| GIF   | GIF, APNG, animated WebP                          |
