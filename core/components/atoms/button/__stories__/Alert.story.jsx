import * as React from 'react';
import Button from '../Button';

export const AlertButton = () => (
  <Button appearance="alert" aria-label="Delete">
    Delete
  </Button>
);

export default {
  title: 'Actions/Button/Alert Button',
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
