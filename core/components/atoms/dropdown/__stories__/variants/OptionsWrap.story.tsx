import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyWrapOptions } from '../../utils/Options';

// CSF format story
export const optionsWrap = () => {
  const optionsWrapBoolean = [true, false];

  return (
    <div style={{ display: 'flex', minHeight: '240px' }}>
      {
        optionsWrapBoolean.map((wrap, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
              <Text weight="strong">{wrap ? 'Options Wrapped' : 'Options Trimmed'}</Text> <br /><br />
              <Dropdown optionsWrap={wrap} options={storyWrapOptions} placeholder={'Select'} />
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
