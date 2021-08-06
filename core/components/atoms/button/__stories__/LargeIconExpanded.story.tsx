import * as React from 'react';
import Button from '../Button';

export const ExpandedButton = () => (
  <Button appearance="primary" size="large" expanded={true}>
    Login
  </Button>
);

export default {
  title: 'Components/Button/Expanded Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Large expanded button.',
      },
    },
  },
};
