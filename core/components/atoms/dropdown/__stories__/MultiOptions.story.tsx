import * as React from 'react';
import Dropdown from '../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../utils/Options';

// CSF format story
export const multiOptions = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '5%' }}>
        <Text weight="strong">{'With Apply Button'}</Text><br />
        {
          <Dropdown maxHeight={150} checkboxes={true} showApplyButton={true} options={storyOptions} placeholder={'Select'} />
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text weight="strong">{'Without Apply Button'}</Text><br />
        {
          <Dropdown checkboxes={true} options={storyOptions} placeholder={'Select'} />
        }
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown' };
