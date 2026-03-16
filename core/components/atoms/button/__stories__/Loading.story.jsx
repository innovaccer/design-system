import * as React from 'react';
import { Button } from '@/index';

export const LoaderInButton = () => <Button loading={true} aria-label="loading" />;

export default {
  title: 'Components/Button/Button/Loader In Button',
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
        description: 'Primary button in loading state.',
        a11yProps: ` **aria-label:** Add \`aria-label='loading'\` to describe the action of button. `,
      },
    },
  },
};
