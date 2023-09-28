import * as React from 'react';
import { action } from '@/utils/action';
import { EditableChipInput } from '@/index';

// CSF format story

export const Error = () => {
  const [value, setValue] = React.useState(['Error']);

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };
  const onClick = (item) => action(`onClick: ${item}`);

  const placeholder = 'Add Value';
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
    error: true,
    errorMessage: 'Error message goes here.',
    chipInputOptions,
  };
  return (
    <div className="w-25">
      <EditableChipInput {...options} />
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(['Error']);

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
    error: true,
    errorMessage : "Error message goes here.",
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
  title: 'Inputs/EditableChipInput/Error',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
