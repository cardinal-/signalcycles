# Signal Cycles

A gallery site for Signal Cycles, the handmade bicycle company Matt Cardinal and Nate
Meschke ran in Portland, Oregon from 2007 to 2017. Built with [Astro](https://astro.build).

## Adding a bike

Each bike lives in its own folder under `src/content/bikes/<slug>/`:

```
src/content/bikes/my-bike-slug/
├── index.md       # name, year, type, materials, summary, photo list
├── cover.jpg       # shown on the home page and gallery grid
├── 01.jpg
├── 02.jpg
└── ...
```

Copy an existing bike folder (e.g. `src/content/bikes/signal-pulse/`) as a starting
point, drop in real photos, and edit `index.md`. Astro automatically resizes and
compresses every photo at build time — just use the original files straight out of
the camera or wherever they're stored.

`featured: true` in a bike's frontmatter puts it in the "Featured bikes" section on
the home page.

## Commands

Run from the project root:

| Command                | Action                                      |
| :---------------------- | :------------------------------------------- |
| `npm install`            | Install dependencies                        |
| `npx astro dev --background` | Start the local dev server in the background |
| `npx astro dev stop`     | Stop the background dev server               |
| `npx astro dev status`   | Check whether the dev server is running      |
| `npm run build`          | Build the production site to `./dist/`       |
| `npm run preview`        | Preview the production build locally         |

The dev server runs at `http://localhost:4321`.

## Deploying

Pushing to `main` on GitHub triggers an automatic deploy on Vercel.
