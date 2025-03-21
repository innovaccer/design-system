import * as React from 'react';
import { ChipInput, Label } from '@/index';

export const chipValidation = () => {
  const allowDuplicates = false;
  const placeholder = 'Enter Email Address';
  const disabled = false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <>
      <Label withInput={true}>Send to:</Label>
      <ChipInput
        allowDuplicates={allowDuplicates}
        placeholder={placeholder}
        disabled={disabled}
        chipOptions={{ clearButton: true }}
        chipValidator={(chipValue) => emailRegex.test(chipValue)}
      />
    </>
  );
};

const customCode = `() => {
  const allowDuplicates = false;
  const placeholder = 'Enter Email Address';
  const disabled = false;

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  return (
    <>
      <Label withInput={true}>Send to:</Label>
      <ChipInput
        allowDuplicates={allowDuplicates}
        placeholder={placeholder}
        disabled={disabled}
        chipOptions={{ clearButton: true }}
        chipValidator={(chipValue) => emailRegex.test(chipValue)}
      />
    </>
  );
}`;

export default {
  title: 'Components/Input/ChipInput/Chip Validation',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
