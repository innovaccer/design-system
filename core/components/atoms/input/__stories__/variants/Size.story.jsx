import * as React from 'react';
import { Input, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular', 'large'];

  const placeholder = 'Placeholder';

  return (
    <div>
      {sizes.map((InputSize, ind) => {
        return (
          <div key={ind} className="mb-8 w-25">
            <Label htmlFor={InputSize} withInput={true}>
              {InputSize.charAt(0).toUpperCase() + InputSize.slice(1)}
            </Label>
            <Input name="input" onChange={action('on-change')} placeholder={placeholder} size={InputSize} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Input/Input/Variants/Size',
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
