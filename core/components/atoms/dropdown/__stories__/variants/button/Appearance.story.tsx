import * as React from 'react';
import Dropdown from '../../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../../utils/Options';
import { ButtonAppearance } from '../../../dropdownList';

// CSF format story
export const appearance = () => {
  const appearances: ButtonAppearance[] = ['basic', 'transparent'];

  return (
    <div style={{ display: 'flex', minHeight: '270px' }}>
      {
        appearances.map((color, ind) => {
          return (
            <div style={{ marginRight: '5%' }} key={ind}>
              <Text weight="strong">{color.charAt(0).toUpperCase() + color.slice(1)}</Text> <br /><br />
              <Dropdown buttonAppearance={color} options={storyOptions} />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants/Button',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
