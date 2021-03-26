import * as React from 'react';
import Switch from '../index';

// CSF format story
export const regular = () => (
  <Switch
    defaultChecked={false}
    size="regular"
    appearance="primary"
  />
);

export default {
  title: 'Components/Switch/Regular',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
