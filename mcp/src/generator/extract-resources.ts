import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface ResourcesManifest {
  cssVariables: string;
  helperClasses: string;
  conventions: string;
  exports: string;
  types: string;
}

function safeRead(relativePath: string): string {
  const full = resolve(ROOT, relativePath);
  if (!existsSync(full)) return '';
  return readFileSync(full, 'utf-8');
}

function concatDir(relativePath: string): string {
  const dir = resolve(ROOT, relativePath);
  if (!existsSync(dir)) return '';
  return readdirSync(dir)
    .filter((f) => f.endsWith('.css'))
    .sort()
    .map((f) => `/* ${f} */\n${readFileSync(join(dir, f), 'utf-8').trim()}`)
    .join('\n\n');
}

export function extractResources(): ResourcesManifest {
  return {
    cssVariables: safeRead('css/src/variables/index.css'),
    helperClasses: concatDir('css/src/utils'),
    conventions: safeRead('AGENTS.md'),
    exports: safeRead('core/index.tsx'),
    types: safeRead('core/index.type.tsx'),
  };
}
