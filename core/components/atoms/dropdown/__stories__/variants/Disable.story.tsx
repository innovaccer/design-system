import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const disabled = () => {
  const disabledStates = [true, false];

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      {
        disabledStates.map((state, ind) => {
          return (
            <div className="w-25" key={ind} style={{ marginRight: '5%' }}>
              <Text weight="strong">{state ? 'Disabled' : 'Enabled'}</Text> <br /><br />
              <Dropdown disabled={state} options={storyOptions} placeholder={'Select'} />
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
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Disabled</Text> <br /><br />
        <Dropdown disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Enabled</Text> <br /><br />
        <Dropdown disabled={false} options={storyOptions} />
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown/Variants/Disabled',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        },
        title: 'Dropdown'
      }
    }
  }
};
