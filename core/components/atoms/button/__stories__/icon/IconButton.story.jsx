import * as React from 'react';
import { Button } from '@/index';

export const iconButton = () => (
  <Button appearance="basic" icon="keyboard_arrow_right" aria-label="Next in rank" tooltip="Next in rank" />
);

export default {
  title: 'Components/Button/Button/Icon/Icon Button',
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
        description: 'Secondary button with icon.',
        a11yProps: `**aria-label:** Add \`aria-label='Next in rank'\` to describe the action of button. `,
      },
    },
  },
};
