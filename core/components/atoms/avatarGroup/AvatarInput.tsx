import * as React from 'react';
import { Input, Icon } from '@/index';
import { InputProps } from '@/index.type';
import styles from '@css/components/avatarGroup.module.css';
import classNames from 'classnames';

export const AvatarGroupInput = (props: InputProps) => {
  const { onClear, value, ...rest } = props;
  const inputClassName = classNames({
    'w-100': true,
    [styles['AvatarGroup-input']]: true,
  });

  const clearIcon =
    onClear && value ? (
      <button
        type="button"
        tabIndex={0}
        aria-label="Clear search"
        className="d-flex align-items-center justify-content-center bg-transparent border-0 cursor-pointer px-3"
        onClick={onClear as any}
      >
        <Icon name="close" size={16} />
      </button>
    ) : undefined;

  return (
    <div className={styles['AvatarGroup-inputWrapper']}>
      <Input
        icon="search"
        className={inputClassName}
        data-test="DesignSystem-AvatarGroup--Input"
        value={value}
        actionIcon={clearIcon}
        {...rest}
      />
    </div>
  );
};

export default AvatarGroupInput;
