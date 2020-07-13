import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export const menuHorizontal = () => (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
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
