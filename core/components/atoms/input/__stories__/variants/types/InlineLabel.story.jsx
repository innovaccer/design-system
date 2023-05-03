import * as React from 'react';
import { Input, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const inlineLabel = () => {
  const label = 'USD';
  return (
    <div>
      <div className="w-25">
        <Label htmlFor="regular" withInput={true}>
          Regular
        </Label>
        <Input name="input" size="regular" inlineLabel={label} onChange={action('on-change')} />
      </div>
      <br />
      <div className="w-25">
        <Label htmlFor="large" withInput={true}>
          Large
        </Label>
        <Input name="input" size="large" inlineLabel={label} onChange={action('on-change')} />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Variants/Types/Inline Label',
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
