// @ts-check
import { defineConfig } from 'astro/config';
import optimizePublicImages from './integrations/optimize-public-images.mjs';

// Static output — deploys as-is to Cloudflare Pages (build command: npm run build, output dir: dist).
export default defineConfig({
  // Absolute URLs (canonical, og:image) are built from this. Override with the SITE_URL env var
  // (e.g. in Cloudflare Pages settings) while the site is served from *.pages.dev.
  site: process.env.SITE_URL || 'https://barretoyasociados.com.py',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  integrations: [optimizePublicImages()],
});
