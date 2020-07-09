import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Icon, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = [
    'destructive',
    'white',
    'subtle',
    'disabled',
    'info',
    'alert',
    'warning',
    'success'
  ];

  const name = text('Name', 'events');
  return (
    <div className="d-flex">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} className="mr-9">
              <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
                <Icon
                  appearance={appear}
                  size={50}
                  name={name}
                />
              </div >
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
  title: 'Atoms|Icon/Variants',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        title: 'Icon'
      }
    }
  }
};
