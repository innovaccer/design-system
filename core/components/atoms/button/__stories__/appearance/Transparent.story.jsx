import * as React from 'react';
import { Button } from '@/index';

export const transparent = () => (
  <Button appearance="transparent" aria-label="Re-evaluate">
    Re-evaluate
  </Button>
);

export default {
  title: 'Components/Button/Button/Appearance/Transparent',
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
        description: 'Transparent button.',
        a11yProps: ` **aria-label:** Add \`aria-label='Re-evaluate'\` to describe the action of button `,
      },
    },
  },
};
