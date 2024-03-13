import React from 'react';
import { BaseProps } from '@/utils/types';
import { Button } from '@/index';
import { ButtonProps } from '@/index.type';
import MenuContext from './MenuContext';
import classNames from 'classnames';

export interface MenuTriggerProps extends BaseProps {
  /**
   * Defines size of the `Trigger`
   */
  size?: ButtonProps['size'];
}

export const MenuTrigger = (props: MenuTriggerProps) => {
  const { className } = props;
  const contextProp = React.useContext(MenuContext);
  const { openPopover } = contextProp;

  const triggerClassName = classNames(
    {
      'Menu-Trigger--active': openPopover,
    },
    className
  );

  return <Button data-test="DesignSystem-Menu-Trigger" icon="more_horiz" {...props} className={triggerClassName} />;
};

export default MenuTrigger;
