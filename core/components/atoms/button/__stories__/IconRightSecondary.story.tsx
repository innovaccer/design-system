import * as React from 'react';
import Button from '../Button';

export const iconRightButton = () => (
  <Button icon="arrow_forward" iconAlign="right">
    Next in rank
  </Button>
);

export default {
  title: 'Components/Button/Icon Right Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Secondary button with right aligned icon.',
      },
    },
  },
};
