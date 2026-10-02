import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Build-time check: a real file dropped into /public replaces its placeholder automatically.
export function publicFileExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
}

// Returns the public URL of `<dir>/<base>.<ext>` for the first extension that exists, else null.
export function findPublicFile(dir: string, base: string, exts = ['svg', 'png', 'webp', 'jpg']): string | null {
  for (const ext of exts) {
    const url = `/${dir}/${base}.${ext}`;
    if (publicFileExists(url)) return url;
  }
  return null;
}
