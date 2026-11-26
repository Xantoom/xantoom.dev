---
name: Vixeeny
tagline: Screenshots and screen recording for Windows.
description: A native screenshot and screen recording app for Windows 10 and 11, written in Rust. In release candidate ahead of 1.0.
status: beta
order: 3
logo: vixeeny
colors: ["#5b5f6b", "#8a8e99"]
repo: https://github.com/Xantoom/Vixeeny
license: GPL-3.0
platforms: [windows]
stack: [Rust, Slint, FFmpeg]
features:
  - title: "Capture"
    text: "Region, window, screen, all monitors or a full scrolling page."
  - title: "Image formats"
    text: "PNG, JPEG, WebP, AVIF and JPEG XL, with HDR kept or converted to SDR."
  - title: "Editor"
    text: "Arrows, shapes, text, highlighter, numbered steps, blur and pixelate."
  - title: "Text recognition"
    text: "The text of a region is copied to the clipboard, without opening the editor."
  - title: "Video"
    text: "H.264, HEVC or AV1, encoded by NVIDIA NVENC, AMD AMF, Intel QuickSync or the processor."
  - title: "Audio"
    text: "Game sound, microphone and chosen programs on separate tracks."
  - title: "Replay"
    text: "The last minutes are kept in memory, saved with one shortcut and trimmed before saving."
  - title: "Games"
    text: "One folder per game. Also works in games started as administrator."
  - title: "Updates"
    text: "In the background, signature checked, rolled back if the new version fails."
---

Vixeeny sits in the notification area and waits for a shortcut: nothing shows on screen until then. The resident program is separate from the rest and uses no processor time when idle; the app itself only starts for an action and closes afterwards.

The interface is built with **Slint**, video is encoded with **FFmpeg** and text recognition uses the one built into Windows, on the computer. The only network connection is the update check on GitHub.

The installer and the portable `.zip` are on the GitHub releases page, for 64-bit Windows 10 and 11. They are not signed with a paid certificate: SmartScreen may show a warning on first launch ("More info", then "Run anyway"). Known limitations are described in the repository.

The interface is available in French and English.
