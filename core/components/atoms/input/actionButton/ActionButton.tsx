import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { IconType } from '@/common.type';
import { Icon } from '@/index';
import styles from '@css/components/actionButton.module.css';

export type ActionButtonType = 'outlined' | 'rounded';

export interface ActionButtonProps extends BaseProps {
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Size of `ActionButton`
   */
  size: number;
  /**
   * Type of material `ActionButton`
   */
  type?: ActionButtonType;
  /**
   * Set type of Icon
   */
  iconType?: IconType;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Handler to be called when key is pressed on icon
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * DOM node to be passed as child to the component
   */
  children?: React.ReactNode;
  /**
   * The tabindex global attribute indicates that its element can be focused, and
   * where it participates in sequential keyboard navigation.
   */
  tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
}

export const ActionButton = (props: ActionButtonProps) => {
  const { className, iconType, ...rest } = props;

  const iconClass = classNames({
    [styles['ActionButton']]: true,
    [`${className}`]: className,
  });

  return <Icon className={iconClass} type={iconType} data-test="DesignSystem-Input-ActionButton" {...rest} />;
};

ActionButton.displayName = 'ActionButton';
ActionButton.defaultProps = {
  size: 16,
  type: 'rounded',
};

export default ActionButton;
