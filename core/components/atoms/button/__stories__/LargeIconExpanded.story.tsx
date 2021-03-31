import * as React from 'react';
import Button from '../Button';

export const LargeExpanded = () => (
  <Button
    appearance="primary"
    size="large"
    expanded={true}
  >
    Login
  </Button>
);

export default {
  title: 'Components/Button/Large Expanded',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Large expanded button.'
      }
    }
  }
};
