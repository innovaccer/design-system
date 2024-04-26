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
        title: 'Button',
        description: 'Secondary button with right aligned icon.',
        a11yProps: ` **aria-label:** Add \`aria-label='Next in rank'\` to describe the action of button. `,
      },
    },
  },
};
