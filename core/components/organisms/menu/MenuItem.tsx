import React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Listbox } from '@/index';
import classNames from 'classnames';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';
import SubMenuContext from './SubMenuContext';
import styles from '@css/components/menu.module.css';

type ItemTagType = 'li' | 'div' | 'a';

export interface MenuItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement> {
  /**
   * Set a custom element for `Menu List Item`
   */
  tagName?: ItemTagType;
  /**
   * Handler to be called when `Menu List Item` is clicked
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * React Element to be added inside `Menu List Item`
   */
  children: React.ReactNode;
  /**
   * Disables the menu item
   */
  disabled?: boolean;
  /**
   * Handler to be called when `Menu List Item` is in focus
   */
  onFocus?: (event: React.FocusEvent) => void;
  /**
   * Handler to be called when `Menu List Item` is out of focus
   */
  onBlur?: (event: React.FocusEvent) => void;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, className, onClick, disabled, onFocus, ...rest } = props;
  const contextProp = React.useContext(MenuContext);
  const subMenuContextProp = React.useContext(SubMenuContext);
  const isSubMenuTrigger = false;
  const subListRef = null;

  const { triggerRef, menuID, setParentOpen, triggerID, parentListRef } = subMenuContextProp;

  const { setOpenPopover, focusedOption, setFocusedOption, menuTriggerRef, listRef } = contextProp;

  const MenuItemClassName = classNames(styles['Menu-Item'], className);

  React.useEffect(() => {
    const handlePopoverOpen = () => {
      setOpenPopover?.(true);
    };

    const handlePopoverClose = () => {
      setOpenPopover?.(false);
    };

    const triggerElement = parentListRef?.current?.querySelector(`#${triggerID}`)?.firstChild;

    triggerElement?.addEventListener('focus', handlePopoverOpen);
    triggerElement?.addEventListener('blur', handlePopoverClose);

    return () => {
      triggerElement?.removeEventListener('focus', handlePopoverOpen);
      triggerElement?.removeEventListener('blur', handlePopoverClose);
    };
  }, [triggerID]);

  const onFocusHandler = (event: React.FocusEvent) => {
    setFocusedOption?.(event.target as HTMLElement);
    setOpenPopover?.(true);
    onFocus?.(event);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      menuTriggerRef,
      listRef,
      subListRef,
      isSubMenuTrigger,
      triggerRef,
      menuID,
      triggerID,
      parentListRef
    );
  };

  const onClickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (disabled) {
      return;
    }
    setOpenPopover?.(false);
    onClick?.(event);
    setParentOpen?.(false);
  };

  return (
    <Listbox.Item
      data-test="DesignSystem-Menu-ListItem"
      className={MenuItemClassName}
      tabIndex={-1}
      onKeyDown={onKeyDownHandler}
      onFocus={onFocusHandler}
      onClick={onClickHandler}
      disabled={disabled}
      role="menuitem"
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
};

MenuItem.displayName = 'MenuItem';

MenuItem.defaultProps = {
  tagName: 'a',
};

export default MenuItem;
