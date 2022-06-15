import * as React from 'react';
import { Input } from '@/index';

export const basicInput = () => {
  const [value, setValue] = React.useState('Joy Lawson');

  //To select the value passed in input field
  const handleClick = (e) => {
    e.target.select();
  };
  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClear = React.useCallback(() => {
    setValue('');
  }, []);

  return <Input placeholder="Name" name="input" className="w-25" value={value} onClick={handleClick} onChange={onChange} onClear={onClear} />;
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
    />
  );
}`;

export default {
  title: 'Components/Input/Basic Input',
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
