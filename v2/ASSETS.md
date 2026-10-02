# Assets checklist

Every photo, icon and logo on the page is a labeled placeholder until the real file exists.
**To swap one in, drop a file with the exact name below into the folder shown, then rebuild** (`npm run build`, or just save while `npm run dev` is running).
No code changes are needed: at build time each slot checks whether its file exists and renders it instead of the placeholder.

- **Logo and icons:** any of `.svg`, `.png` or `.webp` works. Icons can be any single color; CSS recolors them to brand green.
- **Photos:** use the base name shown; `.jpg`, `.png` or `.webp` all work (opaque PNG photos are converted to JPEG in the build). Any size or ratio works: they are cropped to the ratio shown below, and `npm run build` shrinks the copies in `dist/` automatically (`integrations/optimize-public-images.mjs`). Your originals in `/public` are never modified.

Decorative graphics (arcs, dot grid, green glow, the hero ring with arrows) are inline SVG/CSS, so they are not listed here.

## Status (updated 2026-09-25)

Received: logo, favicons, `og-image.jpg`, `hero-port.jpg`, `about-document.png`, `historia-colon1.jpg`, and all nine icons.
Received: the six team photos (`images/team/*.png`).
Still missing: nothing required. Optional: `logo-white` and an SVG version of the logo.

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

Square (1:1), head and shoulders, cropped from the top. 800 × 800 ideal; the received files are 480–720 px, which is enough for the ~370 px display size.

| File | Person |
|---|---|
| `team/Mirtha_Barreto.png` ✅ | Mirtha Barreto (CEO · Fundadora) |
| `team/Victor_Diez_Perez.png` ✅ | Lic. Víctor Diez Pérez (CFO) |
| `team/Renato_Barreto.png` ✅ | Ing. Renato Barreto (Comercio exterior) |
| `team/Carlos_Troxler.png` ✅ | Carlos Troxler (Comercio exterior) |
| `team/David_Ozuna.png` ✅ | David Ozuna (Comercio exterior · Maquila) |
| `team/Rocio_Rodriguez.png` ✅ | Lic. Rocío Rodríguez (Recursos humanos) |

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

## v2 additions — `public/images/`

| File | Size | Section | Status |
|---|---|---|---|
| `hero-wide.jpg` (+ `-1600`, `-960`) | 2560 × 1706 (3:2) | Hero, full width | ✅ from the original aerial photo. The three sizes are pre-made so phones load a small file. |
| `hero.mp4` (+ optional `hero.webm`) | 1920 × 1080, 8–12 s loop, no audio | Hero, replaces the photo when present | Optional. Still photo shows for reduced-motion users. |
| `services/despacho.jpg` | 1200 × 800+ | Servicios | ✅ (from the previous version) |
| `services/asesoria.jpg` | 1200 × 800+ | Servicios | ✅ AI image: customs documents at a service counter (1600 × 1200), 2026-10-02 |
| `services/instituciones.jpg` | 1200 × 800+ | Servicios | ✅ aerial of Asunción's government office towers (1500 × 1000), 2026-10-02. Confirm the source/license if it isn't AI-generated. |
| `services/incentivos.jpg` | 1200 × 800+ | Servicios | ✅ (from the previous version) |
| `services/maquila.jpg` | 1600 × 1100 ideal | Servicios | ✅ new AI image (1536 × 1024), 2026-10-02 |
| `band-port.jpg` | 2400 × 1000 ideal | Photo band (Importación. Exportación. Maquila.) | ✅ new AI image, sunset port (1916 × 821), 2026-10-02 |
| `mvv-bg.jpg` | 2400 × 1400 ideal | Behind Misión/Visión (under a green overlay) | ✅ new AI image, office overlooking the port (2400 × 1350), 2026-10-02 |

The services panel crops to 5:6 on desktop and 3:2 on mobile, so keep the subject centered.
Service icons were removed from v2 (Servicios uses photos now). The logo is now drawn in code (`src/components/ui/LogoMark.astro`), so `logo.png` is no longer used on the page.
