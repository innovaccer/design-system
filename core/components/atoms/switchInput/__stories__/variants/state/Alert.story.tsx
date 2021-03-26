import * as React from 'react';
import Switch from '../../../Switch';
import Text from '@/components/atoms/text';

// CSF format story
export const alert = () => {

  return (
    <div className="d-flex">
      <div className="mr-9">
        <Switch
          defaultChecked={true}
          disabled={false}
          appearance="alert"
        />
        <br />
        <Text weight="strong">Enabled</Text>
      </div>
      <div>
        <Switch
          disabled={true}
          defaultChecked={true}
          appearance="alert"
        />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
    </div >
  );
};

export default {
  title: 'Components/Switch/Variants/State/Alert',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
