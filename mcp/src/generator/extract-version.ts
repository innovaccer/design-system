import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface VersionManifest {
  version: string;
  generatedAt: string;
}

export function extractVersion(): VersionManifest {
  const pkgJson = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf-8'));
  return {
    version: pkgJson.version,
    generatedAt: new Date().toISOString(),
  };
}
