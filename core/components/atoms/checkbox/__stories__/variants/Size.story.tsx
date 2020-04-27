import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Checkbox from '../../index';
import { Size } from '../../Checkbox';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes: Size[] = ['tiny', 'regular'];
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
              <br />
              <Text weight="strong">{CheckboxSize.charAt(0).toUpperCase() + CheckboxSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|Checkbox/Variants',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
