import * as React from 'react';
import Dropdown from '../../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../../_common_/types';
import { storyOptions } from '../../Options';

// CSF format story
export const placeholder = () => {
  const booleanValues = [true, false];

  return (
    <div style={{ display: 'flex', minHeight: '270px' }}>
      {
        booleanValues.map((menu, ind) => {
          return (
            <div style={{ marginRight: '5%' }} key={ind}>
              <Text weight="strong">{!menu ? 'With Placeholder' : 'Without Placeholder'}</Text> <br /><br />
              <Dropdown menu={menu} options={storyOptions} />
            </div>
          );
        })
      }
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

  return (
    <div className='d-flex' style={{ minHeight: '270px' }}>
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
  title: 'Atoms|Dropdown/Variants/Trigger',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
