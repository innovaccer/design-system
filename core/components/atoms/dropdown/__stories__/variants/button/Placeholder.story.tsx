import * as React from 'react';
import Dropdown from '../../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../../utils/Options';

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
              <Dropdown placeholder={'Select'} menu={menu} options={storyOptions} />
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
