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
        title: 'Button',
        description: 'Large expanded button.',
        a11yProps: ` **aria-label:** Add \`aria-label='Login'\` to describe the action of button `,
      },
    },
  },
};
