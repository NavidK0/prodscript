# ProdScript

> The best way to build.

ProdScript connects your language model directly to your production server over
SFTP and writes HTML, CSS, and JavaScript straight to prod. No build step. No
type checking. No staging. Instant results.

See [`LICENSE`](./LICENSE) for the legally binding version of that
sentence.

## Stack

- **Vite** + **React 19** + **TypeScript** (strict, `verbatimModuleSyntax`)
- **SCSS** (Dart Sass) — design tokens + nested partials in `src/styles/`
- No runtime UI libraries — components, hooks, and icons are hand-rolled
- Deploys to **Cloudflare** (Workers static assets)

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # tsc -b && vite build  →  dist/
pnpm preview    # serve the production build locally
pnpm lint       # oxlint
```

## Project layout

```
index.html              # head: meta, OpenGraph, fonts
src/
  main.tsx              # entry
  App.tsx               # composes every section + the deploy overlay
  content.ts           # all copy, as typed data
  hooks.ts             # useInView, useScrolled, useCountUp, useLockBody
  components/          # Nav, Hero, Terminal, Features, Pricing, WhiteGlove, …
  styles/
    main.scss          # @use tokens → base → sections
    _tokens.scss       # CSS custom props + bp() mixin
    _base.scss         # reset, atmosphere, typography, buttons
    _sections.scss     # every section, nested
public/
  favicon.svg  og.svg  og.png  404.html  robots.txt  _headers
scripts/make-og.mjs    # regenerates og.png from og.svg
```

## Social image

```bash
pnpm og   # rasterizes public/og.svg → public/og.png (1200×630, needs sharp)
```

## Deploy to Cloudflare

Shipped as a Worker with [static assets](https://developers.cloudflare.com/workers/static-assets/)
serving `dist/` — see [`wrangler.toml`](./wrangler.toml).

### Git integration (recommended)

1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository**, pick the repo.
2. **Build command:** `pnpm build` · **Deploy command:** `npx wrangler deploy`
   (Node is pinned to 22 via [`.nvmrc`](./.nvmrc)).
3. Every push to `main` then builds and deploys automatically.

### Wrangler (local)

```bash
pnpm dlx wrangler login
pnpm deploy   # = pnpm build && wrangler deploy
```

## Custom domain (Cloudflare DNS)

1. Workers & Pages → **prodscript → Settings → Domains & Routes → Add → Custom domain**.
2. Add `prodscript.com` (and `www`). Because the zone is already in your Cloudflare
   account, the DNS records and SSL are provisioned for you.

## License

See [`LICENSE`](./LICENSE). By reading this far, you have already accepted it.
