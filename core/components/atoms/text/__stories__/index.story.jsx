import * as React from 'react';
import { Text } from '@/index';

// CSF format story
export const all = () => {
  return <Text>Text component have different variants, look for options in knobs tab.</Text>;
};

export default {
  title: 'Components/Typography/Text/All',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
