import * as React from 'react';
import Switch from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular', 'large'];

  return (
    <div className="d-flex">
      {sizes.map((SwitchSize, ind) => {
        return (
          <div key={ind} className="mr-9">
            <div className="h-50">
              <Switch aria-label={`Switch ${SwitchSize}`} defaultChecked={true} size={SwitchSize} />
            </div>
            <br />
            <Text weight="strong">{SwitchSize.charAt(0).toUpperCase() + SwitchSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Switch/Variants/Size',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch',
        a11yProps: ` **aria-label:** <br/> 
        - Add \`aria-label='Switch tiny'\` on switch with *Tiny* text to describe the action of switch.
        <br/>
        - Add \`aria-label='Switch regular'\` on switch with *regular* text to describe the action of switch.
        <br/>
        - Add \`aria-label='Switch large'\` on switch with *Large* text to describe the action of switch.`,
      },
    },
  },
};
