import * as React from 'react';
import Dropdown from '../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions, storySections } from '../utils/Options';

// CSF format story
export const sections = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '5%' }}>
        <Text weight="strong">{'With Sections'}</Text><br />
        {
          <Dropdown subheading={storySections} options={storyOptions} placeholder={'Select'} />
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text weight="strong">{'Without Sections'}</Text> <br />
        {
          <Dropdown options={storyOptions} placeholder={'Select'} />
        }
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown' };
