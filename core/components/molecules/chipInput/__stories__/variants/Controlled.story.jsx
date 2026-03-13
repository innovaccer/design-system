import * as React from 'react';
import { ChipInput } from '@/index';

export const controlled = () => {
  const [value, setValue] = React.useState(['1024', '80']);

  return (
    <ChipInput
      value={value}
      placeholder="Add value"
      chipOptions={{ clearButton: true, role: 'option' }}
      onChange={setValue}
      aria-label="Add value"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(['1024', '80']);

  return (
    <ChipInput
      value={value}
      placeholder="Add value"
      chipOptions={{ clearButton: true, role: 'option' }}
      onChange={setValue}
      aria-label="Add value"
    />
  );
}`;

export default {
  title: 'Components/Input/ChipInput/Variants/Controlled',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
