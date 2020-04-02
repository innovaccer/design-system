import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions, selectedStoryOptions, multiSelectedStoryOptions } from '../../utils/Options';

// CSF format story
export const selected = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '5%' }}>
        <Text weight="strong">{'Unselected'}</Text><br /><br />
        <Dropdown placeholder={'Select'} options={storyOptions} />
      </div>
      <div style={{ marginRight: '5%' }}>
        <Text weight="strong">{'Single Selected'}</Text><br /><br />
        <Dropdown placeholder={'Select'} options={selectedStoryOptions} />
      </div>
      <div style={{ marginRight: '5%' }}>
        <Text weight="strong">{'Multi Selected'}</Text><br /><br />
        <Dropdown placeholder={'Select'} checkboxes={true} options={multiSelectedStoryOptions} />

      </div>
      <div style={{ marginRight: '5%' }}>
        <Text weight="strong">{'All Selected'}</Text><br /><br />
        <Dropdown placeholder={'Select'} checkboxes={true} selectAll={true} options={storyOptions} />
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown/button' };
