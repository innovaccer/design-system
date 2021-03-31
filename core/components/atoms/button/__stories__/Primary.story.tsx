import * as React from 'react';
import Button from '../Button';

export const Primary = () => (
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
  title: 'Components/Button/Primary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Primary button'
      }
    }
  }
};
