import * as React from 'react';
import { Button } from '@/index';

export const Primary = () => (
  <Button appearance="primary" size="regular" aria-label="Submit your response">
    Submit your response
  </Button>
);

export default {
  title: 'Components/Button/Button/Appearance/Primary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Primary button',
        a11yProps: ` **aria-label:** Add \`aria-label='Submit your response'\` to describe the action of button `,
      },
    },
  },
};
