import * as React from 'react';
import Switch from '../index';

// CSF format story
export const offState = () => <Switch aria-label="Off State Switch" defaultChecked={false} size="regular" />;

export default {
  title: 'Components/Switch/Off State',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Off State Switch'\` to describe the action of switch.
         `,
      },
    },
  },
};
