import * as React from 'react';
import { EditableInput } from '@/index';
import './style.css';

// CSF format story
export const error = () => {
  const [value, setValue] = React.useState('');

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };

  return (
    <div className="EditableInput-wrapper--error">
      <EditableInput
        placeholder="First Name"
        value={value}
        onChange={onChange}
        error={true}
        errorMessage={'Error Message'}
      />
    </div>
  );
};

const customCode = `/*
// style.css
.EditableInput-wrapper--error {
  width: var(--spacing-640);
}

*/
() => {
  const [value, setValue] = React.useState('');

  const onChange = (value) => {
    setValue(value);
  }

  return (
    <div className='EditableInput-wrapper--error'>
      <EditableInput
        placeholder="First Name"
        value={value}
        onChange={onChange}
        error={true}
        errorMessage={'Error Message'}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Inline Editable Fields/EditableInput/Variants/Error',
  component: EditableInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
