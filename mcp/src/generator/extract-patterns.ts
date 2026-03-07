import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface PatternEntry {
  name: string;
  category: string;
  title: string;
  code: string;
  components: string[];
  sandboxUrl?: string;
}

export interface PatternsManifest {
  version: string;
  patterns: PatternEntry[];
}

function extractComponentReferences(code: string): string[] {
  const refs = new Set<string>();
  const tagRe = /<([A-Z]\w+)/g;
  let match: RegExpExecArray | null;
  while ((match = tagRe.exec(code)) !== null) {
    refs.add(match[1]);
  }
  return Array.from(refs);
}

function processPatternFile(filePath: string, category: string): PatternEntry | null {
  const source = readFileSync(filePath, 'utf-8');

  const titleMatch = source.match(/title\s*:\s*['"]([^'"]+)['"]/);
  const title = titleMatch?.[1] || '';

  const sandboxMatch = source.match(/sandboxTitle\s*:\s*['"]([^'"]+)['"]/);
  const sandboxUrl = sandboxMatch
    ? `https://codesandbox.io/s/${sandboxMatch[1]}`
    : undefined;

  const customCodeMatch = source.match(/customCode\s*(?:=|:)\s*`([\s\S]*?)`/);
  const code = customCodeMatch?.[1]?.trim() || '';

  if (!title && !code) return null;

  const name = title
    .split('/')
    .pop()
    ?.trim() || '';

  const components = extractComponentReferences(code);

  return {
    name,
    category,
    title,
    code,
    components,
    sandboxUrl,
  };
}

export function extractPatterns(version: string): PatternsManifest {
  const patternsDir = resolve(ROOT, 'core/components/patterns');
  const patterns: PatternEntry[] = [];

  if (!existsSync(patternsDir)) {
    return { version, patterns };
  }

  for (const subdir of readdirSync(patternsDir)) {
    const subdirPath = join(patternsDir, subdir);
    if (!statSync(subdirPath).isDirectory()) continue;

    for (const file of readdirSync(subdirPath)) {
      if (!file.match(/\.story\.(tsx?|jsx?)$/)) continue;
      const filePath = join(subdirPath, file);
      try {
        const pattern = processPatternFile(filePath, subdir);
        if (pattern) patterns.push(pattern);
      } catch {
        // skip malformed files
      }
    }
  }

  return { version, patterns };
}
