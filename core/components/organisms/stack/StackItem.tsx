import * as React from 'react';
import {
  BaseProps,
  // , extractBaseProps
} from '@/utils/types';
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
  nestedRow?: React.ReactNode;
  disablePadding?: boolean;
  expanded?: boolean;
}

export const StackItem = (props: StackItemProps) => {
  const { children, className, size, showDivider, disabled, selected, activated, nestedRow, disablePadding, expanded } =
    props;

  // const baseProps = extractBaseProps(props);

  const itemClass = classNames(
    {
      'Stack-item': true,
      'Stack-item--disabled': disabled,
      'Stack-item--selected': selected || activated,
      ['px-6']: !disablePadding,
      ['py-3']: size === 'tight' && !disablePadding,
      ['py-5']: size === 'standard' && !disablePadding,
      ['py-4']: size === 'compressed' && !disablePadding,
    },
    className
  );

  return (
    <li
      data-test="DesignSystem-Stack-Item"
      // {...baseProps}
    >
      <div
        className={itemClass}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {children}
      </div>
      {nestedRow && expanded && <div>{nestedRow}</div>}
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
