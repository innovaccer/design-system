import * as React from 'react';
import { Input } from '@/index';

export const basicInput = () => {
  const [value, setValue] = React.useState('Joy Lawson');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClear = React.useCallback(() => {
    setValue('');
  }, []);

  return (
    <Input
      placeholder="Name"
      name="input"
      className="w-25"
      value={value}
      onChange={onChange}
      onClear={onClear}
      aria-label="Name"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState('Joy Lawson');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClear = React.useCallback(() => {
    setValue('');
  }, []);

  return (
    <Input
      placeholder="Name"
      name="input"
      className="w-25"
      value={value}
      onChange={onChange}
      onClear={onClear}
      aria-label="Name"
    />
  );
}`;

export default {
  title: 'Components/Input/Input/Basic Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
