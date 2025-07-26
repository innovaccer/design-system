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

  let subMenuElement = <></>;

  const { setOpenPopover, focusedOption, setFocusedOption, menuTriggerRef, listRef } = contextProp;

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
      menuID
    );
  };

  const subMenuContextProp = {
    triggerRef,
    menuID,
    setParentOpen: setOpenPopover,
    parentListRef: listRef,
    triggerID,
  };
  const triggerElement = React.cloneElement(submenuTrigger as React.ReactElement<any>, {
    ...((submenuTrigger as React.ReactElement).props || {}),
    onKeyDown: onKeyDownHandler,
    ref: triggerRef,
    'aria-haspopup': 'menu',
    'aria-expanded': subListRef.current ? 'true' : 'false',
    'aria-controls': menuID,
    id: triggerID,
  });
  if (React.isValidElement(submenuContent)) {
    const submenuProps = submenuContent.props as { on?: string; children?: React.ReactNode };
    const { on, children } = submenuProps;
    subMenuElement = React.cloneElement(
      submenuContent as React.ReactElement<{
        on?: string;
        children?: React.ReactNode;
        offset?: string;
        trigger?: React.ReactElement;
      }>,
      {
        ...submenuProps,
        on: on || 'hover',
        offset: 'small',
        children: <div ref={subListRef}>{children}</div>,
        trigger: triggerElement,
      }
    );
  }

  return <SubMenuContext.Provider value={subMenuContextProp}>{subMenuElement}</SubMenuContext.Provider>;
};

export default SubMenu;
