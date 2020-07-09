import * as React from 'react';
import Text, { Appearance } from '../../index';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled'];
  return (
    <div className="d-flex">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={{ background: appear === 'white' ? 'black' : 'transparent' }} className="mr-6">
              <Text appearance={appear}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|Typography/Text/Variants',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text'
      }
    }
  }
};
