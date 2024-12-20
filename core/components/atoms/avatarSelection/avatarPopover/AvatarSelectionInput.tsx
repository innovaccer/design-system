import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import { handleInputKeyDown } from './utils';
import { AvatarSelectionContext } from '../AvatarSelectionContext';
import styles from '@css/components/avatarSelection.module.css';
import classNames from 'classnames';

export const AvatarSelectionInput = (props: InputProps) => {
  const contextProp = React.useContext(AvatarSelectionContext);

  const { listRef, setFocusedOption, setOpenPopover, triggerRef } = contextProp;

  const inputClassName = classNames({
    'w-100': true,
    [styles['SelectionAvatar-input']]: true,
  });

  return (
    <div className={styles['SelectionAvatar-inputWrapper']}>
      <Input
        icon="search"
        onKeyDown={(event) => handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef)}
        className={inputClassName}
        data-test="DesignSystem-AvatarSelection--Input"
        {...props}
      />
    </div>
  );
};

export default AvatarSelectionInput;
