import { allRules, type Violation } from './rules.js';

export interface ValidationResult {
  valid: boolean;
  violations: Violation[];
  summary: string;
}

export function validateCode(code: string, _filename?: string): ValidationResult {
  const lines = code.split('\n');
  const violations: Violation[] = [];

  for (const rule of allRules) {
    violations.push(...rule.check(lines));
  }

  violations.sort((a, b) => a.line - b.line || a.column - b.column);

  const valid = violations.length === 0;
  const summary = valid
    ? 'No design system violations found.'
    : `Found ${violations.length} violation(s) across ${new Set(violations.map((v) => v.ruleId)).size} rule(s).`;

  return { valid, violations, summary };
}
