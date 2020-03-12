import * as React from 'react';
import Switch from '../../Switch';
import Text from '@/components/atoms/text';

// CSF format story
export const primary = () => {

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '5%' }}>
        <Switch
          checked={true}
          disabled={false}
        />
        <br />
        <Text weight="strong">Enabled</Text>
      </div>
      <div>
        <Switch
          disabled={true}
          checked={true}
        />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
    </div >
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Switch/State' };
