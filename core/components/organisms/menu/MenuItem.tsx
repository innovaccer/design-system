import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import classNames from 'classnames';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';

type ItemTagType = 'li' | 'div' | 'a';

export interface MenuItemProps extends BaseProps {
  /**
   * Set a custom element for `Menu List Item`
   */
  tagType?: ItemTagType;
  /**
   * Handler to be called when `Menu List Item` is clicked
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * React Element to be added inside `Menu List Item`
   */
  children: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { children, className, onClick, ...rest } = props;
  const contextProp = React.useContext(MenuContext);
  const isSubMenuTrigger = false;

  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
    triggerRef,
    menuID,
  } = contextProp;

  const MenuItemClassName = classNames(
    {
      'Menu-Item': true,
    },
    className
  );

  const onFocusHandler = (event: React.FocusEvent) => {
    setFocusedOption?.(event.target as HTMLElement);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      menuTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      listRef,
      null,
      isSubMenuTrigger,
      triggerRef,
      menuID
    );
  };

  const onClickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
    setOpenPopover?.(false);
    onClick?.(event);
  };

  return (
    <Listbox.Item
      data-test="DesignSystem-Menu-ListItem"
      className={MenuItemClassName}
      tabIndex={-1}
      onKeyDown={onKeyDownHandler}
      onFocus={onFocusHandler}
      onClick={onClickHandler}
      ref={ref}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
