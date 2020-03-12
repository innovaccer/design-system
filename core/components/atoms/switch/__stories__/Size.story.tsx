import * as React from 'react';
import Switch, { Size } from '../index';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {

  const sizes: Size[] = ['tiny', 'regular', 'large'];

  return (
    <div style={{ display: 'flex' }}>
      {
        sizes.map((SwitchSize, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
              <div style={{ height: '32px' }}>
                <Switch
                  checked={true}
                  size={SwitchSize}
                />
              </div>
              <br />
              <Text weight="strong">{SwitchSize.charAt(0).toUpperCase() + SwitchSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Switch' };
