---
name: Vixeeny
tagline: Captures d'écran et enregistrement vidéo pour Windows.
description: Application native de capture d'écran et d'enregistrement vidéo pour Windows 10 et 11, écrite en Rust. En version candidate avant la 1.0.
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
    text: "Zone, fenêtre, écran, tous les écrans ou page entière avec défilement."
  - title: "Formats d'image"
    text: "PNG, JPEG, WebP, AVIF et JPEG XL, avec le HDR conservé ou converti en SDR."
  - title: "Éditeur"
    text: "Flèches, formes, texte, surligneur, étapes numérotées, flou et pixellisation."
  - title: "Reconnaissance de texte"
    text: "Le texte d'une zone est copié dans le presse-papiers, sans passer par l'éditeur."
  - title: "Vidéo"
    text: "H.264, HEVC ou AV1, encodés par NVIDIA NVENC, AMD AMF, Intel QuickSync ou le processeur."
  - title: "Audio"
    text: "Son du jeu, micro et programmes choisis sur des pistes séparées."
  - title: "Replay"
    text: "Les dernières minutes sont gardées en mémoire, enregistrées avec un raccourci et découpées avant l'enregistrement."
  - title: "Jeux"
    text: "Un dossier par jeu. Fonctionne aussi dans les jeux lancés en administrateur."
  - title: "Mises à jour"
    text: "En arrière-plan, signature vérifiée, retour à la version précédente si la nouvelle échoue."
---

Vixeeny reste dans la zone de notification et attend un raccourci : rien ne s'affiche à l'écran avant. Le programme résident est séparé du reste et n'utilise pas le processeur au repos ; l'application elle-même ne démarre que pour une action et se ferme ensuite.

L'interface est écrite avec **Slint**, la vidéo est encodée avec **FFmpeg** et la reconnaissance de texte utilise celle de Windows, sur l'ordinateur. La seule connexion réseau est la vérification des mises à jour sur GitHub.

L'installeur et le `.zip` portable sont sur la page des versions GitHub, pour Windows 10 et 11 en 64 bits. Ils ne sont pas signés avec un certificat payant : SmartScreen peut afficher un avertissement au premier lancement (« Informations complémentaires » puis « Exécuter quand même »). Les limites connues sont décrites dans le dépôt.

L'interface est disponible en français et en anglais.
