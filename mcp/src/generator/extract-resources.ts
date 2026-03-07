import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface ResourcesManifest {
  cssVariables: string;
  conventions: string;
  exports: string;
  types: string;
}

function safeRead(relativePath: string): string {
  const full = resolve(ROOT, relativePath);
  if (!existsSync(full)) return '';
  return readFileSync(full, 'utf-8');
}

export function extractResources(): ResourcesManifest {
  return {
    cssVariables: safeRead('css/src/variables/index.css'),
    conventions: safeRead('AGENTS.md'),
    exports: safeRead('core/index.tsx'),
    types: safeRead('core/index.type.tsx'),
  };
}
