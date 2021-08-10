import * as React from 'react';
import Button from '../Button';

export const BasicButton = () => (
  <Button appearance="basic" size="regular">
    Cancel
  </Button>
);

export default {
  title: 'Components/Button/Basic Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Basic Button',
      },
    },
  },
};
