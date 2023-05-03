import * as React from 'react';
import { Text } from '@/index';

// CSF format story
export const all = () => {
  const weight = 'medium';
  const size = 'regular';
  const small = false;
  const appearance = 'white';
  const options = {
    size,
    weight,
    appearance,
    small,
  };

  return (
    <div className={appearance === 'white' ? 'bg-dark' : 'bg-transparent'}>
      <Text {...options}>Text component have different varients, look for options in knobs tab.</Text>
    </div>
  );
};

export default {
  title: 'Typography/Text/All',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
