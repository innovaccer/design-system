import * as React from 'react';
import { ChipInput, Label } from '@/index';

export const chipsWrappedToNextLine = () => {
  const [value, setValue] = React.useState(
    ['Anyone', 'Person with disability', 'Retired person from the armed forces']
  );

  return (
    <div style={{ width: '320px' }}>
      <Label withInput={true}>Population Focus</Label>
      <ChipInput
        value={value}
        chipOptions={{ clearButton: true }}
        onChange={setValue}
      />
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(
    ['Anyone', 'Person with disability', 'Retired person from the armed forces']
  );

  return (
    <div style={{ width: '320px' }}>
      <Label withInput={true}>Population Focus</Label>
      <ChipInput
        value={value}
        chipOptions={{ clearButton: true }}
        onChange={setValue}
      />
    </div>
  );
}`;

export default {
  title: 'Components/ChipInput/Chips Wrapped To Next Line',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
