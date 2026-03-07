import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { TokensManifest } from '../generator/extract-tokens.js';
import type { ComponentsManifest } from '../generator/extract-components.js';
import type { ExampleEntry } from '../generator/extract-examples.js';
import type { PatternsManifest } from '../generator/extract-patterns.js';
import type { VersionManifest } from '../generator/extract-version.js';
import type { ResourcesManifest } from '../generator/extract-resources.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function resolveManifestDir(customPath?: string): string {
  if (customPath) return customPath;

  const localDev = resolve(__dirname, '../../generated');
  if (existsSync(localDev)) return localDev;

  const installed = resolve(__dirname, '../generated');
  if (existsSync(installed)) return installed;

  throw new Error(
    `Manifest directory not found. Run "npm run generate" first, or pass --manifest-path.`
  );
}

let tokensCache: TokensManifest | null = null;
let componentsCache: ComponentsManifest | null = null;
let examplesCache: ExampleEntry[] | null = null;
let patternsCache: PatternsManifest | null = null;
let versionCache: VersionManifest | null = null;
let resourcesCache: ResourcesManifest | null = null;
let loadedDir: string | null = null;

export function loadManifest(customPath?: string): void {
  const dir = resolveManifestDir(customPath);
  if (loadedDir === dir) return;
  loadedDir = dir;

  tokensCache = JSON.parse(readFileSync(resolve(dir, 'tokens.json'), 'utf-8'));
  componentsCache = JSON.parse(readFileSync(resolve(dir, 'components.json'), 'utf-8'));
  patternsCache = JSON.parse(readFileSync(resolve(dir, 'patterns.json'), 'utf-8'));
  versionCache = JSON.parse(readFileSync(resolve(dir, 'version.json'), 'utf-8'));

  const resourcesPath = resolve(dir, 'resources.json');
  resourcesCache = existsSync(resourcesPath)
    ? JSON.parse(readFileSync(resourcesPath, 'utf-8'))
    : { cssVariables: '', conventions: '', exports: '', types: '' };

  const examplesPath = resolve(dir, 'examples.jsonl');
  const examplesRaw = readFileSync(examplesPath, 'utf-8').trim();
  examplesCache = examplesRaw
    ? examplesRaw.split('\n').map((line) => JSON.parse(line))
    : [];
}

export function getTokens(): TokensManifest {
  if (!tokensCache) throw new Error('Manifest not loaded');
  return tokensCache;
}

export function getComponents(): ComponentsManifest {
  if (!componentsCache) throw new Error('Manifest not loaded');
  return componentsCache;
}

export function getExamples(): ExampleEntry[] {
  if (!examplesCache) throw new Error('Manifest not loaded');
  return examplesCache;
}

export function getPatterns(): PatternsManifest {
  if (!patternsCache) throw new Error('Manifest not loaded');
  return patternsCache;
}

export function getVersion(): VersionManifest {
  if (!versionCache) throw new Error('Manifest not loaded');
  return versionCache;
}

export function getResources(): ResourcesManifest {
  if (!resourcesCache) throw new Error('Manifest not loaded');
  return resourcesCache;
}
