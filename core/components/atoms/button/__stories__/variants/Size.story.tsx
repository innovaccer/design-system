import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Size } from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const sizes: Size[] = ['tiny', 'regular', 'large'];

  const children = text(
    'children',
    'Button'
  );

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
  };

  const outerStyle = {
    marginRight: '5%',
  };

  const innerStyle = {
    height: '40px',
  };

  return (
    <div style={style}>
      {
        sizes.map((ButtonSize, ind) => {
          return (
            <div key={ind} style={outerStyle}>
              <div style={innerStyle}>
                <Button
                  onClick={action('button-clicked')}
                  onMouseEnter={action('mouse-enter')}
                  onMouseLeave={action('mouse-leave')}
                  appearance={'primary'}
                  size={ButtonSize}
                  expanded={expanded}
                  disabled={disabled}
                  loading={loading}
                >
                  {children}
                </Button>
              </div>
              <br />
              <Text weight="strong">{ButtonSize.charAt(0).toUpperCase() + ButtonSize.slice(1)}</Text>
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
