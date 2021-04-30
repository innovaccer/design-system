import * as React from 'react';
import Switch from '../index';

// CSF format story
export const defaultSwitch = () => (
  <Switch
    defaultChecked={true}
    size="regular"
  />
);

export default {
  title: 'Components/Switch/Default Switch',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
