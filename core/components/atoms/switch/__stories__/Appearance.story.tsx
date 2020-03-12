import * as React from 'react';
import Switch, { Appearance } from '../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {

  const appearances: Appearance[] = ['primary', 'alert', 'success', 'warning'];

  return (
    <div style={{ display: 'flex' }}>
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
              <Switch
                checked={true}
                appearance={appear}
              />
              <br />
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
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
