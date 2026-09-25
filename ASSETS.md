# Assets checklist

Every photo, icon and logo on the page is a labeled placeholder until the real file exists.
**To swap one in, drop a file with the exact name below into the folder shown, then rebuild** (`npm run build`, or just save while `npm run dev` is running).
No code changes are needed: at build time each slot checks whether its file exists and renders it instead of the placeholder.

- **Logo and icons:** any of `.svg`, `.png` or `.webp` works. Icons can be any single color; CSS recolors them to brand green.
- **Photos:** use the base name shown; `.jpg`, `.png` or `.webp` all work (opaque PNG photos are converted to JPEG in the build). Any size or ratio works: they are cropped to the ratio shown below, and `npm run build` shrinks the copies in `dist/` automatically (`integrations/optimize-public-images.mjs`). Your originals in `/public` are never modified.

Decorative graphics (arcs, dot grid, green glow, the hero ring with arrows) are inline SVG/CSS, so they are not listed here.

## Status (updated 2026-09-25)

Received: logo, favicons, `og-image.jpg`, `hero-port.jpg`, `about-document.png`, `historia-colon1.jpg`, and all nine icons.
Still missing: **the six team photos**. Optional: `logo-white` and an SVG version of the logo.

## Logo — `public/images/`

| File | Size | Used in | Notes |
|---|---|---|---|
| `logo.svg` / `.png` | symbol only, transparent background | Navbar + footer | ✅ received (`logo.png`). The company name next to it is live text. Transparent padding is trimmed at build. An SVG would be sharper. |
| `logo-white.svg` / `.png` | same | Footer (dark background) | Optional. Without it, the footer shows the color symbol on a white pill. |
| `og-image.jpg` ✅ | 1200 × 630 | Social share preview (WhatsApp, Facebook, LinkedIn) | Logo on brand green or over the hero photo. |
| `/public/favicon.png` | 256 × 256 | Browser tab | ✅ received |
| `/public/apple-touch-icon.png` | 180 × 180 | iPhone home screen | ✅ received |

## Photos — `public/images/`

Export as **JPG (quality ~80) or WebP**, sRGB, at the size listed. That is already 2× for sharp screens, so don't go larger.

| File | Size (ratio) | Section | Content |
|---|---|---|---|
| `hero-port.jpg` ✅ | 1200 × 1200 (1:1) | Hero | Shown as a circle. Port/containers/cargo plane. Keep the subject centered: edges are cropped by the circle. |
| `about-document` ✅ | 1200 × 900 (4:3) | Quiénes somos | Team working at a desk (received as PNG). Shown in color. |
| `historia-colon1.jpg` ✅ | 960 × 1200 (4:5) | Historia | Vintage B&W photo of the Edificio Colón 1. Shown in grayscale. |

## Team photos — `public/images/team/`

800 × 1000 (4:5), head and shoulders, same background and framing for all six.

| File | Person |
|---|---|
| `team/mirtha-barreto.jpg` | Mirtha Barreto (CEO · Fundadora) |
| `team/victor-diez-perez.jpg` | Lic. Víctor Diez Pérez (CFO) |
| `team/renato-barreto.jpg` | Ing. Renato Barreto (Comercio exterior) |
| `team/carlos-troxler.jpg` | Carlos Troxler (Comercio exterior) |
| `team/david-ozuna.jpg` | David Ozuna (Comercio exterior · Maquila) |
| `team/rocio-rodriguez.jpg` | Lic. Rocío Rodríguez (Recursos humanos) |

## Icons — `public/icons/`

**SVG or PNG**, square, single color (any color: it's recolored), transparent background. They are decorative: the heading beside each one carries the meaning.

| File | Size | Section | Meaning |
|---|---|---|---|
| `icon-despacho` ✅ | 52 × 52 | Servicios | Despacho de aduanas (import/export) |
| `icon-asesoria` ✅ | 52 × 52 | Servicios | Asesoría en legislación y trámites |
| `icon-instituciones` ✅ | 52 × 52 | Servicios | Gestión ante instituciones públicas |
| `icon-incentivos` ✅ | 52 × 52 | Servicios | Incentivos fiscales (Ley 60/90) |
| `icon-maquila` ✅ | 52 × 52 | Servicios | Maquila y regímenes especiales |
| `icon-atencion` ✅ | 44 × 44 | Qué nos diferencia | Atención personalizada |
| `icon-rapidez` ✅ | 44 × 44 | Qué nos diferencia | Rapidez y eficiencia |
| `icon-seguimiento` ✅ | 44 × 44 | Qué nos diferencia | Seguimiento permanente |
| `icon-etica` ✅ | 44 × 44 | Qué nos diferencia | Ética y transparencia |

## Where the slots live in code

- `src/components/ui/Media.astro`: photos
- `src/components/ui/Icon.astro`: icons
- `src/components/ui/Logo.astro`: logo
- Filenames are set in `src/data/site.ts` (icons, team) and in the section components (hero, about, history).
