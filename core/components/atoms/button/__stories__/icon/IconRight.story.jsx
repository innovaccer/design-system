import * as React from 'react';
import { Button } from '@/index';

export const iconRight = () => (
  <Button icon="arrow_forward" iconAlign="right" aria-label="Next in rank">
    Next in rank
  </Button>
);

export default {
  title: 'Components/Button/Button/Icon/Icon Right',
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
        description: 'Secondary button with right aligned icon.',
        a11yProps: ` **aria-label:** Add \`aria-label='Next in rank'\` to describe the action of button. `,
      },
    },
  },
};
