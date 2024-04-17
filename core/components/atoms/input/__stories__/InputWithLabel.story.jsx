import * as React from 'react';
import { Input, Label } from '@/index';

export const inputWithLabel = () => {
  const [value, setValue] = React.useState('lawsonjoy@gmail.com');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <Label htmlFor="email" withInput={true}>
        Email
      </Label>
      <Input id="email" placeholder="Email" className="w-25" value={value} onChange={onChange} />
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
      <Label 
        withInput={true}
        htmlFor="email"
      >
        Email
      </Label>
      <Input
        name="input"
        className="w-25"
        value={value}
        onChange={onChange}
        placeholder="Email"
      />
    </>
  );
}`;

export default {
  title: 'Components/Input/Input/Input With Label',
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
