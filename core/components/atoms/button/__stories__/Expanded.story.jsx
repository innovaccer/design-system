import * as React from 'react';
import { Button } from '@/index';

export const ExpandedButton = () => (
  <Button appearance="primary" size="regular" expanded={true} aria-label="Login">
    Login
  </Button>
);

export default {
  title: 'Components/Button/Button/Expanded Button',
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
        description: 'Large expanded button.',
        a11yProps: ` **aria-label:** Add \`aria-label='Login'\` to describe the action of button `,
      },
    },
  },
};
