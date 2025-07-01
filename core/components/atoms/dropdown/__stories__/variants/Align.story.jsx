import * as React from 'react';
import Dropdown from '../../Dropdown';
import { Uncontrolled, Controlled } from '../_common_/types';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const align = () => {
  const dropdownAlignments = ['right', 'left'];

  return (
    <div className="d-flex pb-14">
      {dropdownAlignments.map((alignment, ind) => {
        return (
          <div key={ind} className="ml-12">
            <Text weight="strong">{`Towards ${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`}</Text>
            <br />
            <br />
            <Dropdown align={alignment} options={storyOptions} menu={true} />
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

  return (
    <div className='d-flex'>
      <div className='mr-12'>
        <Text weight="strong">Towards Right</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} align='right'/>
      </div>
      <div>
        <Text weight="strong">Towards Left</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} align='left'/>
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Align',
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
