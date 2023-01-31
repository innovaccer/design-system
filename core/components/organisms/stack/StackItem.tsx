import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import classNames from 'classnames';
import { Divider } from '@/index.type';

export interface StackItemProps extends BaseProps {
  gap?: number;
  disabled?: boolean;
  showDivider?: boolean;
  children: React.ReactNode;
  size: 'standard' | 'compressed' | 'tight';
}

export const StackItem = (props: StackItemProps) => {
  const { children, className, size, showDivider, disabled } = props;
  const baseProps = extractBaseProps(props);

  const listClass = classNames(
    {
      'Stack-item': true,
    },
    className
  );

  const itemClass = classNames({
    ['px-6']: true,
    ['py-3']: size === 'tight',
    ['py-5']: size === 'standard',
    ['py-4']: size === 'compressed',
    'Stack-item--disabled': disabled,
  });

  return (
    <li
      data-test="DesignSystem-Stack-Item"
      {...baseProps}
      className={listClass}
      // tabIndex={0}
    >
      <div className={itemClass}>{children}</div>
      {showDivider && <Divider />}
    </li>
  );
};

StackItem.displayName = 'StackItem';

StackItem.defaultProps = {
  size: 'standard',
  showDivider: true,
};

export default StackItem;
