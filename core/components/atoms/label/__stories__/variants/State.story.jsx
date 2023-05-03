import * as React from 'react';
import Label from '../../index';

// CSF format story
export const state = () => {
  return (
    <div className="d-flex">
      <div className="mr-5">
        <Label>Enabled Label</Label>
      </div>
      <div>
        <Label disabled={true}>Disabled Label</Label>
      </div>
    </div>
  );
};

export default {
  title: 'Typography/Label/Variants/State',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
