import * as React from 'react';
import Switch from '../index';

// CSF format story
export const tiny = () => (
  <Switch
    defaultChecked={false}
    size="tiny"
    appearance="primary"
  />
);

export default {
  title: 'Atoms|Switch',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
