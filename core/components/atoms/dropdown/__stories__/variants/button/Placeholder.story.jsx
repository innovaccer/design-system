import * as React from 'react';
import Dropdown from '../../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../../_common_/types';
import { storyOptions } from '../../Options';

// CSF format story
export const placeholder = () => {
  const booleanValues = [true, false];

  return (
    <div className="d-flex pb-14">
      {booleanValues.map((menu, ind) => {
        return (
          <div className="mr-9" key={ind}>
            <Text weight="strong">{!menu ? 'With Placeholder' : 'Without Placeholder'}</Text> <br />
            <br />
            <Dropdown menu={menu} options={storyOptions} />
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
      <div className='mr-8'>
        <Text weight="strong">Without Placeholder</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} />
      </div>
      <div className='mr-8'>
        <Text weight="strong">With Placeholder</Text> <br /><br />
        <Dropdown menu={false} options={storyOptions} />
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Trigger/Placeholder',
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
