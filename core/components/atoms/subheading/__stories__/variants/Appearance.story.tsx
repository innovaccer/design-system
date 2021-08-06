import * as React from 'react';
import Subheading, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = ['default', 'subtle', 'disabled', 'white'];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-6">
            <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
              <Subheading appearance={appear}>Subheading</Subheading>
            </div>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Subheading/Variants/Appearance',
  component: Subheading,
  parameters: {
    docs: {
      docPage: {
        title: 'Subheading',
      },
    },
  },
};
