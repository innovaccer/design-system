import * as React from 'react';
import { Button } from '@/index';

export const Basic = () => (
  <Button appearance="basic" size="regular" aria-label="Cancel">
    Cancel
  </Button>
);

export default {
  title: 'Components/Button/Button/Appearance/Basic',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Basic Button',
        a11yProps: `**aria-label:** Add \`aria-label='Cancel'\` to describe the action of button `,
      },
    },
  },
};
