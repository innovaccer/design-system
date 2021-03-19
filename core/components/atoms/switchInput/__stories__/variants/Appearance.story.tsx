import * as React from 'react';
import Switch, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {

  const appearances: Appearance[] = ['primary', 'alert', 'success', 'warning'];

  return (
    <div className="d-flex">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} className="mr-9">
              <Switch
                defaultChecked={true}
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

export default {
  title: 'Components/Switch/Variants',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        title: 'Switch'
      }
    }
  }
};
