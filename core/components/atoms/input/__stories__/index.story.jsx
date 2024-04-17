import * as React from 'react';
import { Input } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const inputType = 'url';

  const placeholder = 'Placeholder';

  const info = 'sample info tooltip';

  const min = 1;

  const max = 30;

  const minLength = 1;

  const maxLength = 30;

  return (
    <Input
      className="w-25"
      name="input"
      type={inputType}
      placeholder={placeholder}
      onChange={action('on-change')}
      info={info}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
};

export default {
  title: 'Components/Input/Input/All',
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
