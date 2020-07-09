import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export const LargeIconRightPrimary = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const iconAlign = 'right';
  const icon = text(
    'icon',
    'refresh'
  );
  const children = text(
    'children',
    'Button'
  );
  return (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      appearance="primary"
      size="large"
      expanded={expanded}
      disabled={disabled}
      loading={loading}
      icon={icon}
      iconAlign={iconAlign}
    >
      {children}
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
