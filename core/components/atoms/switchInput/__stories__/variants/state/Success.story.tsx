import * as React from 'react';
import Switch from '../../../Switch';
import Text from '@/components/atoms/text';

// CSF format story
export const success = () => {

  return (
    <div className="d-flex">
      <div className="mr-9">
        <Switch
          defaultChecked={true}
          disabled={false}
          appearance="success"
        />
        <br />
        <Text weight="strong">Enabled</Text>
      </div>
      <div>
        <Switch
          disabled={true}
          defaultChecked={true}
          appearance="success"
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
