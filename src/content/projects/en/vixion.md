---
name: Vixion
tagline: Self-hosted Twitch stream recorder, chat included.
description: A self-hosted app that records every broadcast of selected Twitch channels, chat included, and plays them back in the browser.
status: stable
order: 2
logo: vixion
colors: ["#e8663a", "#ff94bf"]
repo: https://github.com/Xantoom/Vixion
license: AGPL-3.0
platforms: [docker]
stack:
  [
    Rust,
    axum,
    Tokio,
    SQLite,
    React,
    TypeScript,
    Tailwind CSS,
    Vite,
    TanStack Router,
    TanStack Query,
    Zustand,
    Mediabunny,
    Docker,
  ]
features:
  - title: "Automatic recording"
    text: "Every broadcast of followed channels, at source quality. HEVC and AV1 streams are kept as is, or only H.264 is kept."
  - title: "Chat"
    text: "Recorded and replayed in sync, with Twitch, 7TV, BetterTTV and FrankerFaceZ badges and emotes. A timestamp takes the video to the message."
  - title: "Ads"
    text: "None with a Turbo or subscriber token. Without one, the Twitch player is switched when an ad starts: short gaps replace the ads."
  - title: "Player"
    text: "Video and chat side by side, resume playback, audio compressor, the frame on screen saved as a PNG."
  - title: "Downloads"
    text: "The video, the chat as JSON, or the chat as ASS subtitles."
  - title: "Disk space"
    text: "Recordings expire after 14 days unless kept. The oldest go first. Statistics show the space each streamer takes."
  - title: "Multi-user"
    text: "Administrators, users and custom roles, with permissions per role and per person."
  - title: "Lightweight"
    text: "One static binary of a few megabytes, a few megabytes of memory at rest. Logs, alerts and webhooks (Discord, ntfy or JSON) when something goes wrong."
---

Vixion runs as a single Docker container, on a Linux PC, a NAS or a server. A channel added from the search bar is recorded every time it goes live.

The server is written in Rust. The player reads recordings with **Mediabunny**: video is decoded by **WebCodecs** and drawn on a canvas, with the browser's `<video>` element as a fallback when WebCodecs is not available.

The interface is available in English and French, on phones, tablets, desktops and TVs.

Vixion is not affiliated with Twitch.
