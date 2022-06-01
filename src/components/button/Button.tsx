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
  /**
   * Icon props to be provided
   *
   * <pre className="DocPage-codeBlock">
   * Menu: {
   *    name?: string;
   *    align?: 'left' | 'right';
   *    tooltip?: string;
   *    isLarge?: boolean;
   * };
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | name | Icon name | |
   * | align | Alignment of icon | |
   * | tooltip | Tooltip to be added to icon | |
   * | isLarge | Make icon large in size | false |
   */
  iconOptions?: iconOptions;
}

interface iconOptions {
  /**
   * Name of icon that is to be added inside `Button`
   * Material icon name
   */
  name?: string;
  /**
   * Alignment of the icon Left or Right
   * @default "left"
   */
  align?: ButtonAlignment;
  /**
   * Adds title to `Button` when only icon is present
   */
  tooltip?: string;
  /**
   * Determines if size of icon is large
   *
   * **Valid when button has icon only**
   */
  isLarge?: boolean;
}

const sizeMapping: Record<ButtonSize, number> = {
  tiny: 12,
  regular: 16,
  large: 20,
};

const ButtonElement = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'regular',
    appearance = 'basic',
    tabIndex = 0,
    type,
    children,
    iconOptions,
    expanded,
    selected,
    loading,
    disabled,
    className,
    ...rest
  } = props;

  const iconAlignment = iconOptions?.align || 'left';

  const buttonClass = classNames({
    ['Mds-Button']: true,
    ['Mds-Button--expanded']: expanded,
    [`Mds-Button--${size}`]: size,
    [`Mds-Button--${size}Square`]: !children,
    [`Mds-Button--${appearance}`]: appearance,
    ['Mds-Button--selected']: selected && (appearance === 'basic' || appearance === 'transparent'),
    [`Mds-Button--iconAlign-${iconAlignment}`]: children && iconAlignment,
    [`${className}`]: className,
  });

  const iconClass = classNames({
    ['Mds-Button-icon']: true,
    [`Mds-Button-icon--${iconAlignment}`]: children && iconAlignment,
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
            className="Mds-Button-spinner"
          />
          <Text className="Mds-Button-text Mds-Button-text--hidden">{children || ''}</Text>
        </>
      ) : (
        <>
          {iconOptions && iconOptions?.name && (
            <div className={iconClass}>
              <Icon
                data-test="DesignSystem-Button--Icon"
                appearance={
                  disabled
                    ? 'disabled'
                    : appearance === 'basic' || appearance === 'transparent'
                    ? selected
                      ? 'primary'
                      : 'default'
                    : 'white'
                }
                size={iconOptions?.isLarge && !children ? sizeMapping[size] + 4 : sizeMapping[size]}
              >
                {iconOptions?.name}
              </Icon>
            </div>
          )}
          {children}
        </>
      )}
    </button>
  );
});

ButtonElement.displayName = '';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { iconOptions, children } = props;

  return iconOptions?.name && iconOptions?.tooltip && !children ? (
    <Tooltip text={iconOptions?.tooltip}>
      <ButtonElement {...props} ref={ref} />
    </Tooltip>
  ) : (
    <ButtonElement {...props} ref={ref} />
  );
});

Button.displayName = 'Button';
export default Button;
