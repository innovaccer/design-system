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
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
