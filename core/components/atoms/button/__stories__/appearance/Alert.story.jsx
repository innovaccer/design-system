import * as React from 'react';
import { Button } from '@/index';

export const Alert = () => (
  <Button appearance="alert" aria-label="Delete">
    Delete
  </Button>
);

export default {
  title: 'Components/Button/Button/Appearance/Alert',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        a11yPropsTable: [
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-disabled',
          'aria-expanded',
          'aria-pressed',
          'aria-haspopup',
          'aria-controls',
          'aria-hidden',
          'aria-busy',
          'role',
          'tabIndex',
          'id',
          'title',
        ],
        title: 'Button',
        description: 'Delete button',
        a11yProps: ` **aria-label:** Add \`aria-label='Delete'\` to describe the action of button `,
      },
    },
  },
};
