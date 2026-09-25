// @ts-check
import { defineConfig } from 'astro/config';
import optimizePublicImages from './integrations/optimize-public-images.mjs';

// Static output — deploys as-is to Cloudflare Pages (build command: npm run build, output dir: dist).
export default defineConfig({
  site: 'https://barretoyasociados.com.py',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  integrations: [optimizePublicImages()],
});
