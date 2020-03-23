import * as React from 'react';
import Dropdown from '../Dropdown';
import { DropdownAlign } from '../dropdownList';
import Text from '@/components/atoms/text';
import { storyOptions } from '../utils/Options';

// CSF format story
export const align = () => {
  const dropdownAlignments: DropdownAlign[] = ['right', 'left'];

  return (
    <div style={{ display: 'flex' }}>
      {
        dropdownAlignments.map((alignment, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
              <Text weight="strong">{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</Text> <br /><br />
              <Dropdown dropdownAlign={alignment} options={storyOptions} />
            </div>
          );
        })
      }
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown' };
