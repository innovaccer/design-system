import * as React from 'react';
import { Paragraph } from '@/index';

// CSF format story
export const all = () => {
  return <Paragraph>Paragraph component have different variants, look for options in knobs tab.</Paragraph>;
};

export default {
  title: 'Components/Typography/Paragraph/All',
  component: Paragraph,
  parameters: {
    docs: {
      docPage: {
        title: 'Paragraph',
      },
    },
  },
};
