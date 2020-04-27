import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions, subInfoItems, iconItems } from '../../utils/Options';

// CSF format story
export const itemStates = () => {
  return (
    <div style={{ display: 'flex', minHeight: '240px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '5%' }}>
        <Text weight="strong">{'SubInfo'}</Text><br />
        {
          <Dropdown options={subInfoItems} placeholder={'Select'} />
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '5%' }}>
        <Text weight="strong">{'Icon'}</Text><br />
        {
          <Dropdown options={iconItems} placeholder={'Select'} />
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text weight="strong">{'Checkboxes'}</Text><br />
        {
          <Dropdown options={storyOptions.slice(0, 3)} checkboxes={true} placeholder={'Select'} />
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
