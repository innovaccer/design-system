import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface UsageEntry {
  component: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
}

export interface UsageManifest {
  version: string;
  entries: UsageEntry[];
}

function parseFrontmatter(source: string): { meta: Record<string, string>; body: string } {
  const fmMatch = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return { meta: {}, body: source };

  const meta: Record<string, string> = {};
  for (const line of fmMatch[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');
    meta[key] = value;
  }

  return { meta, body: fmMatch[2] };
}

function parseKeywords(raw: string): string[] {
  const match = raw.match(/\[([^\]]*)\]/);
  if (!match) return [];
  return match[1]
    .split(',')
    .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

function cleanMdx(body: string): string {
  return body
    .replace(/<Preview[^>]*\/>/g, '')
    .replace(/<Preview[^>]*>[\s\S]*?<\/Preview>/g, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
    .replace(/<br\s*\/?>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function extractUsage(version: string): UsageManifest {
  const docsDir = resolve(ROOT, 'docs/src/pages/components');
  const entries: UsageEntry[] = [];

  if (!existsSync(docsDir)) return { version, entries };

  for (const compDir of readdirSync(docsDir)) {
    const usagePath = join(docsDir, compDir, 'usage.mdx');
    if (!existsSync(usagePath)) continue;

    try {
      const source = readFileSync(usagePath, 'utf-8');
      const { meta, body } = parseFrontmatter(source);
      const content = cleanMdx(body);
      if (!content) continue;

      entries.push({
        component: compDir,
        title: meta.title || compDir,
        description: meta.description || '',
        keywords: meta.keywords ? parseKeywords(meta.keywords) : [],
        content,
      });
    } catch {
      // skip malformed files
    }
  }

  return { version, entries };
}
