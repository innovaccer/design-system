import * as React from 'react';
import Dropdown from '../../Dropdown';
import { DropdownAlign } from '../../dropdownList';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

// CSF format story
export const align = () => {
  const dropdownAlignments: DropdownAlign[] = ['right', 'left'];

  return (
    <div style={{ display: 'flex',  minHeight: '280px' }}>
      {
        dropdownAlignments.map((alignment, ind) => {
          return (
            <div key={ind} style={{ marginRight: '10%' }}>
              <Text weight="strong">{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</Text> <br /><br />
              <Dropdown dropdownAlign={alignment} options={storyOptions} />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
