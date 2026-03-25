#!/usr/bin/env node
/**
 * Creates a .mcpb bundle (zip archive) for single-click installation in Claude.
 *
 * Output structure inside the zip:
 *   ├── manifest.json
 *   ├── server/bundle.mjs   ← esbuild ESM bundle (all npm deps inlined)
 *   └── generated/          ← static data manifests (tokens, components, etc.)
 *
 * Prerequisites: run `npm run generate` first to create the generated/ directory.
 */

import { build } from 'esbuild';
import {
  existsSync,
  mkdirSync,
  copyFileSync,
  readdirSync,
  statSync,
  rmSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const staging = resolve(root, '.mcpb-staging');
const { version, name } = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf-8'));
const outFile = resolve(root, `${name.replace(/^@[^/]+\//, '')}-${version}.mcpb`);

// --- Prereq check -----------------------------------------------------------

const generatedDir = resolve(root, 'generated');
if (!existsSync(generatedDir)) {
  console.error('Error: generated/ directory not found.\nRun `npm run generate` first.');
  process.exit(1);
}

// --- Clean staging ----------------------------------------------------------

if (existsSync(staging)) rmSync(staging, { recursive: true });
mkdirSync(resolve(staging, 'server'), { recursive: true });

// --- 1. Bundle server -------------------------------------------------------

console.log('Bundling server...');
await build({
  entryPoints: [resolve(root, 'src/cli.ts')],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  outfile: resolve(staging, 'server/bundle.mjs'),
  external: ['fsevents'],
  logLevel: 'info',
});

// --- 2. Write manifest (version synced from package.json) -------------------

const manifest = JSON.parse(readFileSync(resolve(root, 'manifest.json'), 'utf-8'));
manifest.version = version;
writeFileSync(resolve(staging, 'manifest.json'), JSON.stringify(manifest, null, 2));

// --- 3. Copy generated/ data ------------------------------------------------

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = resolve(src, entry);
    const destPath = resolve(dest, entry);
    statSync(srcPath).isDirectory()
      ? copyDir(srcPath, destPath)
      : copyFileSync(srcPath, destPath);
  }
}

console.log('Copying generated manifests...');
copyDir(generatedDir, resolve(staging, 'generated'));

// --- 4. Zip -----------------------------------------------------------------

if (existsSync(outFile)) rmSync(outFile);
console.log('\nCreating .mcpb archive...');
execSync(`cd "${staging}" && zip -r "${outFile}" .`, { stdio: 'inherit' });

// --- 5. Cleanup -------------------------------------------------------------

rmSync(staging, { recursive: true });

const sizeMb = (statSync(outFile).size / 1024 / 1024).toFixed(1);
console.log(`\nBundle ready: ${outFile.replace(root + '/', '')} (${sizeMb} MB)`);
console.log('Open with Claude for macOS / Windows for one-click installation.');
