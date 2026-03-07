import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { extractTokens } from './extract-tokens.js';
import { extractComponents } from './extract-components.js';
import { extractExamples } from './extract-examples.js';
import { extractPatterns } from './extract-patterns.js';
import { extractVersion } from './extract-version.js';
import { extractResources } from './extract-resources.js';

const MCP_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../mcp');
const OUT_DIR = resolve(MCP_ROOT, 'generated');

function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const versionInfo = extractVersion();
  const version = versionInfo.version;

  console.log(`Generating manifest for v${version}...`);

  console.log('  Extracting tokens...');
  const tokens = extractTokens(version);
  writeFileSync(resolve(OUT_DIR, 'tokens.json'), JSON.stringify(tokens, null, 2));
  console.log(`    ${Object.keys(tokens.namespaces).length} namespaces`);

  console.log('  Extracting components...');
  const components = extractComponents(version);
  writeFileSync(resolve(OUT_DIR, 'components.json'), JSON.stringify(components, null, 2));
  console.log(`    ${components.components.length} components`);

  console.log('  Extracting examples...');
  const examples = extractExamples(version);
  const examplesJsonl = examples.map((e) => JSON.stringify(e)).join('\n');
  writeFileSync(resolve(OUT_DIR, 'examples.jsonl'), examplesJsonl);
  console.log(`    ${examples.length} examples`);

  console.log('  Extracting patterns...');
  const patterns = extractPatterns(version);
  writeFileSync(resolve(OUT_DIR, 'patterns.json'), JSON.stringify(patterns, null, 2));
  console.log(`    ${patterns.patterns.length} patterns`);

  console.log('  Extracting resources...');
  const resources = extractResources();
  writeFileSync(resolve(OUT_DIR, 'resources.json'), JSON.stringify(resources, null, 2));
  console.log(`    ${Object.keys(resources).filter((k) => resources[k as keyof typeof resources]).length} resources`);

  console.log('  Writing version...');
  writeFileSync(resolve(OUT_DIR, 'version.json'), JSON.stringify(versionInfo, null, 2));

  console.log(`Manifest generation complete. Output: ${OUT_DIR}`);
}

main();
