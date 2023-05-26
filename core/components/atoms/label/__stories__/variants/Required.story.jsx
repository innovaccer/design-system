import * as React from 'react';
import { Label } from '@/index';

// CSF format story
export const required = () => {
  return <Label required={true}>Required Label</Label>;
};

export default {
  title: 'Components/Label/Variants/Required',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
