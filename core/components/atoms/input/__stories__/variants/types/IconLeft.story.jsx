import * as React from 'react';
import { Input, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const iconLeft = () => {
  const icon = 'search';
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Search" onChange={action('on-change')} icon={icon} />
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          placeholder="Search"
          onChange={action('on-change')}
          info="sample info tooltip"
          icon={icon}
        />
        <br />
        <Text weight="strong">Placeholder</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Search" onChange={action('on-change')} error={true} icon={icon} />
        <br />
        <Text weight="strong">Error</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" placeholder="Search" disabled={true} icon={icon} />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" value="Value" icon={icon} readOnly={true} />
        <br />
        <Text weight="strong">Read Only</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Input/Variants/Types/Icon Left',
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
