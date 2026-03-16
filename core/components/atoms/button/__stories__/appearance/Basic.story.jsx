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
        description: 'Basic Button',
        a11yProps: `**aria-label:** Add \`aria-label='Cancel'\` to describe the action of button `,
      },
    },
  },
};
