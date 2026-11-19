---
name: Vixely
tagline: Édite vidéos, images et GIF dans ton navigateur.
description: Un éditeur de vidéos, d'images et de GIF qui tourne entièrement dans ton navigateur. Tes fichiers ne sont envoyés nulle part, et il n'y a pas de compte à créer.
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
  - "<strong>Vidéo</strong> : couper, recadrer, redimensionner, corriger les couleurs, changer de piste audio ou de sous-titres."
  - "<strong>Image</strong> : recadrage, filtres, luminosité, contraste, saturation et conversion de format."
  - "<strong>GIF</strong> : couper, éditer image par image, optimiser le poids, exporter en APNG ou WebP animé."
  - "<strong>Aperçu en temps réel</strong> : chaque réglage est rendu instantanément en WebGL2."
  - "<strong>Préréglages</strong> d'export pour Discord, TikTok, Twitter, YouTube et Twitch."
  - "<strong>Local</strong> : tes fichiers ne quittent jamais ton appareil, et l'app marche hors ligne après le premier chargement."
---

Pour couper une vidéo ou alléger un GIF, la plupart des outils en ligne demandent d'envoyer tes fichiers sur un serveur, de créer un compte ou de payer pour retirer un filigrane.

Vixely fait tout dans ton navigateur, avec les API **WebCodecs** (décodage et encodage matériels) et **WebGL2** (aperçu en temps réel). Pas de FFmpeg, pas de backend : l'app est un site statique.

## Formats pris en charge

| Type  | Import et export                                  |
| ----- | ------------------------------------------------- |
| Vidéo | MP4, WebM, MKV, AVI, MOV, FLV, WMV, OGV, M4V, MTS |
| Image | PNG, JPG, WebP, AVIF, BMP, TIFF, ICO              |
| GIF   | GIF, APNG, WebP animé                             |
