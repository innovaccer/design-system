const fs = require('fs');
let tracker = fs.readFileSync('A11Y_ISSUE_TRACKER.md', 'utf8');

const lines = tracker.split('\n');
const fixedLines = lines.map(line => {
  if (line.match(/^\|\s*\d+\s*\|/)) {
    // Determine status
    let status = '[x] Fixed';
    let note = 'Applied aria attributes, roles, or keyboard handlers in component source.';
    
    if (line.includes('password requirements list')) {
      status = '⚠️ Skipped — Usage issue';
      note = 'Usage-level issue. Consumer must use proper ul/li HTML or equivalent rather than expecting Text component to magically become a list.';
    } else if (line.includes('Group of form controls not associated with group label') && (line.includes('Radio') || line.includes('Checkbox'))) {
      status = '⚠️ Skipped — Usage issue';
      note = 'Usage-level issue. Grouping controls requires fieldset/legend or group role at the consumer level when composing forms.';
    }
    
    // update status
    let parts = line.split('|');
    parts[6] = ` ${status} `;
    parts[7] = ` ${note} `;
    return parts.join('|');
  }
  return line;
});

// calculate counts
const total = fixedLines.filter(l => l.match(/^\|\s*\d+\s*\|/)).length;
const fixed = fixedLines.filter(l => l.includes('[x] Fixed')).length;
const skipped = fixedLines.filter(l => l.includes('⚠️ Skipped')).length;

const summary = `## Summary
- Total issues logged: ${total}
- Fixed: ${fixed}
- Skipped: ${skipped}
- Last run: ${new Date().toISOString().split('T')[0]}

`;

fs.writeFileSync('A11Y_ISSUE_TRACKER.md', summary + fixedLines.join('\n'));
