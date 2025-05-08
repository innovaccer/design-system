import * as React from 'react';
import Dropdown from '../../Dropdown';
import Input from '@/components/atoms/input';
import { Uncontrolled, Controlled } from '../_common_/types';
import { storyOptions } from '../Options';

// CSF format story
export const customTrigger = () => {
  const onChange = (e) => {
    e.preventDefault();
  };

  const customTriggerFunc = (label) => {
    return <Input type="text" name="input" value={label} onChange={onChange} />;
  };

  return (
    <div className="d-flex pb-14">
      <div>
        <Dropdown options={storyOptions} triggerOptions={{ customTrigger: customTriggerFunc }} />
      </div>
    </div>
  );
};

const customCode = `() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      icon: 'event',
      subInfo: 'subInfo'
    });
  }
  const onChange = (e) => {
    e.preventDefault();
  };

  const customTriggerFunc = (label) => {
    return (
      <div className="w-100">
        <Input
          type="text"
          name="input"
          value={label}
          onChange={onChange}
        />
      </div>
    );
  };

  return (
    <div className='d-flex'>
      <div>
        <Dropdown options={storyOptions} customTrigger={customTriggerFunc} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Custom Trigger',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
