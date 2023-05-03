import * as React from 'react';
import Label from '../index';

// CSF format story
export const all = () => {
  const disabled = false;
  const required = false;
  const optional = false;

  const options = {
    disabled,
    required,
    optional,
  };

  return <Label {...options}>Label</Label>;
};

export default {
  title: 'Typography/Label/All',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
