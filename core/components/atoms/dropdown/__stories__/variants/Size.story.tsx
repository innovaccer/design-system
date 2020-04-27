import * as React from 'react';
import Dropdown from '../../Dropdown';
import { Size } from '../../dropdownList';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

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
              <Dropdown size={dropdownSize} options={storyOptions} placeholder={'Select'} />
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
