import * as React from 'react';
import Heading from '../index';

// CSF format story
export const all = () => {
  const appearance = 'white';
  const size = 'xxl';

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Heading appearance={appearance} size={size}>
        Heading component have different varients, look for options in knobs tab.
      </Heading>
    </div>
  );
};

export default {
  title: 'Components/Heading/All',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};
