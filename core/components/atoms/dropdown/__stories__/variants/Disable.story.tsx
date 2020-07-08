import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const disabled = () => {
  const disabledStates = [true, false];

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      {
        disabledStates.map((state, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
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
    <div className='d-flex' style={{ minHeight: '270px' }}>
      <div className='mr-8'>
        <Text weight="strong">Disabled</Text> <br /><br />
        <Dropdown disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8'>
        <Text weight="strong">Enabled</Text> <br /><br />
        <Dropdown disabled={false} options={storyOptions} />
      </div>
    </div>
  )
}`;

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown'
      }
    }
  }
};
