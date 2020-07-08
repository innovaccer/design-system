import * as React from 'react';
import Dropdown from '../../Dropdown';
import { DropdownAlign } from '../../DropdownList';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const align = () => {
  const dropdownAlignments: DropdownAlign[] = ['right', 'left'];

  return (
    <div style={{ display: 'flex',  minHeight: '280px' }}>
      {
        dropdownAlignments.map((alignment, ind) => {
          return (
            <div key={ind} style={{ marginRight: '20%', width: '200px' }}>
              <Text weight="strong">{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</Text> <br /><br />
              <Dropdown align={alignment} options={storyOptions} menu={true} />
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
    <div className='d-flex' style={{ minHeight: '280px' }}>
      <div className='mr-12'>
        <Text weight="strong">Right</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} align='right'/>
      </div>
      <div>
        <Text weight="strong">Left</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} align='left'/>
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
