import * as React from 'react';
import Button from '../Button';

export const AlertButton = () => (
  <Button
    appearance="alert"
  >
    Delete
  </Button>
);

export default {
  title: 'Components/Button/Alert Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Delete button'
      }
    }
  }
};
