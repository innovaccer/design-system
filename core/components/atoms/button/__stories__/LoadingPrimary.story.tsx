import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export const loadingPrimary = () => {
  const disabled = false;
  const expanded = false;
  return (
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance="primary"
          size="regular"
          expanded={expanded}
          disabled={disabled}
          loading={true}
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
