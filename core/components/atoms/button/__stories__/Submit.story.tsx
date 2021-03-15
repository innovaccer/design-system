import * as React from 'react';
import Button from '../Button';

export const submitButton = () => (
  <Button
    appearance="primary"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
  >
    Submit
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
