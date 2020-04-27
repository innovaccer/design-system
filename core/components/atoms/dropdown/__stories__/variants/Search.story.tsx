import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

// CSF format story
export const search = () => {
  return (
    <div style={{ display: 'flex', minHeight: '300px' }}>
      <div style={{ marginRight: '5%' }}>
        <Text weight="strong">{'Search'}</Text><br /><br />
        <Dropdown search={true} placeholder={'Select'} options={storyOptions} />
      </div>
      <div style={{ marginRight: '5%' }}>
        <Text weight="strong">{'Loading'}</Text><br /><br />
        <Dropdown search={true} placeholder={'Select'} options={storyOptions} loadingOptions={true}/>
      </div>
      <div>
        <Text weight="strong">{'No Result'}</Text><br /><br />
        <Dropdown search={true} placeholder={'Select'} options={[]} searchResultMessage={'No Result Found'}/>
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
