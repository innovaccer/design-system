import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import classNames from 'classnames';
import { Divider } from '@/index.type';

export interface StackItemProps extends BaseProps {
  size: 'standard' | 'compressed' | 'tight';
  gap?: number;
  showDivider: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  activated?: boolean;
}

export const StackItem = (props: StackItemProps) => {
  const { children, className, size, showDivider, disabled, selected, activated } = props;
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
    'Stack-item--selected': selected || activated,
  });

  return (
    <li
      data-test="DesignSystem-Stack-Item"
      {...baseProps}
      className={listClass}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
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
