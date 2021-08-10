import * as React from 'react';
import Switch, { Size } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes: Size[] = ['tiny', 'regular', 'large'];

  return (
    <div className="d-flex">
      {sizes.map((SwitchSize, ind) => {
        return (
          <div key={ind} className="mr-9">
            <div className="h-50">
              <Switch defaultChecked={true} size={SwitchSize} />
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
      },
    },
  },
};
