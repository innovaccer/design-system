import * as React from 'react';
import Heading, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {

  const appearances: Appearance[] = ['default', 'subtle', 'disabled', 'white'];
  return (
    <div className="Row">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} className="mr-7">
              <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
                <Heading appearance={appear}>
                  Heading
                </Heading>
              </div>
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
  title: 'Atoms|Typography/Heading/Variants',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading'
      }
    }
  }
};
