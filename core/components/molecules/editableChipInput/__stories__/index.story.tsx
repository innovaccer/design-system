import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { EditableChipInput } from '@/index';

// CSF format story

export const all = () => {
  const [value, setValue] = React.useState<string[]>();

  const onChange = (updatedValue: string[]) => {
    setValue(updatedValue);
  };
  const onClick = (item: any) => action(`onClick: ${item}`);

  const placeholder = text('Placeholder', 'Add Value');
  const chipOptions = { onClick, clearButton: true };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates: false,
    defaultValue: [],
    autoFocus: true,
  };

  const options = {
    placeholder,
    value,
    onChange,
    chipInputOptions,
  };
  return (
    <div className="w-25">
      <EditableChipInput {...options} />
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState();

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };
  const onClick = (item) =>  console.log(item);

  const placeholder ='Add Value';
  const chipOptions = { onClick, clearButton:true };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates:false,
    defaultValue:[],
    autoFocus:true
  };

  const options = {
    placeholder,
    value,
    onChange,
    chipInputOptions
  };
  return (
      <div className="w-25">
        <EditableChipInput
          {...options}
        />
      </div>
  );
}`;

export default {
  title: 'Components/EditableChipInput/All',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
