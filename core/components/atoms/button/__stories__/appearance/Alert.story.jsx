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
        title: 'Button',
        description: 'Delete button',
        a11yProps: ` **aria-label:** Add \`aria-label='Delete'\` to describe the action of button `,
      },
    },
  },
};
