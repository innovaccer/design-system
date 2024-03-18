import React from 'react';
// import { Icon } from '@/index';

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

  let subMenuElement = <></>;
  // const menuTrigger = (
  //   <div className="d-flex align-items-center justify-content-between w-100">
  //     {submenuTrigger}
  //     <Icon name="chevron_right" />
  //   </div>
  // );

  if (React.isValidElement(submenuContent)) {
    subMenuElement = React.cloneElement(submenuContent as React.ReactElement, {
      ...submenuContent.props,
      trigger: <>{submenuTrigger}</>,
      // trigger: menuTrigger,
      on: submenuContent?.props?.on || 'hover',
      offset: 'small',
    });
  }

  return <>{subMenuElement}</>;
};

export default SubMenu;
