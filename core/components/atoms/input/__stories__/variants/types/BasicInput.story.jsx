import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const basic = () => {
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Placeholder" onChange={action('on-change')} aria-label="Default input" />
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          value=""
          placeholder="Placeholder"
          onChange={action('on-change')}
          info="sample info tooltip"
          aria-label="Placeholder input"
        />
        <br />
        <Text weight="strong">Placeholder</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          placeholder="Placeholder"
          onChange={action('on-change')}
          error={true}
          aria-label="Error input"
        />
        <br />
        <Text weight="strong">Error</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" placeholder="Placeholder" disabled={true} aria-label="Disabled input" />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" value="Value" readOnly={true} aria-label="Read only input" />
        <br />
        <Text weight="strong">Read Only</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Input/Variants/Types/Basic',
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
