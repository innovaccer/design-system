import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import styles from '@css/components/avatarGroup.module.css';
import classNames from 'classnames';

export const AvatarGroupInput = (props: InputProps) => {
  const inputClassName = classNames({
    'w-100': true,
    [styles['AvatarGroup-input']]: true,
  });

  return (
    <div className={styles['AvatarGroup-inputWrapper']}>
      <Input icon="search" className={inputClassName} data-test="DesignSystem-AvatarGroup--Input" {...props} />
    </div>
  );
};

export default AvatarGroupInput;
