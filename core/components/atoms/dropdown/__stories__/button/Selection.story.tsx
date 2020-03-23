import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

// CSF format story
export const selected = () => {
  const selectedValues = {
    label: 'Option2',
    value: 'Option2',
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '5%' }}>
        <Dropdown placeholder={'Select'} options={storyOptions} /><br />
        <Text weight="strong">{'Unselected'}</Text>
      </div>
      <div>
        <Dropdown placeholder={'Select'} options={storyOptions} selected={selectedValues} /><br />
        <Text weight="strong">{'Selected'}</Text>
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown/button' };
