import * as React from 'react';
import { ChipInput, Label } from '@/index';

export const all = () => {
  const allowDuplicates = false;
  const placeholder = 'Add value';
  const disabled = false;
  const labelId = 'chip-input-label';

  return (
    <>
      <Label withInput={true} className="mb-3" id={labelId}>
        Tags
      </Label>
      <ChipInput
        allowDuplicates={allowDuplicates}
        placeholder={placeholder}
        disabled={disabled}
        chipOptions={{ clearButton: true, role: 'option' }}
        aria-labelledby={labelId}
      />
    </>
  );
};

export default {
  title: 'Components/Input/ChipInput/All',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        a11yProps: `Use \`Label\` with \`aria-label\` for the ChipInput. Icon-only clear buttons need \`aria-label\`.`,
      },
    },
  },
};
