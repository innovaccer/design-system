import * as React from 'react';
import Button from '../Button';

export const cancelButton = () => (
  <Button
    appearance="basic"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
  >
    Cancel
  </Button>
);

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
