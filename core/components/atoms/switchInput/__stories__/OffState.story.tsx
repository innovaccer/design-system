import * as React from 'react';
import Switch from '../index';

// CSF format story
export const offState = () => (
  <Switch
    defaultChecked={false}
    size="regular"
  />
);

export default {
  title: 'Components/Switch/Off State',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
