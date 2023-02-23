import * as React from 'react';
import {
  BaseProps,
  // , extractBaseProps
} from '@/utils/types';
import classNames from 'classnames';
import { Divider, Icon } from '@/index';
import { SharedProp } from './Stack';
// import { StackProps } from './Stack';

type TagType = 'li' | 'div';
type DragEventType = React.DragEvent<HTMLLIElement> | React.DragEvent<HTMLDivElement>;

export interface StackItemProps extends BaseProps {
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
   * Unique ID to list item
   */
  id: string;
  /**
   * Set a custom element for Stack
   */
  tag: TagType;
  parentProps?: SharedProp;
}

const ListBoxItem = (props: StackItemProps) => {
  const defaultProps = {
    size: 'standard',
    showDivider: true,
    type: 'option',
    draggable: false,
  };

  const {
    children,
    className,
    disabled,
    selected,
    activated,
    disablePadding,
    parentProps = defaultProps,
    // nestedRow,
    // expanded,
    // id,
    // tag: Tag,
  } = props;

  const { size, type, draggable } = parentProps;

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

  return (
    <div role="link" data-test="DesignSystem-Stack-ItemWrapper" className={itemClass} tabIndex={0}>
      {draggable && (
        <div
          tabIndex={0}
          role="button"
          className="d-flex"
          // onMouseUp={() => setStartDrag(false)}
          // onMouseDown={() => setStartDrag(true)}
        >
          <Icon
            size={16}
            appearance="subtle"
            name="drag_indicator"
            className="Stack-item--drag-icon cursor-pointer"
            // onClick={onDragIconClick}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export const StackItem = (props: StackItemProps) => {
  const [startDrag, setStartDrag] = React.useState(false);

  const defaultProps = {
    size: 'standard',
    showDivider: true,
    type: 'option',
    draggable: false,
  };

  const { nestedRow, expanded, id, tag: Tag, parentProps = defaultProps } = props;

  const { showDivider, draggable } = parentProps;
  // const baseProps = extractBaseProps(props);

  const onDropHandler = (e: DragEventType, currIndex: string) => {
    const sourceIndex = e.dataTransfer?.getData('index');
    const sourceItem = sourceIndex && document.getElementById(sourceIndex);
    const currItem = document.getElementById(currIndex);
    currItem && sourceItem && currItem.before(sourceItem);
    setStartDrag(false);
  };

  // const onDragIconClick = () => {
  //   console.log('on drag icon click');
  //   // e.stopPropagation();
  //   // e.preventDefault();
  //   setStartDrag(!startDrag);
  // };

  const onDragStartHandler = (e: DragEventType) => {
    console.log('on drag start');
    e.dataTransfer.setData('index', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <Tag
      key={id}
      id={id}
      data-test="DesignSystem-Stack-Item"
      draggable={draggable && startDrag}
      // draggable={draggable}
      onDragStart={onDragStartHandler}
      onDragOver={(e: DragEventType) => e.preventDefault()}
      onDrop={(e: DragEventType) => onDropHandler(e, id)}
      // onMouseDown={(e) => setStartDrag(false)}
      // onMouseUp={(e) => setStartDrag(true)}
    >
      <ListBoxItem {...props} />
      {nestedRow && expanded && <div data-test="DesignSystem-Stack--Nested-Item">{nestedRow}</div>}
      {showDivider && <Divider />}
    </Tag>
  );
};

StackItem.displayName = 'StackItem';
StackItem.defaultProps = {
  tag: 'li',
};

export default StackItem;
