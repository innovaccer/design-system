import * as React from 'react';
import { EditableInput } from '@/index';

// CSF format story
export const error = () => {
  const [value, setValue] = React.useState('');

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };

  return (
    <div style={{ width: 'var(--spacing-9)' }}>
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

const customCode = `() => {
  const [value, setValue] = React.useState('');

  const onChange = (value) => {
    setValue(value);
  }

  return (
    <div style={{ width: 'var(--spacing-9)' }}>
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
  title: 'Components/EditableInput/Variants/Error',
  component: EditableInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
