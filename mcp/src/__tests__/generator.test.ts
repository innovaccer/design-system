import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { extractTokens } from '../generator/extract-tokens.js';
import { extractComponents } from '../generator/extract-components.js';
import { extractExamples } from '../generator/extract-examples.js';
import { extractPatterns } from '../generator/extract-patterns.js';
import { extractVersion } from '../generator/extract-version.js';

describe('Token Extractor', () => {
  const tokens = extractTokens('4.20.0');

  it('returns correct version', () => {
    assert.equal(tokens.version, '4.20.0');
  });

  it('creates multiple namespaces', () => {
    const nsNames = Object.keys(tokens.namespaces);
    assert.ok(nsNames.length >= 5, `Expected at least 5 namespaces, got ${nsNames.length}`);
    assert.ok(nsNames.includes('rawColors'));
    assert.ok(nsNames.includes('colors'));
    assert.ok(nsNames.includes('spacing'));
  });

  it('extracts raw color tokens', () => {
    const rawColors = tokens.namespaces['rawColors'];
    assert.ok(rawColors['--jal'], 'Missing --jal token');
    assert.equal(rawColors['--jal'].value, '#0070dd');
    assert.equal(rawColors['--jal'].category, 'raw');
  });

  it('extracts semantic color variables with resolved values', () => {
    const colors = tokens.namespaces['colors'];
    assert.ok(colors['--primary'], 'Missing --primary token');
    assert.equal(colors['--primary'].value, 'var(--jal)');
    assert.equal(colors['--primary'].resolved, '#0070dd');
    assert.equal(colors['--primary'].category, 'semantic');
  });

  it('marks deprecated spacing tokens', () => {
    const spacing = tokens.namespaces['spacing'];
    assert.ok(spacing['--spacing-xs']?.deprecated, '--spacing-xs should be deprecated');
    assert.ok(!spacing['--spacing-40']?.deprecated, '--spacing-40 should not be deprecated');
  });

  it('extracts spacing tokens', () => {
    const spacing = tokens.namespaces['spacing'];
    assert.ok(spacing['--spacing-40'], 'Missing --spacing-40');
    assert.equal(spacing['--spacing-40'].value, '16px');
  });
});

describe('Component Extractor', () => {
  const components = extractComponents('4.20.0');

  it('returns correct version', () => {
    assert.equal(components.version, '4.20.0');
  });

  it('discovers all component categories', () => {
    const categories = new Set(components.components.map((c) => c.category));
    assert.ok(categories.has('atoms'));
    assert.ok(categories.has('molecules'));
    assert.ok(categories.has('organisms'));
  });

  it('extracts a significant number of components', () => {
    assert.ok(
      components.components.length >= 50,
      `Expected at least 50 components, got ${components.components.length}`
    );
  });

  it('extracts button component with props', () => {
    const button = components.components.find((c) => c.name === 'button');
    assert.ok(button, 'Button component not found');
    assert.equal(button.category, 'atoms');
    assert.equal(button.importPath, '@innovaccer/design-system');
    assert.ok(button.props.length > 0, 'Button should have props');
  });

  it('extracts variant types', () => {
    const button = components.components.find((c) => c.name === 'button');
    assert.ok(button, 'Button component not found');
    const variantNames = Object.keys(button.variants);
    assert.ok(variantNames.length > 0, `Button should have variants, got ${variantNames.join(', ')}`);
  });
});

describe('Example Extractor', () => {
  const examples = extractExamples('4.20.0');

  it('extracts a significant number of examples', () => {
    assert.ok(
      examples.length >= 50,
      `Expected at least 50 examples, got ${examples.length}`
    );
  });

  it('each example has required fields', () => {
    for (const ex of examples.slice(0, 10)) {
      assert.ok(ex.id, `Example missing id`);
      assert.ok(ex.component, `Example missing component`);
      assert.ok(ex.category, `Example missing category`);
      assert.ok(ex.title, `Example missing title`);
      assert.ok(ex.code, `Example missing code`);
      assert.ok(Array.isArray(ex.tags), `Example missing tags array`);
    }
  });
});

describe('Pattern Extractor', () => {
  const patterns = extractPatterns('4.20.0');

  it('returns correct version', () => {
    assert.equal(patterns.version, '4.20.0');
  });

  it('extracts patterns', () => {
    assert.ok(patterns.patterns.length > 0, 'Should extract at least one pattern');
  });

  it('each pattern has required fields', () => {
    for (const p of patterns.patterns) {
      assert.ok(p.name, 'Pattern missing name');
      assert.ok(p.category, 'Pattern missing category');
      assert.ok(p.title, 'Pattern missing title');
    }
  });
});

describe('Version Extractor', () => {
  it('extracts version from root package.json', () => {
    const version = extractVersion();
    assert.equal(version.version, '4.20.0');
    assert.ok(version.generatedAt, 'Missing generatedAt');
  });
});
