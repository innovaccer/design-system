import * as React from 'react';
import { ChipInput, Label } from '@/index';

export const chipsInSingleLine = () => {
  const [value, setValue] = React.useState(['Anyone', 'Person with disability']);

  return (
    <>
      <Label withInput={true}>Population Focus</Label>
      <ChipInput value={value} chipOptions={{ clearButton: true }} className="w-50" onChange={setValue} />
    </>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(['Anyone', 'Person with disability']);

  return (
    <>
      <Label withInput={true}>Population Focus</Label>
      <ChipInput
        value={value}
        chipOptions={{ clearButton: true }}
        onChange={setValue}
      />
    </>
  );
}`;

export default {
  title: 'Components/Input/ChipInput/Chips In Single Line',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
