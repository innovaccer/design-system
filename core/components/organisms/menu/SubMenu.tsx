import React from 'react';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';
import uidGenerator from '@/utils/uidGenerator';
import SubMenuContext from './SubMenuContext';

export interface SubMenuProps {
  /**
   * Element to be rendered inside `SubMenu`
   * <br/>
   * First child will be consider as `trigger`,
   * <br />
   * whereas second children content will be displayed inside `SubMenu`
   */
  children: React.ReactNode;
}

export const SubMenu = (props: SubMenuProps) => {
  const { children } = props;
  const menuID = `DesignSystem-Menu--Popover-${uidGenerator()}`;
  const triggerID = `DesignSystem-Menu--Trigger-${uidGenerator()}`;

  const [submenuTrigger, submenuContent] = React.Children.toArray(children);
  const contextProp = React.useContext(MenuContext);
  const subListRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const isSubMenuTrigger = true;
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [keyboardOpen, setKeyboardOpen] = React.useState(false);
  const [shouldFocusFirstItem, setShouldFocusFirstItem] = React.useState(false);

  let subMenuElement = <></>;

  const { setOpenPopover, focusedOption, setFocusedOption, menuTriggerRef, listRef } = contextProp;

  React.useEffect(() => {
    if (shouldFocusFirstItem && isSubmenuOpen) {
      requestAnimationFrame(() => {
        const listItems = subListRef.current?.querySelectorAll('[data-test="DesignSystem-Menu-ListItem"]');
        (listItems?.[0] as HTMLElement)?.focus();
        setShouldFocusFirstItem(false);
      });
    }
  }, [shouldFocusFirstItem, isSubmenuOpen]);

  const onTriggerBlur = (e: React.FocusEvent) => {
    if (keyboardOpen) {
      e.stopPropagation();
    }
    (submenuTrigger as React.ReactElement)?.props?.onBlur?.(e);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'Enter':
      case ' ':
        // Open the submenu and move focus into it rather than closing the root menu.
        event.preventDefault();
        setKeyboardOpen(true);
        setShouldFocusFirstItem(true);
        break;
      default:
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
          menuID
        );
    }
  };

  const subMenuContextProp = {
    triggerRef,
    menuID,
    setParentOpen: setOpenPopover,
    parentListRef: listRef,
    triggerID,
    parentMenuTriggerRef: menuTriggerRef,
  };

  const triggerElement = React.cloneElement(submenuTrigger as React.ReactElement, {
    ...(submenuTrigger as React.ReactElement)?.props,
    onKeyDown: onKeyDownHandler,
    onBlur: onTriggerBlur,
    ref: triggerRef,
    'aria-haspopup': 'menu',
    'aria-expanded': isSubmenuOpen,
    'aria-controls': menuID,
    id: triggerID,
  });

  if (React.isValidElement(submenuContent)) {
    const { on, children, onToggle, open: consumerOpen } = submenuContent?.props;
    subMenuElement = React.cloneElement(submenuContent as React.ReactElement, {
      ...submenuContent.props,
      on: on || 'hover',
      open: keyboardOpen || consumerOpen,
      offset: 'small',
      children: <div ref={subListRef}>{children}</div>,
      trigger: triggerElement,
      onToggle: (open?: boolean) => {
        setIsSubmenuOpen(open ?? false);
        if (!open) setKeyboardOpen(false);
        onToggle?.(open);
      },
    });
  }

  return <SubMenuContext.Provider value={subMenuContextProp}>{subMenuElement}</SubMenuContext.Provider>;
};

export default SubMenu;
