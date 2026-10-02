# Barreto y Asociados — landing page

Two versions of the site live side by side, each a self-contained Astro project:

| Folder | What it is |
|---|---|
| `v1/` | The version live at barretoyasociados-web.pages.dev (as of 2026-09-29). |
| `v2/` | Client feedback round: full-bleed photo hero with animated logo, services with photos, photo band, image behind Misión/Visión. |

Run either one:

```
cd v1   # or v2
npm install
npm run dev
```

**Cloudflare Pages:** set *Settings → Builds → Root directory* to the folder that should be live (`v1` or `v2`). Build command `npm run build`, output `dist`.
