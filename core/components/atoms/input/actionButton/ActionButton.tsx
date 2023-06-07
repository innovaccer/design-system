import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { useAccessibilityProps } from '@/accessibility/utils';

export type ActionButtonType = 'filled' | 'outlined' | 'round' | 'two-tone' | 'sharp';

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
  const { className, name, size, children, type } = props;
  const accessibilityProps = useAccessibilityProps(props);

  const baseProps = extractBaseProps(props);

  const iconClass = classNames({
    ['material-icons']: true,
    [`material-icons-${type}`]: type && type !== 'filled',
    ['ActionButton']: true,
    [`${className}`]: className,
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  // change `children` to {name} after migration
  if (children && React.isValidElement(children)) {
    return (
      <span {...baseProps} className={iconClass} data-test="DesignSystem-Input-ActionButton">
        {children}
      </span>
    );
  }
  return (
    <i
      {...baseProps}
      className={iconClass}
      style={styles}
      {...accessibilityProps}
      data-test="DesignSystem-Input-ActionButton"
    >
      {`${name}_${type}`}
    </i>
  );
};

ActionButton.displayName = 'ActionButton';
ActionButton.defaultProps = {
  size: 16,
  type: 'round',
};

export default ActionButton;
