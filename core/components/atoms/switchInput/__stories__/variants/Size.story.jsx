import * as React from 'react';
import { Switch, Text } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular'];

  return (
    <>
      <div className="d-flex mb-7">
        {sizes.map((switchSize, ind) => {
          return (
            <Switch
              key={ind}
              aria-label={`Switch ${switchSize}`}
              defaultChecked={true}
              size={switchSize}
              className="mr-9"
            />
          );
        })}
      </div>
      <div className="d-flex">
        {sizes.map((switchSize, ind) => {
          return (
            <Text key={ind} weight="strong" className="mr-9">
              {switchSize.charAt(0).toUpperCase() + switchSize.slice(1)}
            </Text>
          );
        })}
      </div>
    </>
  );
};

export default {
  title: 'Components/Switch/Variants/Size',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch',
        a11yProps: ` **aria-label:** <br/> - Add \`aria-label='Switch tiny'\` on switch with *Tiny* text to describe the action of switch. <br/> - Add \`aria-label='Switch regular'\` on switch with *regular* text to describe the action of switch.`,
      },
    },
  },
};
