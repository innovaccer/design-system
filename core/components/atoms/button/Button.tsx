import * as React from 'react';
import { Text, Icon, Spinner, Tooltip } from '@/index';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { IconType } from '@/common.type';
import styles from '@css/components/button.module.css';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonAppearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
export type ButtonSize = 'tiny' | 'regular' | 'large';
export type ButtonAlignment = 'left' | 'right';

export interface ButtonProps extends BaseProps, BaseHtmlProps<HTMLButtonElement> {
  /**
   * Type of `Button`
   */
  type?: ButtonType;
  /**
   * The size of `Button`
   * @default "regular"
   */
  size?: ButtonSize;
  /**
   * Color of the `Button`
   *
   * **'success' has been deprecated and all success button types will now be changed to primary button automatically**
   *
   * @default "basic"
   */
  appearance?: ButtonAppearance;
  /**
   * Disables the `Button`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Expands the `Button` to full width
   */
  expanded?: boolean;
  /**
   * Selected state of `Button`
   *
   * **Only applicable for `appearance: 'basic' | 'transparent'`**
   */
  selected?: boolean;
  /**
   * Adds loader inside `Button` when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Adds title to `Button` when only icon is present
   */
  tooltip?: string;
  /**
   * Name of icon that is to be added inside `Button`
   * Material icon name
   */
  icon?: string;
  /**
   * Align icon left or right
   * @default "left"
   */
  iconAlign?: ButtonAlignment;
  /**
   * Determines if size of icon is large
   *
   * **Valid when button has icon only**
   */
  largeIcon?: boolean;
  /**
   * Set type of Icon
   */
  iconType?: IconType;
  /**
   * Text to be added inside `Button`
   */
  children?: string | number;
  /**
   * Specifies tab index of `Button`
   * @default 0
   */
  tabIndex?: number;
  /**
   * Specifies autoFocus on render
   */
  autoFocus?: boolean;
  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `Button`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Button`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const sizeMapping: Record<ButtonSize, number> = {
  tiny: 12,
  regular: 16,
  large: 20,
};

// eslint-disable-next-line react/display-name
const ButtonElement = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'regular',
    appearance = 'basic',
    iconAlign = 'left',
    tabIndex = 0,
    largeIcon,
    type,
    children,
    icon,
    expanded,
    selected,
    loading,
    disabled,
    className,
    tooltip,
    iconType,
    ...rest
  } = props;

  const buttonClass = classNames(
    {
      [styles['Button']]: true,
      [styles['Button--expanded']]: expanded,
      [styles[`Button--${size}`]]: size,
      [styles[`Button--${size}Square`]]: !children,
      [styles[`Button--${appearance}`]]: appearance,
      [styles['Button--selected']]: selected && (appearance === 'basic' || appearance === 'transparent'),
      [styles[`Button--iconAlign-${iconAlign}`]]: children && iconAlign,
    },
    className
  );

  const iconClass = classNames({
    [styles['Button-icon']]: true,
    [styles[`Button-icon--${iconAlign}`]]: children && iconAlign,
    [styles[`Button-regularIcon--${iconAlign}`]]: children && iconAlign && size === 'regular' && !expanded,
  });

  const buttonTextClass = classNames({
    [styles['Button-text']]: true,
    [styles['Button-text--hidden']]: true,
  });

  const spinnerSize = size === 'large' && children ? 'small' : 'xsmall';

  return (
    <button
      data-test="DesignSystem-Button"
      ref={ref}
      type={type}
      className={buttonClass}
      disabled={disabled || loading}
      tabIndex={tabIndex}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner
            size={spinnerSize}
            appearance={appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white'}
            data-test="DesignSystem-Button--Spinner"
            className={styles['Button-spinner']}
          />
          <Text className={buttonTextClass}>{children || ''}</Text>
        </>
      ) : (
        <>
          {icon && (
            <div className={iconClass} data-test="DesignSystem-Button--Icon-Wrapper">
              <Icon
                data-test="DesignSystem-Button--Icon"
                name={icon}
                type={iconType}
                size={largeIcon && !children ? sizeMapping[size] + 4 : sizeMapping[size]}
              />
            </div>
          )}
          {children && <span className={styles['Button-text']}>{children}</span>}
        </>
      )}
    </button>
  );
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { icon, tooltip, children } = props;

  return icon && tooltip && !children ? (
    <Tooltip tooltip={tooltip}>
      <ButtonElement {...props} ref={ref} />
    </Tooltip>
  ) : (
    <ButtonElement {...props} ref={ref} />
  );
});

Button.displayName = 'Button';

export default Button;
