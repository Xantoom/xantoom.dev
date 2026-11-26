---
name: Vixely
tagline: Éditeur de vidéos, d'images, de GIF, d'audio et de sous-titres qui fonctionne dans le navigateur.
description: Éditeur de vidéos, d'images, de GIF, d'audio et de sous-titres entièrement local, dans le navigateur. Aucun envoi de fichier, aucun compte, utilisable hors ligne.
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
  - title: "Vidéo"
    text: "Découpe, recadrage, redimensionnement, vitesse, couleurs, calques, pistes audio et sous-titres."
  - title: "Image"
    text: "Recadrage, redimensionnement, couleurs, calques, conversion de format."
  - title: "GIF"
    text: "Découpe, recadrage, édition image par image, réduction du poids, export APNG ou WebP animé."
  - title: "Audio"
    text: "Découpe, volume, normalisation du niveau sonore, réduction du bruit."
  - title: "Sous-titres"
    text: "Lignes, minutage, styles, traduction côte à côte, intégration dans la vidéo avec leurs polices."
  - title: "Préréglages d'export"
    text: "Discord, WhatsApp, TikTok, Instagram, YouTube, X, Bluesky, Twitch et d'autres, sous leurs limites de poids."
  - title: "Traitement local"
    text: "Les fichiers restent sur l'appareil. Le site fonctionne hors ligne une fois chargé et s'installe comme une application."
---

Les fichiers sont lus et écrits avec **Mediabunny**, le décodage et l'encodage passent par **WebCodecs**, accéléré par le matériel, et l'aperçu par **WebGL2**. Les traitements des GIF, des images, de l'audio et des sous-titres sont des modules Rust compilés en WebAssembly. Ni FFmpeg ni serveur : l'application est un site statique.

## Formats

| Type        | Ouverture                                            |
| ----------- | ---------------------------------------------------- |
| Vidéo       | MP4, M4V, MKV, WebM, MOV, ProRes                     |
| Image       | JPEG, PNG, WebP, AVIF, JPEG XL, HEIC, BMP, TIFF, ICO |
| GIF         | GIF, APNG, WebP animé                                |
| Audio       | MP3, WAV, FLAC, Ogg, Opus, M4A, AAC, MKA             |
| Sous-titres | SRT, VTT, ASS, SSA, SUP                              |

AVI, FLV, WMV, MPEG et OGV ne sont pas pris en charge : ni Mediabunny ni WebCodecs ne savent les lire.
