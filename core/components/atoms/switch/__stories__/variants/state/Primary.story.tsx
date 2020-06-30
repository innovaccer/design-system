import * as React from 'react';
import Switch from '../../../Switch';
import Text from '@/components/atoms/text';

// CSF format story
export const primary = () => {

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '5%' }}>
        <Switch
          defaultChecked={true}
          disabled={false}
        />
        <br />
        <Text weight="strong">Enabled</Text>
      </div>
      <div>
        <Switch
          disabled={true}
          defaultChecked={true}
        />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
    </div >
  );
};

export default {
  title: 'Atoms|Switch/Variants/State',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
