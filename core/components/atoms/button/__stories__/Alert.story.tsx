import * as React from 'react';
import Button from '../Button';

export const Alert = () => (
  <Button
    appearance="alert"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
  >
    Delete
  </Button>
);

export default {
  title: 'Components/Button/Alert',
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
