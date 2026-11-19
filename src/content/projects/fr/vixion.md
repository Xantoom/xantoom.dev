---
name: Vixion
tagline: Enregistre les chaînes Twitch que tu suis, chat compris.
description: Une app auto-hébergée qui enregistre chaque live des chaînes choisies, avec le chat, et les rejoue dans ton navigateur.
status: stable
order: 2
logo: vixion
colors: ["#e5322d", "#ff7a59"]
repo: https://github.com/Xantoom/Vixion
license: AGPL-3.0
platforms: [Docker (Linux, NAS, serveur)]
stack: [Rust, binaire statique, Docker]
features:
  - "<strong>Enregistre chaque live</strong> des chaînes ajoutées, en qualité source, dès qu'elles passent en direct. HEVC et AV1 sont gardés tels quels."
  - "<strong>Enregistre le chat</strong> et le rejoue synchronisé avec la vidéo : badges et emotes Twitch, 7TV, BetterTTV et FrankerFaceZ."
  - "<strong>Lecture en mode studio</strong> : vidéo et chat côte à côte, reprise là où tu t'étais arrêté, compresseur audio."
  - "<strong>Gère l'espace disque</strong> : les enregistrements expirent après 14 jours sauf si tu les gardes, les plus anciens partent en premier."
  - "<strong>Plusieurs utilisateurs</strong> avec des rôles et des permissions."
  - "<strong>Léger</strong> : un binaire statique de quelques Mo, quelques Mo de mémoire au repos."
---

Vixion tourne dans un seul conteneur Docker. Tu ajoutes une chaîne depuis la barre de recherche, et elle est enregistrée à chaque fois qu'elle passe en live.

Interface en français et en anglais, sur téléphone, tablette, ordinateur et TV.

Vixion n'est pas affilié à Twitch. N'enregistre que ce que tu as le droit de conserver.
