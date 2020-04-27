import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions, storySections } from '../../utils/Options';

// CSF format story
export const sections = () => {
  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
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
