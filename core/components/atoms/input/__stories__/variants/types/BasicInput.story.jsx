import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const basic = () => {
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <Input name="input" onChange={action('on-change')} onClear={action('on-clear')} />
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          value=""
          placeholder="Placeholder"
          onChange={action('on-change')}
          onClear={action('on-clear')}
          info="sample info popover"
        />
        <br />
        <Text weight="strong">Placeholder</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input name="input" onChange={action('on-change')} onClear={action('on-clear')} error={true} />
        <br />
        <Text weight="strong">Error</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input name="input" value="Value" onChange={action('on-change')} disabled={true} />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input name="input" value="Value" />
        <br />
        <Text weight="strong">Read Only</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Input/Variants/Types/Basic',
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
