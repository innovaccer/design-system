import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Divider } from '@/index';
import { ListboxContext } from '../Listbox';
import { ListBody } from './ListBody';
import { NestedList } from '../nestedList';
import { onKeyDown as listboxKeyDownHandler, resolveListboxOptionFromEvent } from '../utils';
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
   * DOM id for the nested panel; use with `aria-controls` on the row expand control
   */
  nestedListId?: string;
  /**
   * Accessible name for the nested panel landmark (`role="region"`) when expanded
   */
  nestedListAriaLabel?: string;
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
    children,
    nestedBody,
    expanded,
    id,
    nestedListId,
    nestedListAriaLabel,
    onClick,
    value,
    tagName: Tag = 'li',
    tabIndex,
    onKeyDown,
    onFocus,
    role,
    disabled,
    href,
    target,
    rel,
    download,
    ...rest
  } = props;

  const contextProp = React.useContext(ListboxContext);
  const { showDivider, draggable, customFocusManagement, setRovingIndex } = contextProp;

  const tagClass = classNames({
    [styles['Listbox-item-wrapper']]: !draggable,
  });

  // Parent owns keys when `onKeyDown` is set (Menu/Select/Combobox) or when `Listbox` sets `customFocusManagement`.
  const keyDownHandler = onKeyDown || (!customFocusManagement ? listboxKeyDownHandler : undefined);

  const rovingFromListbox = !customFocusManagement && !draggable && !onKeyDown;

  const tabIndexProps: { tabIndex?: number } = {};
  if (rovingFromListbox) {
    if (disabled) {
      tabIndexProps.tabIndex = -1;
    }
  } else if (tabIndex !== undefined) {
    tabIndexProps.tabIndex = tabIndex;
  }

  const updateRovingFromListBody = (optionEl: HTMLElement) => {
    if (!rovingFromListbox || disabled) {
      return;
    }
    const root = optionEl.closest<HTMLElement>('[role="listbox"]');
    if (!root) {
      return;
    }
    const options = getAllFocusableElements(root, 'listbox');
    const idx = options.indexOf(optionEl);
    if (idx >= 0) {
      setRovingIndex(idx);
    }
  };

  const onClickHandler = (e: React.MouseEvent) => {
    const optionEl = resolveListboxOptionFromEvent(e, e.currentTarget as HTMLElement);
    updateRovingFromListBody(optionEl);
    onClick && onClick(e, id, value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLLIElement & HTMLDivElement & HTMLAnchorElement>) => {
    onFocus?.(e);
    const optionEl = resolveListboxOptionFromEvent(e, e.currentTarget as HTMLElement);
    updateRovingFromListBody(optionEl);
  };

  return (
    <Tag
      data-test="DesignSystem-Listbox-Item"
      className={tagClass}
      role="presentation"
      href={href}
      target={target}
      rel={rel}
      download={download}
    >
      <ListBody
        {...rest}
        className={props.className}
        selected={props.selected}
        activated={props.activated}
        id={id}
        data-value={value}
        disabled={disabled}
        onClick={onClickHandler}
        onFocus={handleFocus}
        tabIndex={tabIndexProps.tabIndex ?? -1}
        onKeyDown={keyDownHandler}
        role={role ?? 'option'}
      >
        {children}
      </ListBody>
      {nestedBody && (
        <NestedList expanded={expanded} nestedBody={nestedBody} id={nestedListId} aria-label={nestedListAriaLabel} />
      )}
      {showDivider && <Divider className={styles['Listbox-divider']} aria-hidden={true} />}
    </Tag>
  );
};

ListboxItem.displayName = 'Listbox.Item';
ListboxItem.defaultProps = {
  tagName: 'li',
};

export default ListboxItem;
