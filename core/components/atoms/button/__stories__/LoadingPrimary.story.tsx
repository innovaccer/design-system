import * as React from 'react';
import Button from '../Button';

export const loading = () => (
  <Button
    appearance="primary"
    size="regular"
    expanded={false}
    disabled={false}
    loading={true}
  >
    {''}
  </Button>
);

export default {
  title: 'Components/Button/Loading',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Primary button in loading state.'
      }
    }
  }
};
