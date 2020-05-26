import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Appearance } from '../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const secondaryButton = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  //   const appearances: Appearance[] = ['success'];

  const children = text(
    'children',
    'Button'
  );

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };

  return (
    <div style={style}>
      <Button
        onClick={action('button-clicked')}
        onMouseEnter={action('mouse-enter')}
        onMouseLeave={action('mouse-leave')}
        appearance="basic"
        size={'regular'}
        expanded={expanded}
        disabled={disabled}
        loading={loading}
      >
        {children}
      </Button>
    </div>
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
