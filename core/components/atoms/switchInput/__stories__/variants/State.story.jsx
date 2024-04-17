import * as React from 'react';
import { Switch, Text } from '@/index';

// CSF format story
export const state = () => {
  return (
    <>
      <div className="d-flex mb-7 justify-content-between w-75">
        <Switch aria-label="Switch enabled" defaultChecked={true} />
        <Switch aria-label="Switch disabled" defaultChecked={true} disabled={true} />
        <Switch aria-label="Switch disabled" disabled={true} />
      </div>
      <div className="d-flex justify-content-between w-75">
        <Text weight="strong">Enabled</Text>
        <Text weight="strong">Enabled - Disabled</Text>
        <Text weight="strong">Disabled</Text>
      </div>
    </>
  );
};

export default {
  title: 'Components/Switch/Variants/State',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch',
        a11yProps: ` **aria-label:**<br/> - Add \`aria-label='Switch enabled'\` on switch with *Enabled* text to describe the action of switch.<br/> - Add \`aria-label='Switch disabled'\` on switch with *Disabled* text to describe the action of switch.`,
      },
    },
  },
};
