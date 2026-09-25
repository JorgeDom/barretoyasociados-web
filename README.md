# Barreto y Asociados: landing page

Single-page site for Barreto T y Asociados S.A., Agencia de Despachos Aduaneros (Asunción).
Built with Astro as static output, with no UI framework and no animation library.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22
- `public/_headers` sets cache and security headers.

## Structure

```
src/
  data/site.ts              all copy and business data (edit text here)
  pages/index.astro         section order
  layouts/Base.astro        <head>, SEO, JSON-LD, fonts
  components/sections/      one file per section
  components/ui/            Media / Icon / Logo slots (see ASSETS.md)
  components/decor/         the three decorative motifs: Arcs, DotGrid, Glow
  scripts/motion.ts         scroll reveals, nav state, timeline progress, parallax, count-up
  scripts/contact-form.ts   form validation + UI states
  lib/contact-submit.ts     ← the ONLY file to change to wire the form to a backend
  styles/global.css         tokens, base, buttons, placeholders, reveal
```

## Contact form

The UI and validation are complete. `submitContact()` in `src/lib/contact-submit.ts` currently returns
`not-configured`, so the form offers to send the message by WhatsApp or e-mail with the text already filled in.
To go live, replace that function's body with a `fetch` to a Pages Function or form service.
The file's header comment has an example. The honeypot field `sitio_web` should be rejected server-side.

## Motion and accessibility

- All motion is disabled under `prefers-reduced-motion`. Without JS, all content is visible.
- The small-text color rules follow the brand notes: `#0DA94B` is used only for decoration, icons and bars, never for text.
