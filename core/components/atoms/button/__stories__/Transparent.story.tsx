import * as React from 'react';
import Button from '../Button';

export const transparentButton = () => (
  <Button
    appearance="transparent"
  >
    Re-evaluate
  </Button>
);

export default {
  title: 'Components/Button/Transparent Button',
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
