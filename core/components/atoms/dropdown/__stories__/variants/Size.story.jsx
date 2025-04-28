import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular'];

  return (
    <div className="d-flex">
      {sizes.map((dropdownSize, ind) => {
        return (
          <div key={ind} className="mr-8 w-25">
            <Text weight="strong">{dropdownSize.charAt(0).toUpperCase() + dropdownSize.slice(1)}</Text> <br />
            <br />
            <Dropdown triggerSize={dropdownSize} options={storyOptions} placeholder={'Select'} />
          </div>
        );
      })}
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

  const disabled = [true, false];

  return (
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Tiny</Text> <br /><br />
        <Dropdown triggerSize={'tiny'} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Regular</Text> <br /><br />
        <Dropdown triggerSize={'regular'} options={storyOptions}/>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Size',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
