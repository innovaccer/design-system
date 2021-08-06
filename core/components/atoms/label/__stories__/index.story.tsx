import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Label from '../index';

// CSF format story
export const all = () => {
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const optional = boolean('optional', false);

  const options = {
    disabled,
    required,
    optional,
  };

  return <Label {...options}>Label</Label>;
};

export default {
  title: 'Components/Label/All',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
