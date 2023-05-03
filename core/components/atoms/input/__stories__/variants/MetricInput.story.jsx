import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const metricInput = () => {
  return (
    <div>
      <div className="w-25">
        <Input name="input" type="number" size="regular" onChange={action('on-change')} />
        <br />
        <Text weight="strong">Regular</Text>
      </div>
      <br />
      <div className="w-25">
        <Input name="input" type="number" size="large" onChange={action('on-change')} />
        <br />
        <Text weight="strong">Large</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Input/Variants/Metric Input',
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
