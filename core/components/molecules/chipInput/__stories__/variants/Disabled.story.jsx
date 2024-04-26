import * as React from 'react';
import { ChipInput } from '@/index';

export const disabled = () => {
  const [value, setValue] = React.useState(['1024', '80']);

  return <ChipInput value={value} chipOptions={{ clearButton: true }} onChange={setValue} disabled={true} />;
};

const customCode = `() => {
  const [value, setValue] = React.useState(['1024', '80']);

  return (
    <ChipInput
      value={value}
      chipOptions={{ clearButton: true }}
      onChange={setValue}
      disabled={true}
    />
  );
}`;

export default {
  title: 'Components/Input/ChipInput/Variants/Disabled',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
