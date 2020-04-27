import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Appearance } from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const appearances: Appearance[] = ['basic', 'primary', 'success', 'alert', 'transparent'];

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
                appearance={appear}
                size={'regular'}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
              >
                {children}
              </Button>
              <br />
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Button/Variants',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
