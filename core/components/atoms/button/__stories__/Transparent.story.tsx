import * as React from 'react';
import Button from '../Button';

export const transparent = () => (
  <Button
    appearance="transparent"
    size="regular"
  >
    Re-evaluate
  </Button>
);

export default {
  title: 'Components/Button/Transparent',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Transparent button.'
      }
    }
  }
};
