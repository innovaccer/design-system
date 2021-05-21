import * as React from 'react';
import { ChipInput } from '@/index';
import { boolean, text } from '@storybook/addon-knobs';

export const all = () => {

  const allowDuplicates = boolean(
    'allowDuplicates',
    false
  );

  const placeholder = text(
    'placeholder',
    'Add value',
  );

  const disabled = boolean(
    'disabled',
    false
  );

  return (
    <ChipInput
      allowDuplicates={allowDuplicates}
      placeholder={placeholder}
      disabled={disabled}
      chipOptions={{ clearButton: true }}
    />
  );
};

export default {
  title: 'Components/ChipInput/All',
  component: ChipInput
};
