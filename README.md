# xantoom.dev

Source of [xantoom.dev](https://xantoom.dev): guides, game settings, optimization and
explainers, plus the pages of my apps ([Vixely](https://github.com/Xantoom/Vixely),
[Vixion](https://github.com/Xantoom/Vixion), [Vixeeny](https://github.com/Xantoom/Vixeeny)).

In French, with an English translation.

- Static site built with [Astro](https://astro.build) and [Bun](https://bun.sh), hosted on Cloudflare.
- No cookies, no analytics, no third-party requests: fonts are self-hosted and YouTube
  videos only load after a click.
- Light, dark and system themes.

## Develop

```sh
bun install
bun run dev
```

Before pushing:

```sh
bun run verify
```

How the project is organized, how to write an article and the rules to follow are in
[AGENTS.md](AGENTS.md).

## Deploy

Pushing to `main` deploys: GitHub Actions runs the format check, lint, type check and
build, and only if all of them pass, deploys that exact build to Cloudflare Workers
(static assets, see `wrangler.jsonc`). Pull requests run the same checks without deploying.

The deploy job needs a `CLOUDFLARE_API_TOKEN` repository secret (Cloudflare token
template "Edit Cloudflare Workers").

## License

- Code: [MIT](LICENSE).
- Articles and texts: [CC BY 4.0](LICENSE-CONTENT.md).
- Logos and project names are not covered by either license.
