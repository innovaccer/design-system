import * as React from 'react';
import Dropdown from '../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../utils/Options';

// CSF format story
export const disabled = () => {
  const disabledStates = [true, false];

  return (
    <div style={{ display: 'flex' }}>
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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown' };
