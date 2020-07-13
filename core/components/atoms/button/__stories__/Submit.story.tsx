import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export const submit = () => {
  return (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      appearance="primary"
      size="regular"
      expanded={false}
      disabled={false}
      loading={false}
    >
      Submit
    </Button>
  );
};

export default {
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
