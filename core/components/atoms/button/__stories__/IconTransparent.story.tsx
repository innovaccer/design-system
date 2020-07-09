import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export const iconTransparent = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const ButtonIcon = text(
    'icon',
    'refresh'
  );
  return (

    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      appearance={'transparent'}
      size="regular"
      expanded={expanded}
      disabled={disabled}
      loading={loading}
      icon={ButtonIcon}
    >
      {''}
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
