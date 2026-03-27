import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Divider } from '@/index';
import { ListboxContext } from '../Listbox';
import { ListBody } from './ListBody';
import { NestedList } from '../nestedList';
import { onKeyDown as listboxKeyDownHandler } from '../utils';
import { getAllFocusableElements } from '@/utils/overlayHelper';
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
  const {
    nestedBody,
    expanded,
    id,
    onClick,
    value,
    tagName: Tag = 'li',
    tabIndex,
    onKeyDown,
    onFocus,
    role,
    disabled,
    ...rest
  } = props;

  const contextProp = React.useContext(ListboxContext);
  const { showDivider, draggable, suppressKeyboard, setRovingIndex } = contextProp;

  const onClickHandler = (e: React.MouseEvent) => {
    onClick && onClick(e, id, value);
  };

  const tagClass = classNames({
    [styles['Listbox-item-wrapper']]: !draggable,
  });

  // Parent owns keys when `onKeyDown` is set (Menu/Select/Combobox) or when `Listbox` sets `suppressKeyboard`.
  const keyDownHandler = onKeyDown || (!suppressKeyboard ? listboxKeyDownHandler : undefined);

  const rovingFromListbox = !suppressKeyboard && !draggable && !onKeyDown;

  const tabIndexProps: { tabIndex?: number } = {};
  if (rovingFromListbox) {
    if (disabled) {
      tabIndexProps.tabIndex = -1;
    }
  } else if (tabIndex !== undefined) {
    tabIndexProps.tabIndex = tabIndex;
  }

  const handleFocus = (e: React.FocusEvent<HTMLLIElement & HTMLDivElement & HTMLAnchorElement>) => {
    onFocus?.(e);
    if (rovingFromListbox && !disabled && e.target === e.currentTarget) {
      const root = (e.currentTarget as HTMLElement).closest<HTMLElement>('[role="listbox"]');
      if (!root) {
        return;
      }
      const options = getAllFocusableElements(root, 'listbox');
      const idx = options.indexOf(e.currentTarget as HTMLElement);
      if (idx >= 0) {
        setRovingIndex(idx);
      }
    }
  };

  return (
    <Tag
      id={id}
      data-test="DesignSystem-Listbox-Item"
      {...rest}
      disabled={disabled}
      onClick={onClickHandler}
      onFocus={handleFocus}
      data-value={value}
      className={tagClass}
      {...tabIndexProps}
      onKeyDown={keyDownHandler}
      role={role ?? 'option'}
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
