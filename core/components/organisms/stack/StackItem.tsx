import * as React from 'react';
import {
  BaseProps,
  // , extractBaseProps
} from '@/utils/types';
import classNames from 'classnames';
import { Divider, Icon } from '@/index.type';

type StackType = 'option' | 'description' | 'resource';
type StackSize = 'standard' | 'compressed' | 'tight';

export interface StackItemProps extends BaseProps {
  /**
   * List size
   */
  size: StackSize;
  /**
   * Type of List
   */
  type: StackType;
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * Element to be shown inside a nested list
   */
  nestedRow?: React.ReactNode;
  /**
   * Set `true` to show nested row
   */
  expanded?: boolean;
  /**
   * Add divider below all list item
   */
  showDivider: boolean;
  /**
   * Disables the list item
   */
  disabled?: boolean;
  /**
   * Shows list item in selected state <br />
   * (works in case of **option** list only)
   */
  selected?: boolean;
  /**
   * Shows list item in activated state <br />
   * (works in case of **resource** list only)
   */
  activated?: boolean;
  /**
   * Set `true` to remove default padding of list item
   */
  disablePadding?: boolean;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
  /**
   * Unique ID to list item
   */
  id: string;
}

export const StackItem = (props: StackItemProps) => {
  const {
    children,
    className,
    size,
    showDivider,
    disabled,
    selected,
    activated,
    nestedRow,
    disablePadding,
    expanded,
    type,
    id,
    draggable,
  } = props;

  // const baseProps = extractBaseProps(props);

  const itemClass = classNames(
    {
      ['px-6']: !disablePadding,
      'Stack-item--disabled': disabled,
      'Stack-item': type !== 'description',
      'Stack-item--selected': selected && type === 'option',
      'Stack-item--activated': activated && type === 'resource',
      ['py-3']: size === 'tight' && !disablePadding,
      ['py-5']: size === 'standard' && !disablePadding,
      ['py-4']: size === 'compressed' && !disablePadding,
    },
    className
  );

  const onDropHandler = (e: React.DragEvent<HTMLLIElement>, currIndex: string) => {
    const sourceIndex = e.dataTransfer?.getData('index');
    const sourceItem = sourceIndex && document.getElementById(sourceIndex);
    const currItem = document.getElementById(currIndex);
    currItem && sourceItem && currItem.before(sourceItem);
  };

  return (
    <li
      data-test="DesignSystem-Stack-Item"
      key={id}
      id={id}
      draggable={draggable}
      onDragStart={(e) => {
        e.dataTransfer.setData('index', id);
        e.dataTransfer.effectAllowed = 'move';
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDropHandler(e, id)}
    >
      <div
        className={itemClass}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {draggable && (
          <div>
            <Icon name="drag_indicator" size={16} />
          </div>
        )}
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
  type: 'option',
  draggable: false,
};

export default StackItem;
