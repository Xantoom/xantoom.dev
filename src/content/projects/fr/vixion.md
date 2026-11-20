---
name: Vixion
tagline: Enregistreur de lives Twitch auto-hébergé, chat compris.
description: Application auto-hébergée qui enregistre chaque live des chaînes Twitch choisies, avec le chat, et les rejoue dans le navigateur.
status: stable
order: 2
logo: vixion
colors: ["#e5322d", "#ff7a59"]
repo: https://github.com/Xantoom/Vixion
license: AGPL-3.0
platforms: [docker]
stack: [Rust, Docker]
features:
  - title: "Enregistrement automatique"
    text: "Chaque live des chaînes suivies, en qualité source. Les flux HEVC et AV1 sont conservés tels quels."
  - title: "Chat"
    text: "Enregistré et rejoué en synchronisation, avec les badges et emotes Twitch, 7TV, BetterTTV et FrankerFaceZ."
  - title: "Lecteur"
    text: "Vidéo et chat côte à côte, reprise de lecture, compresseur audio."
  - title: "Espace disque"
    text: "Les enregistrements expirent après 14 jours sauf s'ils sont conservés. Les plus anciens partent en premier."
  - title: "Multi-utilisateur"
    text: "Rôles et permissions par compte."
  - title: "Léger"
    text: "Un binaire statique de quelques Mo, quelques Mo de mémoire au repos."
---

Vixion tourne dans un conteneur Docker unique, sur un PC Linux, un NAS ou un serveur. Une chaîne ajoutée depuis la recherche est enregistrée à chacun de ses lives.

L'interface est disponible en français et en anglais, sur téléphone, tablette, ordinateur et TV.

Vixion n'est pas affilié à Twitch.
