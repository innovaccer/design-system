import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export const deleteButton = () => (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      appearance="alert"
      size="regular"
      expanded={false}
      disabled={false}
      loading={false}
    >
      Delete
    </Button>
  );

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
