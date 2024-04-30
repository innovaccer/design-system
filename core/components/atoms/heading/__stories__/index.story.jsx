import * as React from 'react';
import { Heading } from '@/index';

// CSF format story
export const all = () => {
  return <Heading>Heading component have different variants, look for options in knobs tab.</Heading>;
};

export default {
  title: 'Components/Typography/Heading/All',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};
