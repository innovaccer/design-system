import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateCode } from '../validation/engine.js';
import {
  noRawHtmlControls,
  noHardcodedColors,
  tokensOnly,
  approvedImports,
} from '../validation/rules.js';

describe('Validation Rules', () => {
  describe('no-raw-html-controls', () => {
    it('flags raw <input> elements', () => {
      const violations = noRawHtmlControls.check([
        'return <input type="text" />;',
      ]);
      assert.equal(violations.length, 1);
      assert.equal(violations[0].ruleId, 'no-raw-html-controls');
      assert.ok(violations[0].message.includes('Input'));
    });

    it('flags raw <button> elements', () => {
      const violations = noRawHtmlControls.check([
        '<button onClick={handleClick}>Click</button>',
      ]);
      assert.equal(violations.length, 1);
      assert.ok(violations[0].message.includes('Button'));
    });

    it('flags raw <select> and <textarea>', () => {
      const violations = noRawHtmlControls.check([
        '<select><option>A</option></select>',
        '<textarea rows={5} />',
      ]);
      assert.equal(violations.length, 2);
    });

    it('passes for DS components', () => {
      const violations = noRawHtmlControls.check([
        '<Button appearance="primary">Click</Button>',
        '<Input name="email" />',
      ]);
      assert.equal(violations.length, 0);
    });
  });

  describe('no-hardcoded-colors', () => {
    it('flags hex colors in style props', () => {
      const violations = noHardcodedColors.check([
        'color: #ff0000;',
      ]);
      assert.equal(violations.length, 1);
      assert.equal(violations[0].ruleId, 'no-hardcoded-colors');
    });

    it('flags rgb colors', () => {
      const violations = noHardcodedColors.check([
        'background-color: rgba(255, 0, 0, 0.5);',
      ]);
      assert.equal(violations.length, 1);
    });

    it('passes for token variables', () => {
      const violations = noHardcodedColors.check([
        'color: var(--primary);',
        'background: var(--alert-lightest);',
      ]);
      assert.equal(violations.length, 0);
    });

    it('flags hardcoded color even when var(--) is on the same line', () => {
      const violations = noHardcodedColors.check([
        'background: var(--surface); color: #ff0000;',
      ]);
      assert.equal(violations.length, 1);
      assert.ok(violations[0].message.includes('#ff0000'));
    });

    it('ignores non-color properties', () => {
      const violations = noHardcodedColors.check([
        'const hex = "#abc123";',
      ]);
      assert.equal(violations.length, 0);
    });
  });

  describe('tokens-only', () => {
    it('flags hardcoded px values', () => {
      const violations = tokensOnly.check([
        'padding: 16px;',
      ]);
      assert.equal(violations.length, 1);
      assert.equal(violations[0].ruleId, 'tokens-only');
    });

    it('flags hardcoded rem values', () => {
      const violations = tokensOnly.check([
        'margin: 1.5rem;',
      ]);
      assert.equal(violations.length, 1);
    });

    it('passes for token variables', () => {
      const violations = tokensOnly.check([
        'padding: var(--spacing-40);',
      ]);
      assert.equal(violations.length, 0);
    });

    it('flags hardcoded size even when var(--) is on the same line', () => {
      const violations = tokensOnly.check([
        'padding: var(--spacing-40); margin: 8px;',
      ]);
      assert.equal(violations.length, 1);
      assert.ok(violations[0].message.includes('8px'));
    });
  });

  describe('approved-imports', () => {
    it('flags @mui imports', () => {
      const violations = approvedImports.check([
        "import { Button } from '@mui/material';",
      ]);
      assert.equal(violations.length, 1);
      assert.equal(violations[0].ruleId, 'approved-imports');
    });

    it('flags antd imports', () => {
      const violations = approvedImports.check([
        "import { Input } from 'antd';",
      ]);
      assert.equal(violations.length, 1);
    });

    it('passes for DS imports', () => {
      const violations = approvedImports.check([
        "import { Button, Input } from '@innovaccer/design-system';",
      ]);
      assert.equal(violations.length, 0);
    });
  });
});

describe('validateCode()', () => {
  it('returns valid for clean code', () => {
    const result = validateCode([
      "import { Button } from '@innovaccer/design-system';",
      '',
      'const App = () => <Button appearance="primary">Click</Button>;',
    ].join('\n'));
    assert.equal(result.valid, true);
    assert.equal(result.violations.length, 0);
  });

  it('catches multiple violations', () => {
    const result = validateCode([
      "import { Button } from '@mui/material';",
      '',
      'const App = () => (',
      '  <div>',
      '    <input type="text" />',
      '    <div style={{ color: "#ff0000", padding: "16px" }}>Hello</div>',
      '  </div>',
      ');',
    ].join('\n'));
    assert.equal(result.valid, false);
    assert.ok(result.violations.length >= 2);
    const ruleIds = new Set(result.violations.map((v) => v.ruleId));
    assert.ok(ruleIds.has('approved-imports'));
    assert.ok(ruleIds.has('no-raw-html-controls'));
  });
});
