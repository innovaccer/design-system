import * as React from 'react';
import { action } from '@/utils/action';
import { EditableChipInput, Label } from '@/index';

// CSF format story

export const overflowBehavior = () => {
  const [value, setValue] = React.useState(['John', 'Eric', 'Martin', 'Joy']);

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
      <Label>Members</Label>
      <EditableChipInput {...options} />
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(["John","Eric","Martin", "Joy"]);

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
        <Label>Members</Label>
        <EditableChipInput
          {...options}
        />
      </div>
  );
}`;

export default {
  title: 'Components/Inline Editable Fields/EditableChipInput/Overflow Behavior',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
