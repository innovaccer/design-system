import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

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
