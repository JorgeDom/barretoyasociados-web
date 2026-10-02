# Barreto y Asociados — Business Information (for landing page)

> Sources: client presentation "Presentación Agencia Barreto .pdf" — text extraction **plus** screenshots of all 11 slides (used for visual identity, layout, imagery and to resolve text ambiguities).
> Copy below is in Spanish (the site's target language) as provided by the client, lightly cleaned of PDF spacing artifacts. Items marked **[CONFIRM]** must be verified with the client before publishing.
> **Official logo colors** were provided by the project owner (section 2.2) and take priority. Other colors marked "sampled" were read from the slide screenshots and are secondary approximations.

---

## 1. Project brief

- **Client:** Barreto T & Asociados S.A. — Agencia de Despachos Aduaneros (customs brokerage agency), Asunción, Paraguay.
- **Sector:** Foreign trade / customs: import, export, maquila and special regimes.
- **Goal:** Build a landing page (single page, Spanish) for the agency.
- **Domain (already owned by client):** `barretoyasociados.com.py` (registered at NIC.PY).
- **Suggested hosting:** Cloudflare (DNS) + Cloudflare Pages. Nameservers must be changed at NIC.PY (pending, handled separately).
- **Language of the site:** Spanish (es-PY). All copy below is Spanish.

## 2. Brand identity

### 2.1 Names and lockup

| Field | Value |
|---|---|
| Legal / trade name | **Barreto T y Asociados S.A.** (cover: "BARRETO T Y ASOCIADOS S.A."; history slide: "Agencia Barreto T & Asociados") |
| Descriptor / tagline | **Agencia de Despachos Aduaneros** |
| Service line | **IMPORTACIÓN \| EXPORTACIÓN \| MAQUILA** |
| Founder / face of the brand | **Mirtha Barreto** (her name is the large headline of the logo lockup on the cover) |
| URL shown on every slide | `WWW.BARRETOYASOCIADOS.COM.PY` |

**Logo lockup (cover slide), top to bottom:**

1. Symbol: a circular ring (thick dark-teal/black outer ring split into an upper and lower arc, with a green inner ring) crossed by **two bright-green arrows pointing right** — one entering from the left, one leaving to the right (= import / export flow).
2. "**MIRTHA BARRETO**" — large, bright green, uppercase, light/regular weight.
3. "**Agencia de Despachos Aduaneros**" — bold, dark green.
4. "IMPORTACIÓN | EXPORTACIÓN | MAQUILA" — bright green, uppercase, condensed light.
5. "BARRETO T Y ASOCIADOS S.A." — near-black, uppercase, condensed.

A compact version (small symbol + "AGENCIA DE / DESPACHOS ADUANEROS" in white italic uppercase) sits in a dark-green header tab in the top-right corner of every slide — reuse this as the site's navbar logo.

### 2.2 Color palette

**Official logo colors (provided by the project owner — use these as the brand core):**

| Role | Hex | Notes |
|---|---|---|
| Bright green (brand accent) | `#0DA94B` | Logo arrows / main brand green. Use for icons, highlights, large accents; on buttons pair it with `#1E1E1E` text (see contrast notes in section 14). |
| Dark green (brand primary) | `#185F35` | Logo dark green. Use for headers, footer, headings, card headers, primary buttons. |
| Near-black | `#1E1E1E` | Logo black. Use for body text, dark sections, pills. |

**Supporting neutrals (sampled from the deck — secondary):**

| Role | Hex | Where it appears |
|---|---|---|
| White | `#FFFFFF` | Page background |
| Light gray | `#DADADA` | Inactive service cards, borders |
| Mid gray | `#B4B4B4` | Client-card brackets, team name-tag tabs |
| Pure black | `#000000` | Pills (URL badge, contact bar), diagonal accent shapes (can be replaced by `#1E1E1E`) |

**Deck colors superseded by the official values above** (the deck's greens were slightly different; prefer the official ones): `#154A2A` (≈ `#185F35`), `#2E9337` / `#319C2E` (≈ `#0DA94B`), `#14743C`, `#1B601B`, `#0D2E1B`, `#051819` (≈ `#1E1E1E`). If a darker green is needed for text-on-tint or hover states, derive it from `#185F35` instead of adding new hues.

Body text on the Team and Contact slides is a dark navy/indigo in the deck. **[CONFIRM]** it is not an intentional brand color — recommend `#1E1E1E` for all body text.

Suggested CSS tokens:

```css
:root {
  --green-500: #0DA94B;   /* brand accent (logo bright green) */
  --green-800: #185F35;   /* brand primary (logo dark green) */
  --ink:       #1E1E1E;   /* logo black / body text */
  --gray-300:  #B4B4B4;
  --gray-100:  #DADADA;
  --white:     #FFFFFF;

  /* optional derived tints (generated from the official greens) */
  --green-50:  #E7F6EE;   /* light tint of --green-500 for section backgrounds */
  --green-900: #124a29;   /* darker hover/pressed state of --green-800 */
}
```

### 2.3 Typography (approximate — no font names in the PDF)

- Headings: heavy geometric sans, uppercase, tight (looks like Montserrat/Sora ExtraBold). Subtitles ("Que ofrecemos", "Misión & Visión", "Conoce al", "Algunos de nuestros") in a **light italic** version of the same family, bright green — used as a two-line title: italic green kicker + BOLD UPPERCASE dark-green word.
- Body: regular-weight geometric sans (Montserrat/Poppins-like), justified in the slides.
- Suggested web fonts (Google Fonts): **Montserrat** (headings 800 + italic 400/500, body 400/500). **[CONFIRM]** whether the client has an official font.

### 2.4 Graphic language of the deck (reuse for the site)

- Dark-green **angled/slanted header tab** top-right holding the compact logo.
- **Angled bands** (dark green + a bright-green wedge, plus black slivers) at the bottom/corners of each slide.
- **Dot-grid pattern** (small dark-green dots in an 8-column matrix) as decorative accent near titles.
- **Hexagon / parallelogram photo crops** (photos are masked in hexagons, slanted edges, or circle on the cover).
- **Black rounded "pill"** with white text + globe/cursor icon for the URL (natural CTA/link style); on the cover, a black pill contact bar with phone icon, pin icon and globe icon.
- Cards: dark-green tab with white bold title + bright-green check badge (Diferenciadores); diamond/rounded-square check icons (Servicios); gray bracket "[" frames (Clientes).
- Overall tone: corporate, trustworthy, logistics/trade imagery, lots of white space, green + black + gray.

### 2.5 Imagery used in the deck (inventory)

| Slide | Image | Suggested use on site |
|---|---|---|
| Cover | Circular photo: cargo plane over a container port with trucks and a yellow forklift at sunset; faint world-map/globe background | Hero |
| Quiénes somos | Blurred close-up of a fountain pen on a document (grayscale) | About section |
| Historia | **Black-and-white vintage photo of a tall multi-tower building with arched ground-floor storefront** (presumably the Colón 1 building where the agency started) | History section / timeline |
| Misión y visión | Hexagon photo: trucks + globe + stacks of coins | Mission/vision section |
| Valores | Aerial photo of a container port with cranes at sunset | Values section background |
| Qué nos diferencia | Cargo plane taking off over containers, trucks and forklift at sunset | Differentiators |
| Servicios | Plane landing + freight train + containers | Services |
| Equipo | Six professional headshots (white/light background), hexagonal crop | Team section |
| Contacto | Stacked shipping containers (orange/blue) with a plane, sunset sky | Contact section |

These look like stock photos except the history photo and the team headshots. **[CONFIRM]** licensing / ask the client for the original high-resolution files (screenshots are only a reference).

## 3. Contact information

- **Teléfono / WhatsApp:** 0981 221-206 (cover shows `(0981) 221-206`; contact slide shows `0981 221-206`) — international format for links: `+595 981 221206` **[CONFIRM it is WhatsApp-enabled]**
- **Correo:** mirtha@barretoyasociados.com.py
- **Web:** www.barretoyasociados.com.py
- **Ubicación / Dirección:** Benjamín Constant 962, Edif. Colón 1 – Asunción, Paraguay

On the contact slide the address, phone, email and web are set up as **hyperlinks** (underlined with a click icon): address → presumably Google Maps, phone → `tel:`, email → `mailto:`, web → site. Slide label order: Ubicación, Teléfono, Correo, Página Web.

## 4. Quiénes somos (About)

Section title: **QUIÉNES SOMOS** — subtitle "Como Agencia".

> Somos una agencia de despacho de aduanas con más de 40 años de experiencia, dedicada a brindar asesoría integral en operaciones de importación, exportación, maquila y regímenes especiales.
>
> Acompañamos a cada cliente con un servicio personalizado, eficiente y seguro, basado en el cumplimiento normativo y la responsabilidad profesional.

## 5. Historia y trayectoria

Section title: **HISTORIA & TRAYECTORIA**.

> La Agencia Barreto T & Asociados nació a inicios de la década de 1980 y se constituyó oficialmente el 18 de enero de 1983, cuando su fundadora, Mirtha Barreto, obtuvo la matrícula de Despachante de Aduanas.
>
> Sus primeros pasos se dieron con esfuerzo y dedicación, iniciando en un escritorio prestado y luego en una oficina alquilada en Colón 1, entrepiso Oficina 11.
>
> Desde su inicio, la agencia mantuvo un propósito firme: ofrecer atención personalizada a importadores y exportadores, acompañando cada operación y cuidando sus intereses.
>
> Con el paso del tiempo, su trayectoria se consolidó, construyendo relaciones de confianza basadas en seriedad, experiencia y compromiso, respaldadas hoy por 43 años de trayectoria en el comercio exterior.

**Key facts**
- Officially constituted: **18 January 1983** (founder obtained the *matrícula de Despachante de Aduanas*).
- Trajectory stated as **43 años** (consistent with 1983 → 2026). The About text says "más de 40 años".
- First office: a borrowed desk, then a rented office at Colón 1, entrepiso, Oficina 11 (the agency is still in the Edif. Colón 1 building).

## 6. Servicios

Section title: **SERVICIOS** — subtitle "Que ofrecemos".

Intro:

> A través de estos servicios, brindamos un acompañamiento integral en las operaciones de comercio exterior, asegurando el cumplimiento de la normativa vigente, la optimización de tiempos y costos, y una gestión eficiente orientada a proteger los intereses de nuestros clientes y facilitar el desarrollo de sus actividades.

The five services (in the slide they appear as four interlocking cards — the 2nd card holds two services):

1. **Despacho de aduanas (importación y exportación)** — bright-green card
2. **Asesoría en legislación y trámites aduaneros** — gray card (shared with #3)
3. **Gestión ante instituciones públicas (DINAVISA, INAN, SENACSA y CNIME)** — gray card (shared with #2)
4. **Consultoría en incentivos fiscales (Ley 60/90)** — deep-green card
5. **Procesos de maquila y regímenes especiales** — gray card

## 7. Misión y visión

Section title: **NUESTRA Misión & Visión**.

**Misión**

> Brindar productos y servicios de calidad, ofreciendo soluciones eficientes y personalizadas, basadas en la confianza, el compromiso y la excelencia, acompañando a nuestros clientes en el logro de sus objetivos mediante un trabajo profesional, transparente, orientado a resultados y enfocado en la mejora continua.

**Visión**

> Ser una empresa líder y referente consolidado en el sector, reconocida por la calidad de sus servicios, la atención personalizada y la confianza de sus clientes, manteniendo una organización moderna, capaz de adaptarse a los cambios del mercado y continuar creciendo de manera sólida y responsable, fortaleciendo permanentemente su reputación como un aliado confiable comprometido con la excelencia.

## 8. Valores

Section title: **VALORES**. Four statements, each in a dark-green slanted pill:

1. Actuamos con integridad, honestidad, ética y transparencia en todas nuestras operaciones.
2. Cumplimos con las normativas vigentes priorizando la responsabilidad profesional.
3. Construimos relaciones basadas en la confianza y el respeto.
4. Acompañamos cada gestión con compromiso, seriedad y claridad.

## 9. Qué nos diferencia (differentiators)

Section title: **Qué NOS DIFERENCIA**. Four cards, each with a green check badge:

| Título | Descripción |
|---|---|
| **Atención Personalizada** | Priorizamos al cliente con un trato cercano y soluciones adaptadas a cada operación. |
| **Rapidez y Eficiencia** | Respondemos con agilidad, resolviendo situaciones de forma inmediata y efectiva. |
| **Seguimiento Permanente** | Acompañamos cada gestión de manera constante, optimizando tiempos y costos. |
| **Ética y Transparencia** | Actuamos con justicia, sinceridad y transparencia en todas nuestras operaciones. |

(Resolved: the English phrase "Reliable & On-Time Delivery" that appeared in the extracted text is **not visible** on the slide — it is hidden template text. Do not use it.)

## 10. Equipo

Section title: **Conoce al EQUIPO**.

> Nuestro equipo está integrado por profesionales con experiencia en comercio exterior y gestión aduanera, comprometidos con brindar un servicio eficiente y personalizado, acompañando cada operación con cercanía y conocimiento técnico.

Layout in slide: 2 rows × 3 hexagon-cropped headshots, each with a dark-green name tag (name bold, role in italic) and a gray tab behind it.

| # | Nombre | Cargo / Área | Slide position |
|---|---|---|---|
| 1 | Mirtha Barreto | CEO – Fundadora | row 1, left |
| 2 | Lic. Víctor Diez Pérez | CFO – Financiero | row 1, center |
| 3 | Ing. Renato Barreto | COMEX | row 1, right |
| 4 | Carlos Troxler | COMEX | row 2, left |
| 5 | David Ozuna | COMEX MAQUILA | row 2, center |
| 6 | Lic. Rocio Rodríguez | R.R.H.H. (Recursos Humanos) | row 2, right |

Professional headshots exist for all six on a white/light background (crop from the original files, not from screenshots). **[CONFIRM]** the client agrees to publish photos and names.

## 11. Algunos de nuestros clientes

Section title: **Algunos de nuestros CLIENTES**. Two slides of 8 cards (2 rows × 4), 16 clients total. Each card: name (bold caps), **Rubro**, **Años de alianza** (years working together). No client logos in the deck — text only.

| Cliente | Rubro | Años de alianza |
|---|---|---|
| ENVACO S.A. | Importación y exportación de papel y cartón corrugado | 31 |
| Industrias Gráficas Nobel S.A. | Importación de productos para gráfica | 31 |
| La Iglesia de Jesucristo de los Santos de los Últimos Días (slide: "Stos. De los Últimos Días") | Importaciones por Ley 302/93 y exportaciones varias | 37 |
| Asociación de Mejoramiento Mutuo | Importación y exportaciones; maquila (prendas de vestir) | 30 |
| Preferida S.A.C.I. | Empresa maquiladora de prendas de vestir | 7 |
| Láminas Internacionales S.A. (slide: "Laminas") | Empresa maquiladora de madera multilaminada | 11 |
| Ferretería Industrial S.A.E. | Importadora de maquinarias agrícolas y productos de ferretería | 2 |
| Hornimac S.R.L. | Congeladoras, estanterías metálicas | 27 |
| Altona Woods | Exportador de madera | 2 |
| Centro Familiar de Adoración | Importación por Ley 302/93 (mercaderías varias) | 17 |
| Copipunto S.A. | Productos y equipos para imprenta | 14 |
| Casa Otto Import – Export S.R.L. | Empresa importadora de granos | 12 |
| Harz S.R.L. (slide: "S.RL.") | Empresa maquiladora de resinas PVC y estabilizantes | 2 |
| Salinas Textil | Empresa maquiladora de mantas y alfombras | 6 |
| Amambay Preformas S.A. | Empresa maquiladora de preformas de envases | 6 |
| Saron International S.A. (slide: "S.A") | Maquiladores de textil | 8 |

Resolved: "Timmerman Industries", which appeared in the extracted text, is **not visible** on any slide (hidden template text) — it is NOT a client. Exclude it.

**[CONFIRM]** written permission from the client to publish each client name (especially the two religious organizations). Spellings above were lightly corrected (accents, S.R.L., final dot); the slide typos are shown in parentheses.

## 12. Slide-to-section map (original deck order)

1. Portada (cover / logo lockup / contact bar)
2. Quiénes somos
3. Historia & trayectoria
4. Misión & visión
5. Valores
6. Qué nos diferencia
7. Servicios
8. Equipo
9. Clientes (1/2)
10. Clientes (2/2)
11. Contacto

## 13. Suggested landing page structure

Single page, Spanish, mobile-first. Follow the deck's flow but put services and differentiators earlier for conversion:

1. **Header / nav:** compact logo (symbol + "Agencia de Despachos Aduaneros") + anchors (Nosotros, Servicios, Diferenciales, Equipo, Clientes, Contacto) + primary CTA button (WhatsApp).
2. **Hero:** logo lockup or headline "Agencia de Despachos Aduaneros — Importación | Exportación | Maquila", subline "43 años acompañando el comercio exterior", CTAs "Solicitar asesoría" (WhatsApp) + "Ver servicios"; cover-style circular photo.
3. **Quiénes somos** (section 4) + stat strip: *Desde 1983 · 43 años de trayectoria · 16 clientes destacados · Alianzas de hasta 37 años*.
4. **Servicios** (section 6): 5 cards with check icons; mention DINAVISA / INAN / SENACSA / CNIME and Ley 60/90 as chips.
5. **Qué nos diferencia** (section 9): 4 cards.
6. **Historia** (section 5): timeline (1980s origin → 18 Jan 1983 founding → Colón 1 office → today) with the vintage B&W building photo.
7. **Misión / Visión / Valores** (sections 7–8).
8. **Equipo** (section 10): 6 hexagon headshots.
9. **Clientes** (section 11): cards with rubro + years of alliance (no logos available).
10. **Contacto** (section 3): form (name, company, email, phone, message) + phone/WhatsApp, email, address + Google Maps embed of Benjamín Constant 962, Edif. Colón 1, Asunción.
11. **Footer:** legal name, address, contact links, copyright.

## 14. Technical / SEO notes for Claude Code

- `lang="es"`, locale `es-PY`. All UI copy in Spanish.
- Suggested `<title>`: "Barreto y Asociados | Agencia de Despachos Aduaneros en Asunción, Paraguay".
- Suggested meta description: "Agencia de despachos aduaneros con más de 40 años de experiencia en importación, exportación y maquila. Asesoría integral en comercio exterior en Asunción."
- Suggested keywords: despachante de aduanas Paraguay, agencia de despachos aduaneros Asunción, importación, exportación, maquila, Ley 60/90, DINAVISA, SENACSA, INAN, CNIME.
- Add `LocalBusiness` JSON-LD (name, address, phone, email, url, foundingDate `1983-01-18`).
- Contact form needs a backend or service (Cloudflare Pages Functions, Formspree, or a `mailto:`/WhatsApp fallback) — destination `mirtha@barretoyasociados.com.py`.
- WhatsApp link pattern: `https://wa.me/595981221206?text=Hola,%20quisiera%20consultar%20sobre...`
- Logo: rebuild as SVG from the original file if available; otherwise vectorize the symbol (ring + two arrows) — do not use a screenshot crop in production.
- Deployment target: Cloudflare Pages on `barretoyasociados.com.py` (+ `www` redirect, HTTPS enforced).
- Accessibility (contrast computed with the official colors):
  - `#185F35` on white: 7.7:1 (AA/AAA) — safe for headings, links and small text. White text on `#185F35`: 7.7:1 — safe.
  - `#1E1E1E` on white: 16.7:1 — safe for all body text.
  - `#0DA94B` on white / white on `#0DA94B`: 3.1:1 — fails AA for normal text. Use it only for icons, large/bold text (≥ 24 px, or ≥ 19 px bold), borders and decorative accents. Do **not** put white body text on `#0DA94B` buttons; use `#1E1E1E` text on it (5.4:1) or make buttons `#185F35` with white text.
  - `#0DA94B` on `#185F35`: 2.5:1 — do not use for text on dark-green backgrounds; use white.

## 15. Claude Code prompt — landing page v2 (independent alternative)

See chat for the full ready-to-paste prompt used to brief Claude Code on
building `barretoyasociados-web-v2` from scratch (Astro, front-end-only
contact form, scroll animations, sparse decoration, asset placeholders).
Key decisions locked in: framework = Astro; contact form = front-end
only for now (no backend stub yet).

## 16. Open questions for the client

1. Original logo files (SVG/PNG/AI) and official font (brand colors are already provided: `#0DA94B`, `#185F35`, `#1E1E1E`).
2. Original high-resolution photos (team headshots, vintage building photo) and permission to publish names and photos. Are the stock-style photos licensed for web use?
3. Permission to display each client name (including the religious organizations).
4. Whether 0981 221-206 is on WhatsApp; is there an office landline? Business hours?
5. Do they use email on `@barretoyasociados.com.py`? (Preserve MX records when changing nameservers.)
6. Any certifications, licenses or affiliations (e.g., Dirección Nacional de Aduanas registration number, customs broker license number) to display?
7. Social media accounts (LinkedIn, Facebook, Instagram)?
8. Confirm the exact legal name: "Barreto T y Asociados S.A." (what "T" stands for, if anything).
