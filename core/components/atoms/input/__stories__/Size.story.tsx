import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Input from '../Input';
import { action } from '@storybook/addon-actions';
import { Size } from '@/components/atoms/button';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {

  const value = text(
    'value',
    ''
  );

  const sizes: Size[] = ['tiny', 'regular', 'large'];

  const placeholder = text(
    'placeholder',
    'Placeholder'
  );

  const label = text(
    'label',
    ''
  );

  return (
    <div style={{ display: 'flex' }}>
      {
        sizes.map((InputSize, ind) => {
          return (
            <div key={ind} style={{ maxWidth: '300px', marginRight: '5%' }}>
              <div style={{ height: '40px' }}>
                <Input
                  name="input"
                  value={value}
                  onChangeHandler={action('on-change')}
                  onClickHandler={action('on-click')}
                  onClearHandler={action('on-clear')}
                  placeholder={placeholder}
                  label={label}
                  size={InputSize}
                />
              </div>
              <br />
              <Text weight="strong">{InputSize.charAt(0).toUpperCase() + InputSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Input' };
