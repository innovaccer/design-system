import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Divider } from '@/index';
import { ListboxContext } from '../Listbox';
import { ListBody } from './ListBody';
import { NestedList } from '../nestedList';
import { onKeyDown } from '../utils';
import classNames from 'classnames';
import styles from '@css/components/listbox.module.css';

export type ItemTagType = 'li' | 'div' | 'a';

export interface ListboxItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement | HTMLAnchorElement> {
  /**
   * Accessible name for the listbox item
   */
  'aria-label'?: string;
  /**
   * Associates listbox item with an external label
   */
  'aria-labelledby'?: string;
  /**
   * Accessible role for the listbox item
   */
  role?: string;
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
  const {
    nestedBody,
    expanded,
    id,
    onClick,
    value,
    tagName: Tag = 'li',
    tabIndex,
    onKeyDown: onKeyDownProp,
    ...rest
  } = props;

  const contextProp = React.useContext(ListboxContext);
  const { showDivider, draggable } = contextProp;

  const onClickHandler = (e: React.MouseEvent) => {
    onClick && onClick(e, id, value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    onKeyDownProp?.(e);
    if (!e.defaultPrevented) {
      onKeyDown(e);
    }
  };

  const tagClass = classNames({
    [styles['Listbox-item-wrapper']]: !draggable,
  });

  // Focus and keyboard must be on the element with role="option" (the Tag), not the inner ListBody
  const optionTabIndex = draggable ? -1 : tabIndex ?? 0;

  return (
    <Tag
      id={id}
      data-test="DesignSystem-Listbox-Item"
      {...rest}
      tabIndex={optionTabIndex}
      onClick={onClickHandler}
      onKeyDown={handleKeyDown}
      data-value={value}
      className={tagClass}
      role={props.role || 'option'}
      aria-selected={props.selected}
      aria-disabled={props.disabled}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
    >
      <ListBody {...props} tabIndex={-1} />
      {nestedBody && (
        <NestedList
          expanded={expanded}
          nestedBody={nestedBody}
          aria-label={props['aria-label'] ? `Nested list for ${props['aria-label']}` : undefined}
        />
      )}
      {showDivider && <Divider className={styles['Listbox-divider']} />}
    </Tag>
  );
};

ListboxItem.displayName = 'Listbox.Item';
ListboxItem.defaultProps = {
  tagName: 'li',
};

export default ListboxItem;
