# Barreto y Asociados — Landing page

Landing page for Barreto T y Asociados S.A., Agencia de Despachos Aduaneros (Asunción, Paraguay).
Built with [Astro](https://astro.build) + Tailwind CSS v4, output is a fully static site.

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `http://localhost:4321`   |
| `npm run build`   | Build the static site to `dist/`        |
| `npm run preview` | Serve the built site locally            |

## Where things live

- `src/data/site.ts` — all copy: contact info, WhatsApp number, nav, team, clients, stats, timeline.
- `src/components/` — one component per page section.
- `src/assets/` — images processed by Astro (resized + converted to WebP at build time).
- `public/icons/` — service icons (used as CSS masks so they can be tinted).

## Pending content

- The six team members' photos currently show initials. Drop the real images into `src/assets/`
  and swap them in (`src/components/Team.astro`).
- The contact form opens WhatsApp with a pre-filled message (no backend).
