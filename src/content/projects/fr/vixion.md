---
name: Vixion
tagline: Enregistreur de lives Twitch auto-hébergé, chat compris.
description: Application auto-hébergée qui enregistre chaque live des chaînes Twitch choisies, avec le chat, et les rejoue dans le navigateur.
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
  - title: "Enregistrement automatique"
    text: "Chaque live des chaînes suivies, en qualité source. Les flux HEVC et AV1 sont conservés tels quels, ou seul le H.264 est gardé."
  - title: "Chat"
    text: "Enregistré et rejoué en synchronisation, avec les badges et emotes Twitch, 7TV, BetterTTV et FrankerFaceZ. Un horodatage ramène la vidéo au message."
  - title: "Publicités"
    text: "Aucune avec un jeton Turbo ou d'abonné. Sans jeton, le lecteur Twitch est changé au début d'une pub : de courts trous remplacent les publicités."
  - title: "Lecteur"
    text: "Vidéo et chat côte à côte, reprise de lecture, compresseur audio, capture de l'image affichée en PNG."
  - title: "Téléchargements"
    text: "La vidéo, le chat en JSON, ou le chat en sous-titres ASS."
  - title: "Espace disque"
    text: "Les enregistrements expirent après 14 jours sauf s'ils sont conservés. Les plus anciens partent en premier. Les statistiques montrent la place prise par chaque streamer."
  - title: "Multi-utilisateur"
    text: "Administrateurs, utilisateurs et rôles personnalisés, avec des permissions par rôle et par personne."
  - title: "Léger"
    text: "Un binaire statique de quelques Mo, quelques Mo de mémoire au repos. Journaux, alertes et webhooks (Discord, ntfy ou JSON) en cas de problème."
---

Vixion tourne dans un conteneur Docker unique, sur un PC Linux, un NAS ou un serveur. Une chaîne ajoutée depuis la recherche est enregistrée à chacun de ses lives.

Le serveur est écrit en Rust. Le lecteur lit les enregistrements avec **Mediabunny** : la vidéo est décodée par **WebCodecs** et l'image dessinée dans un canvas, avec la balise `<video>` du navigateur en secours quand WebCodecs n'est pas disponible.

L'interface est disponible en français et en anglais, sur téléphone, tablette, ordinateur et TV.

Vixion n'est pas affilié à Twitch.
