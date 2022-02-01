import * as React from 'react';
import { Text, Icon, Spinner, Tooltip } from '@/index';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';

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
   * Name of icon that is to be added inside `Button`
   * Material icon name
   */
  icon?: string;
  /**
   * Adds title to `Button` when only icon is present
   */
  tooltip?: string;
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
   * Text to be added inside `Button`
   */
  children?: React.ReactText;
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
    ...rest
  } = props;

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--expanded']: expanded,
    [`Button--${size}`]: size,
    [`Button--${size}Square`]: !children,
    [`Button--${appearance}`]: appearance,
    ['Button--selected']: selected && (appearance === 'basic' || appearance === 'transparent'),
    [`Button--iconAlign-${iconAlign}`]: children && iconAlign,
    [`${className}`]: className,
  });

  const iconClass = classNames({
    ['Button-icon']: true,
    [`Button-icon--${iconAlign}`]: children && iconAlign,
  });

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
            size="small"
            appearance={appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white'}
            data-test="DesignSystem-Button--Spinner"
            className="Button-spinner"
          />
          <Text className="Button-text Button-text--hidden">{children || ''}</Text>
        </>
      ) : (
        <>
          {icon && (
            <div className={iconClass}>
              <Icon
                data-test="DesignSystem-Button--Icon"
                name={icon}
                appearance={
                  disabled
                    ? 'disabled'
                    : appearance === 'basic' || appearance === 'transparent'
                    ? selected
                      ? 'info'
                      : 'default'
                    : 'white'
                }
                size={largeIcon && !children ? sizeMapping[size] + 4 : sizeMapping[size]}
              />
            </div>
          )}
          {children}
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
