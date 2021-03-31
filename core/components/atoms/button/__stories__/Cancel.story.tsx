import * as React from 'react';
import Button from '../Button';

export const cancel = () => (
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
  title: 'Components/Button/Cancel',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Cancel Button'
      }
    }
  }
};
