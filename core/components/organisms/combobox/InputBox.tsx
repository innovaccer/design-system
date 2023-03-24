import React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';

export const InputBox = (props: InputProps) => {
  const { value, onChange } = props;

  const onChangeHandler = (e: any) => {
    onChange && onChange(e.target.value);
  };

  return <Input value={value} {...props} onChange={onChangeHandler} />;
};
