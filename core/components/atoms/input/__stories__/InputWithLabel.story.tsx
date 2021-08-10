import * as React from 'react';
import { Input, Label } from '@/index';

export const inputWithLabel = () => {
  const [value, setValue] = React.useState('lawsonjoy@gmail.com');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <Label withInput={true}>Email</Label>
      <Input name="input" className="w-25" value={value} onChange={onChange} />
    </>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState('lawsonjoy@gmail.com');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value)
  }, []);

  return (
    <>
      <Label withInput={true}>Email</Label>
      <Input
        name="input"
        className="w-25"
        value={value}
        onChange={onChange}
      />
    </>
  );
}`;

export default {
  title: 'Components/Input/Input With Label',
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
