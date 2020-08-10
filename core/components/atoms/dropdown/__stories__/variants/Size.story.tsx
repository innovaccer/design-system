import * as React from 'react';
import Dropdown from '../../Dropdown';
import { Size } from '../../DropdownButton';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const size = () => {
  const sizes: Size[] = ['tiny', 'regular'];

  return (
    <div style={{ display: 'flex', minHeight: '270px' }}>
      {
        sizes.map((dropdownSize, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
              <Text weight="strong">{dropdownSize.charAt(0).toUpperCase() + dropdownSize.slice(1)}</Text> <br /><br />
              <Dropdown triggerSize={dropdownSize} options={storyOptions} placeholder={'Select'} width={128} />
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

  const disabled = [true, false];

  return (
    <div className='d-flex' style={{ minHeight: '270px' }}>
      <div className='mr-8'>
        <Text weight="strong">Tiny</Text> <br /><br />
        <Dropdown triggerSize={'tiny'} options={storyOptions} width={128}/>
      </div>
      <div className='mr-8'>
        <Text weight="strong">Regular</Text> <br /><br />
        <Dropdown triggerSize={'regular'} options={storyOptions} width={128}/>
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
        customCode,
        title: 'Dropdown'
      }
    }
  }
};
