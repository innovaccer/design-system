import * as React from 'react';
import Button from '../Button';

export const loadingPrimary = () => (
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
  title: 'Components/Button/Loading Primary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
