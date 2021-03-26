import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Input from '../../Input';
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

  return (
    <div className="d-flex">
      {
        sizes.map((InputSize, ind) => {
          return (
            <div key={ind} className="mr-9 w-25">
              <div className="h-50">
                <Input
                  name="input"
                  value={value}
                  onChange={action('on-change')}
                  onClick={action('on-click')}
                  onClear={action('on-clear')}
                  placeholder={placeholder}
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

export default {
  title: 'Components/Input/Variants/Size',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
