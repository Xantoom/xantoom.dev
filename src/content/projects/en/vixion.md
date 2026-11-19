---
name: Vixion
tagline: Records the Twitch channels you follow, chat included.
description: A self-hosted app that records every broadcast of the channels you pick, chat included, and plays them back in your browser.
status: stable
order: 2
logo: vixion
colors: ["#e5322d", "#ff7a59"]
repo: https://github.com/Xantoom/Vixion
license: AGPL-3.0
platforms: [docker]
stack: [Rust, static binary, Docker]
features:
  - "<strong>Records every broadcast</strong> of the channels you add, at source quality, as soon as they go live. HEVC and AV1 are kept as Twitch sends them."
  - "<strong>Records the chat</strong> and replays it in sync with the video: Twitch, 7TV, BetterTTV and FrankerFaceZ badges and emotes."
  - "<strong>Playback</strong>: video and chat side by side, resume where you left off, audio compressor."
  - "<strong>Keeps the disk in check</strong>: recordings expire after 14 days unless kept forever, the oldest go first."
  - "<strong>Several people</strong>, with roles and permissions."
  - "<strong>Small</strong>: one static binary of a few megabytes, a few megabytes of memory at rest."
---

Vixion runs as a single Docker container, on a Linux PC, a NAS or a server. Add a channel from the search bar, and it gets recorded whenever it goes live.

Interface in English and French, on phones, tablets, desktops and TVs.

Vixion is not affiliated with Twitch. Record only what you're allowed to keep.
