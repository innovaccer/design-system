import * as React from 'react';
import { EditableInput } from '@/index';

// CSF format story
export const all = () => {
  const placeholder = 'First Name';
  const error = false;
  const errorMessage = 'Error Message Description';

  const [value, setValue] = React.useState('');

  const size = 'regular';

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };

  const options = {
    placeholder,
    errorMessage,
    onChange,
    error,
    size,
    value,
  };

  return (
    <div className="vw-25">
      <EditableInput {...options} />
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState('');

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };

  const options = {
    placeholder: 'First Name',
    onChange,
    value,
  };

  return (
    <div className="vw-25">
      <EditableInput
        {...options}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Inline Editable Fields/EditableInput/All',
  component: EditableInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
