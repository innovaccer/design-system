import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const size = () => {
  const value = '';

  const sizes = ['tiny', 'regular', 'large'];

  const placeholder = 'Placeholder';

  return (
    <div>
      {sizes.map((InputSize, ind) => {
        return (
          <div key={ind} className="mr-9 mb-8 w-25">
            <Text weight="strong">{InputSize.charAt(0).toUpperCase() + InputSize.slice(1)}</Text>
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
        );
      })}
    </div>
  );
};

export default {
  title: 'Text Input/Input/Variants/Size',
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
