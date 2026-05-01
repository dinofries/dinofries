<p align="center">
  <img src="static/logo.png" alt="dinofries" width="400" />
</p>

# 🍟 dinofries

```
╔══════════════════════════════════════════╗
║   ~ * Welcome to Henesys, traveler! * ~  ║
╚══════════════════════════════════════════╝
```

This is the static site that hosts **[dinofries.com](https://dinofries.com)**.

> *"A wild repo appeared!"*

---

### 📜 Quest Info

- **Quest Type:** `Static Site`
- **Job:** `SvelteKit Beginner`
- **Region:** The Internet
- **Difficulty:** ★☆☆☆☆

### ⚔️ Skills

```sh
bun install   # gather your equipment
bun run dev   # enter the map
bun run build # forge the production build
```

---

```
        .--.
       /    \
      | o  o |    < press [NPC] to talk
       \  ──  /
        '--'
```

*Thanks for stopping by, adventurer!* 🦖🍟

---

## About

`dinofries` is the source for [dinofries.com](https://dinofries.com), a static site built with [SvelteKit](https://svelte.dev/docs/kit) using the [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static) adapter. The site is pre-rendered at build time and served as plain HTML/CSS/JS.

### Tech stack

- **Framework:** SvelteKit (Svelte 5, runes mode)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Tooling:** Vite, ESLint, Prettier
- **Package manager:** [Bun](https://bun.sh)

### Project structure

```
src/
  app.html          # HTML shell
  app.d.ts          # global type declarations
  lib/              # shared components and utilities
  routes/           # SvelteKit file-based routes
static/             # static assets served as-is (logo, robots.txt, etc.)
svelte.config.js    # SvelteKit + adapter-static config
vite.config.ts      # Vite config
```

## Running locally

Prerequisites: [Bun](https://bun.sh) installed.

```sh
bun install        # install dependencies
bun run dev        # start the dev server at http://localhost:5173
```

Other useful scripts:

```sh
bun run build      # produce a static build in ./build
bun run preview    # preview the production build locally
bun run check      # run svelte-check (type checking)
bun run lint       # run prettier + eslint
bun run format     # auto-format with prettier
```

## Deployment

The site is deployed to **GitHub Pages**. On every push to `main`, a GitHub Actions workflow:

1. Installs dependencies with `bun install`.
2. Runs `bun run build` to produce the static output.
3. Uploads the `build/` directory as a Pages artifact.
4. Deploys it to GitHub Pages, which serves it at the [dinofries.com](https://dinofries.com) custom domain.

The custom domain is configured via a `CNAME` file in `static/` and the DNS records pointing `dinofries.com` at GitHub Pages.
