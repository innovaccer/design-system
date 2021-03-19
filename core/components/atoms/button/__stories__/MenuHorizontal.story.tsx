import * as React from 'react';
import Button from '../Button';

export const menuHorizontal = () => (
  <Button
    appearance={'transparent'}
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
    icon="more_horiz"
  >
    {''}
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
