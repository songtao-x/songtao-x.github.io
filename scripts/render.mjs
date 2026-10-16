import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const html = read('scripts/layout.html')
  .replace('<!-- PROFILE -->', read('content/profile.md').trim())
  .replace('<!-- CONTENT -->', read('content/main.md').trim());
writeFileSync(new URL('index.html', root), html);
console.log(`Rendered ${fileURLToPath(new URL('index.html', root))}`);
