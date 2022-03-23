import * as React from 'react';
import Switch from '../../Switch';
import Text from '@/components/atoms/text';

// CSF format story
export const state = () => {
  return (
    <div className="d-flex">
      <div className="mr-9">
        <Switch aria-label="Switch enabled" defaultChecked={true} disabled={false} />
        <br />
        <Text weight="strong">Enabled</Text>
      </div>
      <div>
        <Switch aria-label="Switch disabled" disabled={true} defaultChecked={true} />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Switch/Variants/State',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch',
        a11yProps: ` 
        **aria-label:**
        <br/> 
        - Add \`aria-label='Switch enabled'\` on switch with *Enabled* text to describe the action of switch.
        <br/>
        - Add \`aria-label='Switch disabled'\` on switch with *Disabled* text to describe the action of switch.
        `,
      },
    },
  },
};
