import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Checkbox from '../index';
import { Size } from '../Checkbox';

export const defaultCheckbox = () => {
  const sizes: Size[] = ['regular'];
  const label = text(
    'label',
    'Checkbox'
  );

  const styles = {
    display: 'flex',
  };

  const outerStyles = {
    marginRight: '2%',
  };

  const innerStyles = {
    height: '20px',
  };

  return (
    <div style={styles}>
      {
        sizes.map((CheckboxSize, ind) => {
          return (
            <div key={ind} style={outerStyles}>
              <div style={innerStyles}>
                <Checkbox
                  checked={true}
                  disabled={false}
                  size={CheckboxSize}
                  label={label}
                />
              </div>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
