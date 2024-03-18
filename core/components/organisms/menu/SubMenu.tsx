import React from 'react';
// import { Icon } from '@/index';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';

export interface SubMenuProps {
  /**
   * Element to be rendered inside `SubMenu`
   * <br/>
   * First child will be consider as `trigger`,
   * <br />
   * whereas second children content will be displayed inside `SubMenu`
   */
  children: React.ReactElement;
}

export const SubMenu = (props: SubMenuProps) => {
  const { children } = props;

  const [submenuTrigger, submenuContent] = React.Children.toArray(children);
  const contextProp = React.useContext(MenuContext);
  // const { listRef } = contextProp;
  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
  } = contextProp;

  let subMenuElement = <></>;
  // const menuTrigger = (
  //   <div className="d-flex align-items-center justify-content-between w-100">
  //     {submenuTrigger}
  //     <Icon name="chevron_right" />
  //   </div>
  // );

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      menuTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      listRef
    );
  };

  if (React.isValidElement(submenuContent)) {
    subMenuElement = React.cloneElement(submenuContent as React.ReactElement, {
      ...submenuContent.props,
      // trigger: (
      //   <div onKeyDown={onKeyDownHandler} role="tablist" id="my trigger" className="Menu-Item">
      //     {submenuTrigger}
      //   </div>
      // ),
      trigger: React.cloneElement(submenuTrigger as React.ReactElement, {
        ...submenuTrigger.props,
        onKeyDown: onKeyDownHandler,
      }),
      // trigger: menuTrigger,
      on: submenuContent?.props?.on || 'hover',
      offset: 'small',
      // children: (
      //   <div ref={listRef} data-myid="myidd">
      //     {submenuContent.props.children}
      //   </div>
      // ),
    });
  }

  return <>{subMenuElement}</>;
};

export default SubMenu;
