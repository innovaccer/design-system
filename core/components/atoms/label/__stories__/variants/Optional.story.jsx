import * as React from 'react';
import { Label } from '@/index';

// CSF format story
export const optional = () => {
  return <Label optional={true}>Label</Label>;
};

export default {
  title: 'Components/Label/Variants/Optional',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
