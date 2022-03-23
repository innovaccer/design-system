import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const size = () => {
  const value = '';

  const sizes = ['tiny', 'regular', 'large'];

  const placeholder = 'Placeholder';

  return (
    <div className="d-flex">
      {sizes.map((InputSize, ind) => {
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
      })}
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
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
