import * as React from 'react';
import Dropdown from '../../Dropdown';
import Input from '@/components/atoms/input';
import { Uncontrolled, Controlled } from '../_common_/types';
import { storyOptions } from '../Options';

// CSF format story

export const customTrigger = () => {
  const [value, setValue] = React.useState('Select');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const customTriggerFunc = () => {
    return <Input type="text" name="input" value={value} onChange={onChange} />;
  };

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      <div style={{ marginRight: '20%', width: '256px' }}>
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
      icon: 'events',
      subInfo: 'subInfo'
    });
  }
  const [value, setValue] = React.useState('Select');
  const onChange = (e) => {
    setValue(e.target.value);   
  };

  const customTriggerFunc = (label) => {
    return (
      <div style={{ width: '100%' }}>
        <Input
          type="text"
          name="input"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  return (
    <div className='d-flex'>
      <div className='mr-10'style={{ width: '256px' }}>
        <Dropdown options={storyOptions} customTrigger={customTriggerFunc} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown/Variants/Custom Trigger',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
