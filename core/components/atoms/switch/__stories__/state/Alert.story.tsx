import * as React from 'react';
import Switch from '../../Switch';
import Text from '@/components/atoms/text';

// CSF format story
export const alert = () => {

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '5%' }}>
        <Switch
          checked={true}
          disabled={false}
          appearance="alert"
        />
        <br />
        <Text weight="strong">Enabled</Text>
      </div>
      <div>
        <Switch
          disabled={true}
          checked={true}
          appearance="alert"
        />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
    </div >
  );
};

export default {
  title: 'Atoms|Switch/State',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
