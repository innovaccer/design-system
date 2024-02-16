import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';

export const SelectionAvatarInput = (props: InputProps) => {
  const { onChange, ...rest } = props;

  return (
    <div className="SelectionAvatar-inputWrapper">
      <Input
        icon="search"
        // minWidth="176px"
        onChange={onChange}
        className="w-100 SelectionAvatar-input"
        data-test="DesignSystem-SelectionAvatarInput"
        {...rest}
      />
    </div>
  );
};

export default SelectionAvatarInput;
