import * as React from 'react';
import Button from '../Button';

export const PrimaryButton = () => (
  <Button
    appearance="primary"
    size="regular"
  >
    Submit
  </Button>
);

export default {
  title: 'Components/Button/Primary Button',
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
