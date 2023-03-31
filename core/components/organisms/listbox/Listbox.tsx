import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import classNames from 'classnames';
import { DraggableList } from './ReorderList';
import { onKeyDown } from './utils';

type ListboxType = 'option' | 'description' | 'resource';
type ListboxSize = 'standard' | 'compressed' | 'tight';
export type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface SharedProp {
  /**
   * List size
   */
  size: ListboxSize;
  /**
   * Type of List
   */
  type: ListboxType;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
  /**
   * Add divider below all list item
   */
  showDivider?: boolean;
  /**
   * Set as `true` if list item is last element
   */
  isLastItem?: boolean;
  /**
   * Set unique id to the list item element
   */
  uniqueID?: number;
}

export interface ListboxProps extends BaseProps {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * List size
   */
  size: ListboxSize;
  /**
   * Type of List
   */
  type: ListboxType;
  /**
   * Allows list item re-ordering
   */
  draggable?: boolean;
  /**
   * Set a custom element for Listbox
   */
  tag: TagType;
  /**
   * Add divider below all list item
   */
  showDivider: boolean;
}

export const Listbox = (props: ListboxProps) => {
  const { children, className, draggable, tag: Tag } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Listbox: true,
    },
    className
  );

  const renderChildren = React.Children.toArray(children).map((child: any, key: number) => {
    const element = React.cloneElement(child, {
      parentProps: { ...props, isLastItem: false, uniqueID: key },
    });
    return element;
  });

  if (renderChildren.length > 0) {
    renderChildren[renderChildren.length - 1].props.parentProps.isLastItem = true;
  }

  return (
    <>
      {draggable ? (
        <DraggableList {...props} />
      ) : (
        <Tag
          data-test="DesignSystem-Listbox"
          {...baseProps}
          className={classes}
          onKeyDown={(e: React.KeyboardEvent) => onKeyDown(e, renderChildren.length)}
        >
          {renderChildren}
        </Tag>
      )}
    </>
  );
};

Listbox.displayName = 'Listbox';

Listbox.defaultProps = {
  tag: 'ul',
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true,
};

export default Listbox;
