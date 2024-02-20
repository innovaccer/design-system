import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import { handleInputKeyDown } from './utils';
import { SelectionAvatarContext } from '../SelectionAvatarProvider';

export const SelectionAvatarInput = (props: InputProps) => {
  const { onChange, ...rest } = props;

  const contextProp = React.useContext(SelectionAvatarContext);

  const { listRef, setFocusedOption, setOpenPopover, triggerRef } = contextProp;

  return (
    <div className="SelectionAvatar-inputWrapper">
      <Input
        icon="search"
        onChange={onChange}
        onKeyDown={(event) => handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef)}
        className="w-100 SelectionAvatar-input"
        data-test="DesignSystem-SelectionAvatar--Input"
        {...rest}
      />
    </div>
  );
};

export default SelectionAvatarInput;
