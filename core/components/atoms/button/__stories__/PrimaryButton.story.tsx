import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Appearance } from '../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const primaryButton = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const appearances: Appearance[] = ['primary'];

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
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Button
                onClick={action('button-clicked')}
                onMouseEnter={action('mouse-enter')}
                onMouseLeave={action('mouse-leave')}
                appearance="primary"
                size={'regular'}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
              >
                {children}
              </Button>
              <br />
              <Text weight="strong">Primary</Text>
            </div>
          );
        })
      }
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
