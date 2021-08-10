import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { EditableInput } from '@/index';

// CSF format story
export const all = () => {
  const placeholder = text('Placeholder', 'First Name');
  const error = boolean('error', false);
  const errorMessage = text('Error Message', 'Error Message Description');

  const [value, setValue] = React.useState('');

  const size = select('size', ['regular', 'tiny'], 'regular');

  const onChange = (updatedValue: string) => {
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
    <div style={{ width: 'var(--spacing-9)' }}>
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
    <div style={{ width: 'var(--spacing-9)', height: 'var(--spacing-3)' }}>
      <EditableInput
        {...options}
      />
    </div>
  );
}`;

export default {
  title: 'Components/EditableInput/All',
  component: EditableInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
