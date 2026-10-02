// Astro integration: after build, shrink the copies of /public images that land in dist/.
// Originals in /public are never touched, so you can keep dropping full-size files there.
import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { join, relative, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// First matching rule wins. Paths are relative to dist/, with forward slashes.
const RULES = [
  { test: /^images\/logo[^/]*\.png$/, trim: true, height: 160 },
  { test: /^images\/team\//, width: 800, height: 800, fit: 'cover', position: 'top', photo: true },
  { test: /^images\/hero-wide/, max: 2560 },
  { test: /^images\/(band-port|mvv-bg)\./, max: 2400 }, // full-bleed section backgrounds // full-bleed hero: pre-sized variants (960/1600/2560) in /public
  { test: /^images\/og-image\./, width: 1200, height: 630, fit: 'cover' },
  { test: /^images\//, max: 1200, photo: true },
  { test: /^icons\//, max: 128 },
  { test: /^(favicon|apple-touch-icon)\.png$/, max: 180 },
];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function optimize(file, rule) {
  const input = await readFile(file);
  let img = sharp(input, { failOn: 'none' }).rotate();
  if (rule.trim) img = img.trim();
  if (rule.max) img = img.resize({ width: rule.max, height: rule.max, fit: 'inside', withoutEnlargement: true });
  else img = img.resize({ width: rule.width, height: rule.height, fit: rule.fit ?? 'inside', position: rule.position ?? 'centre', withoutEnlargement: true });

  const ext = extname(file).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') img = img.jpeg({ quality: 78, mozjpeg: true });
  else if (ext === '.png') img = img.png({ compressionLevel: 9, palette: true, quality: 90 });
  else if (ext === '.webp') img = img.webp({ quality: 78 });
  else return null;

  // Opaque PNG photos → JPEG (same base name); the caller rewrites references in the HTML.
  if (ext === '.png' && rule.photo) {
    const meta = await sharp(input).metadata();
    if (!meta.hasAlpha) {
      const jpg = await img.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
      const target = file.slice(0, -ext.length) + '.jpg';
      await writeFile(target, jpg);
      await unlink(file);
      return [input.length, jpg.length, target];
    }
  }

  const output = await img.toBuffer();
  if (output.length >= input.length && !rule.trim) return null;
  await writeFile(file, output);
  return [input.length, output.length];
}

export default function optimizePublicImages() {
  return {
    name: 'optimize-public-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let saved = 0;
        const renamed = []; // [oldUrl, newUrl]
        for await (const file of walk(root)) {
          if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
          const rel = relative(root, file).split(sep).join('/');
          const rule = RULES.find((r) => r.test.test(rel));
          if (!rule) continue;
          const result = await optimize(file, rule);
          if (!result) continue;
          saved += result[0] - result[1];
          const note = result[2] ? ` (as ${relative(root, result[2]).split(sep).join('/')})` : '';
          if (result[2]) renamed.push([`/${rel}`, `/${relative(root, result[2]).split(sep).join('/')}`]);
          logger.info(`${rel}: ${Math.round(result[0] / 1024)} KB → ${Math.round(result[1] / 1024)} KB${note}`);
        }
        if (renamed.length) {
          for await (const file of walk(root)) {
            if (!file.endsWith('.html')) continue;
            let html = await readFile(file, 'utf8');
            const before = html;
            for (const [from, to] of renamed) html = html.split(from).join(to);
            if (html !== before) await writeFile(file, html);
          }
        }
        logger.info(`Saved ${Math.round(saved / 1024)} KB`);
      },
    },
  };
}
