import * as React from 'react';
import Dropdown from '../../Dropdown';
import Input from '@/components/atoms/input';
import { storyOptions } from '../Options';

// CSF format story
export const customTrigger = () => {
  const onChange = (e: any) => {
    e.preventDefault();
  };

  const customTriggerRenderer = (label?: string) => {
    return (
      <Input
        type="text"
        name="input"
        value={label}
        onChange={onChange}
      />
    );
  };

  const triggerOptions = {
    customTrigger: customTriggerRenderer
  };

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      <div style={{ marginRight: '20%', width: '256px' }}>
        <Dropdown options={storyOptions} triggerOptions={triggerOptions} />
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
  const onChange = (e) => {
    e.preventDefault();
  };

  const customTriggerFunc = (label) => {
    return (
      <div style={{ width: '100%' }}>
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
    <div style={{ display: 'flex', minHeight: '250px' }}>
      <div style={{ marginRight: '20%', width: '256px' }}>
        <Dropdown options={storyOptions} customTrigger={customTriggerFunc} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
