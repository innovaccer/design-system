import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { Divider } from '@/index';
import { SharedProp } from '../Listbox';
import { ListBody } from './ListBody';
import { NestedList } from '../NestedList';

export type ItemTagType = 'li' | 'div';

export interface ListboxItemProps extends BaseProps {
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
   * Set a custom element for Listbox
   */
  tag: ItemTagType;
  /**
   * Handler to be called when `ListboxItem` is clicked
   */
  onClick?: (e: React.MouseEvent, id: string) => void;
  parentProps?: SharedProp;
}

export const ListboxItem = (props: ListboxItemProps) => {
  const defaultProps = {
    showDivider: true,
    isLastItem: false,
  };
  const { nestedRow, expanded, id, onClick, parentProps = defaultProps, tag: Tag } = props;

  const { showDivider, isLastItem } = parentProps;

  const onClickHandler = (e: React.MouseEvent) => {
    onClick && onClick(e, id);
  };

  return (
    <Tag id={id} key={id} data-test="DesignSystem-Listbox-Item" onClick={onClickHandler}>
      <ListBody {...props} />
      {nestedRow && <NestedList expanded={expanded} nestedRow={nestedRow} id={id} />}
      {showDivider && !isLastItem && <Divider />}
    </Tag>
  );
};

ListboxItem.displayName = 'ListboxItem';
ListboxItem.defaultProps = {
  tag: 'li',
};

export default ListboxItem;
