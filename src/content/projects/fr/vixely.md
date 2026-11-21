---
name: Vixely
tagline: Éditeur de vidéos, d'images et de GIF qui fonctionne dans le navigateur.
description: Éditeur de vidéos, d'images et de GIF entièrement local, dans le navigateur. Aucun envoi de fichier, aucun compte, utilisable hors ligne.
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
  - title: "Vidéo"
    text: "Découpe, recadrage, redimensionnement, correction des couleurs, choix des pistes audio et sous-titres."
  - title: "Image"
    text: "Recadrage, filtres, luminosité, contraste, saturation, conversion de format."
  - title: "GIF"
    text: "Découpe, édition image par image, réduction du poids, export APNG ou WebP animé."
  - title: "Aperçu en temps réel"
    text: "Chaque réglage est rendu immédiatement en WebGL2."
  - title: "Préréglages d'export"
    text: "Discord, TikTok, X, YouTube et Twitch."
  - title: "Traitement local"
    text: "Les fichiers restent sur l'appareil. L'app fonctionne hors ligne après le premier chargement."
---

Les fichiers sont lus et écrits avec **Mediabunny**, le décodage et l'encodage passent par **WebCodecs**, accéléré par le matériel, et l'aperçu par **WebGL2**. L'encodage des GIF est un module Rust compilé en WebAssembly. Ni FFmpeg ni serveur : l'application est un site statique.

## Formats

| Type  | Import et export                                  |
| ----- | ------------------------------------------------- |
| Vidéo | MP4, WebM, MKV, AVI, MOV, FLV, WMV, OGV, M4V, MTS |
| Image | PNG, JPG, WebP, AVIF, BMP, TIFF, ICO              |
| GIF   | GIF, APNG, WebP animé                             |
