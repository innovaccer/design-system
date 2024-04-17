import * as React from 'react';
import { Subheading } from '@/index';

// CSF format story
export const all = () => {
  return <Subheading>Subheading component have different variants, look for options in knobs tab.</Subheading>;
};

export default {
  title: 'Components/Typography/Subheading/All',
  component: Subheading,
  parameters: {
    docs: {
      docPage: {
        title: 'Subheading',
      },
    },
  },
};
