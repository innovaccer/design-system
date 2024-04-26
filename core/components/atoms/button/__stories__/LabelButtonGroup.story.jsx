import * as React from 'react';
import { Button } from '@/index';

export const labelButtonGroup = () => (
  <div className="d-flex">
    <Button size="tiny" className="mr-2" aria-label="Copy">
      Copy
    </Button>
    <Button size="tiny" className="mr-2" aria-label="Paste">
      Paste
    </Button>
    <Button size="tiny" aria-label="Delete">
      Delete
    </Button>
  </div>
);

export default {
  title: 'Components/Button/Button/Label Button Group',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'A pattern using buttons in a group.',
        a11yProps: ` **aria-label:** <br/> - Add \`aria-label='Copy'\` on button with *copy* icon to describe the action of button.<br/>- Add \`aria-label='Paste'\` on button with *paste* icon to describe the action of button.<br/>- Add \`aria-label='Delete'\` on button with *delete* icon to describe the action of button.`,
      },
    },
  },
};
