import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Divider } from '@/index';
import { ListboxContext } from '../Listbox';
import { ListBody } from './ListBody';
import { NestedList } from '../nestedList';
import { onKeyDown as listboxKeyDownHandler } from '../utils';
import classNames from 'classnames';
import styles from '@css/components/listbox.module.css';

export type ItemTagType = 'li' | 'div' | 'a';

export interface ListboxItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement | HTMLAnchorElement> {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * Element to be shown inside a nested list
   */
  nestedBody?: React.ReactNode;
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
   * Unique ID to list item
   */
  id?: string;
  /**
   * Value for particular list item
   */
  value?: any;
  /**
   * Set a custom element for Listbox
   */
  tagName?: ItemTagType;
  /**
   * Handler to be called when `ListboxItem` is clicked
   */
  onClick?: (e: React.MouseEvent, id?: string, value?: string) => void;
  /**
   * Specify tabIndex to list item
   */
  tabIndex?: number;
}

export const ListboxItem = (props: ListboxItemProps) => {
  const { nestedBody, expanded, id, onClick, value, tagName: Tag = 'li', tabIndex, onKeyDown, ...rest } = props;

  const contextProp = React.useContext(ListboxContext);
  const { showDivider, draggable, suppressKeyboard } = contextProp;

  const onClickHandler = (e: React.MouseEvent) => {
    onClick && onClick(e, id, value);
  };

  const tagClass = classNames({
    [styles['Listbox-item-wrapper']]: !draggable,
  });

  // Use provided onKeyDown if available, otherwise use listbox default (unless suppressKeyboard is true)
  const keyDownHandler = onKeyDown || (!suppressKeyboard ? listboxKeyDownHandler : undefined);

  return (
    <Tag
      id={id}
      data-test="DesignSystem-Listbox-Item"
      {...rest}
      onClick={onClickHandler}
      data-value={value}
      className={tagClass}
      // Note: tabIndex must remain on outer Tag for Select/Menu Tab navigation to work correctly.
      // Moving to inner div breaks Tab-to-footer and focus trap detection.
      // Defaults to 0 for keyboard accessibility in standalone Listbox usage.
      // Select/Menu pass explicit 0 or -1 for roving tabindex pattern.
      tabIndex={tabIndex ?? 0}
      onKeyDown={keyDownHandler}
    >
      <ListBody {...props} />
      {nestedBody && <NestedList expanded={expanded} nestedBody={nestedBody} />}
      {showDivider && <Divider className={styles['Listbox-divider']} />}
    </Tag>
  );
};

ListboxItem.displayName = 'Listbox.Item';
ListboxItem.defaultProps = {
  tagName: 'li',
};

export default ListboxItem;
