import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import { handleInputKeyDown } from './utils';
import { AvatarSelectionContext } from '../AvatarSelectionContext';

export const AvatarSelectionInput = (props: InputProps) => {
  const contextProp = React.useContext(AvatarSelectionContext);

  const { listRef, setFocusedOption, setOpenPopover, triggerRef } = contextProp;

  return (
    <div className="SelectionAvatar-inputWrapper">
      <Input
        icon="search"
        onKeyDown={(event) => handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef)}
        className="w-100 SelectionAvatar-input"
        data-test="DesignSystem-AvatarSelection--Input"
        {...props}
      />
    </div>
  );
};

export default AvatarSelectionInput;
