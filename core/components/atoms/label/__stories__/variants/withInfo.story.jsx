import * as React from 'react';
import { Label } from '@/index';

// CSF format story
export const withInfo = () => {
  return <Label info="Sample Info">Label</Label>;
};

export default {
  title: 'Components/Label/Variants/With Info',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
