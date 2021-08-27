import * as React from 'react';
import Dropdown from '../../Dropdown';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
const storyOptions: any[] = [];
for (let i = 1; i <= 10; i++) {
  storyOptions.push({
    name: `Option ${i}`,
    id: `Option ${i}`,
    icon: 'events',
    subInfo: 'subInfo',
  });
}
const translateCallback = (option: { name: any; id: any }) => {
  return { label: option.name, value: option.id, ...option };
};

export const translateOption = () => {
  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      <Dropdown options={storyOptions} translateOption={translateCallback} />
    </div>
  );
};

const customCode = `() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      name: \`Option \${i}\`,
      id: \`Option \${i}\`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }
  const translateCallback = (option) =>{
    return {label: option.name, value: option.id, ...option}
  }
  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      <Dropdown options={storyOptions} translateOption={translateCallback}/>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown/Variants/Translate Option',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
        title: 'Dropdown',
      },
    },
  },
};
