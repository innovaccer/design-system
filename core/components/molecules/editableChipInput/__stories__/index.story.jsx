import * as React from 'react';
import { action } from '@/utils/action';
import { EditableChipInput } from '@/index';

// CSF format story

export const all = () => {
  const [value, setValue] = React.useState();

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };
  const onClick = (item) => action(`onClick: ${item}`);

  const placeholder = 'Add Value';
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-440)',
  };
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
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-440)',
  };
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
  title: 'Components/Inline Editable Fields/EditableChipInput/All',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
