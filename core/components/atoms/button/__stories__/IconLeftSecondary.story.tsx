import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Size } from '../Button';

export const iconLeftSecondary = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const iconAlign = 'left';

  const size: Size[] = ['regular'];

  const icon = text(
    'icon',
    'refresh'
  );

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
  };

  const children = text(
    'children',
    'Button'
  );

  const outerStyle = {
    marginRight: '5%',
  };

  const innerStyle = {
    height: '40px',
  };

  return (
    <div style={style}>
      {
        size.map((IconSize, ind) => {
          return (
            <div key={ind} style={outerStyle}>
              <div style={innerStyle}>
                <Button
                  onClick={action('button-clicked')}
                  onMouseEnter={action('mouse-enter')}
                  onMouseLeave={action('mouse-leave')}
                  appearance={'basic'}
                  size={IconSize}
                  expanded={expanded}
                  disabled={disabled}
                  loading={loading}
                  icon={icon}
                  iconAlign={iconAlign}
                >
                  {children}
                </Button>
              </div>
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
