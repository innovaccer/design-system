import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Label from '../index';

// CSF format story
export const all = () => {
  const disabled = boolean('disabled', false);
  const options = {
    disabled,
  };

  return (
    <Label {...options}>
      Label
    </Label>
  );
};

export default {
  title: 'Atoms|Typography/Label',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label'
      }
    }
  }
};
