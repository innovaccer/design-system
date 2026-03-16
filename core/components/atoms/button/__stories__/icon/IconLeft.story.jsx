import * as React from 'react';
import { Button } from '@/index';

export const iconLeft = () => (
  <Button icon="get_app" iconAlign="left" aria-label="Download">
    Download
  </Button>
);

export default {
  title: 'Components/Button/Button/Icon/Icon Left',
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
        description: 'Secondary button with left aligned icon.',
        a11yProps: ` **aria-label:** Add \`aria-label='Download'\` on button to indicate its purpose. `,
      },
    },
  },
};
