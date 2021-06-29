import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const inlineLabel = () => {

  const label = 'USD';
  return (
    <div>
      <div className="w-25">
        <Input
          name="input"
          type="number"
          size="regular"
          inlineLabel={label}
          onChange={action('on-change')}
        />
        <br />
        <Text weight="strong">Regular</Text>
      </div>
      <br />
      <div className="w-25">
        <Input
          name="input"
          type="number"
          size="large"
          inlineLabel={label}
          onChange={action('on-change')}
        />
        <br />
        <Text weight="strong">Large</Text>
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
          exclude: ['autocomplete']
        }
      }
    }
  }
};
