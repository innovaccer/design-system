import * as React from 'react';
import { Label } from '@/index';

// CSF format story
export const state = () => {
  return (
    <div className="d-flex">
      <Label className="mr-5">Enabled Label</Label>
      <Label disabled={true}>Disabled Label</Label>
    </div>
  );
};

export default {
  title: 'Components/Label/Variants/State',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
