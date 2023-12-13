import React from 'react';
import { ChipInput } from '@/index';
import { ChipInputProps } from '@/index.type';

export const ChipInputBox = (props: ChipInputProps) => {
  const {
    value,
    // onChange
  } = props;

  // const onChangeHandler = (e: any) => {
  //   onChange && onChange(e.target.value);
  // };

  // return <Input value={value} {...props} onChange={onChangeHandler} />;
  return (
    <ChipInput
      {...props}
      // value={value}
    />
  );
};
