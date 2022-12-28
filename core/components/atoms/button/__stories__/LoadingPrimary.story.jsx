import * as React from 'react';
import Button from '../Button';

export const LoaderInButton = () => <Button appearance="primary" loading={true} aria-label="loading" />;

export default {
  title: 'Components/Button/Loader In Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Primary button in loading state.',
        a11yProps: ` **aria-label:** Add \`aria-label='loading'\` to describe the action of button. `,
      },
    },
  },
};
