import * as React from 'react';
import { Text, Icon, Spinner, Tooltip } from '@/index';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { IconType } from '@/common.type';
import styles from '@css/components/button.module.css';
import uidGenerator from '@/utils/uidGenerator';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonAppearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
export type ButtonSize = 'tiny' | 'regular' | 'large';
export type ButtonAlignment = 'left' | 'right';
export type ButtonStyleType = 'filled' | 'outlined';

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
   * Style type of the `Button`
   * @default "filled"
   */
  styleType?: ButtonStyleType;
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
   * Text to be displayed in the tooltip. For disabled buttons, it additionally renders an info affordance icon. For icon-only buttons, it serves as the accessible label.
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
    styleType = 'filled',
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
    onClick,
    onKeyDown,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props;

  const buttonLabel = children ? String(children) : undefined;
  const isIconOnly = icon && !children;

  const tooltipIdRef = React.useRef<string | null>(null);
  if (tooltipIdRef.current === null && tooltip && !isIconOnly) {
    tooltipIdRef.current = `Button-tooltip-${uidGenerator()}`;
  }

  const computedAriaDescribedBy =
    [ariaDescribedBy, tooltip && !isIconOnly ? tooltipIdRef.current : undefined].filter(Boolean).join(' ') || undefined;

  const computedAriaLabel =
    props['aria-label'] ||
    (loading && buttonLabel ? buttonLabel : undefined) ||
    (isIconOnly && tooltip ? tooltip : undefined);

  const isOutlined = styleType === 'outlined' && appearance !== 'transparent';
  const isBasicOrTransparent = appearance === 'basic' || appearance === 'transparent';

  const getSpinnerAppearance = () => {
    if (appearance === 'alert') return 'alert';
    if (appearance === 'primary' || appearance === 'success') return 'primary';
    return 'secondary';
  };

  const spinnerAppearance = getSpinnerAppearance();

  const isDisabledProp = disabled || loading;
  const useAriaDisabled = Boolean(isDisabledProp && tooltip);
  const nativeDisabled = useAriaDisabled ? undefined : isDisabledProp;
  const renderedType = useAriaDisabled && (type === 'submit' || !type) ? 'button' : type;
  const isDisabled = nativeDisabled || useAriaDisabled;

  const buttonClass = classNames(
    {
      [styles['Button']]: true,
      [styles['Button--expanded']]: expanded,
      [styles[`Button--${size}`]]: size,
      [styles[`Button--${size}Square`]]: !children,
      [styles[`Button--${appearance}`]]: appearance && !isOutlined && !isDisabled,
      [styles[`Button--${appearance}-disabled`]]: appearance && !isOutlined && isDisabled,
      [styles['Button--selected']]: selected && isBasicOrTransparent && !isOutlined && !isDisabled,
      [styles['Button--selected-disabled']]: selected && isBasicOrTransparent && !isOutlined && isDisabled,
      [styles[`Button--iconAlign-${iconAlign}`]]: children && iconAlign,
      [styles['Button--disabled']]: isDisabled,
      [styles[`Button-outlined--${appearance}`]]: appearance && isOutlined && !isDisabled,
      [styles[`Button-outlined--${appearance}-disabled`]]: appearance && isOutlined && isDisabled,
      [styles['Button-outlined--selected']]: selected && isBasicOrTransparent && isOutlined && !isDisabled,
      [styles['Button-outlined--selected-disabled']]: selected && isBasicOrTransparent && isOutlined && isDisabled,
    },
    className
  );

  const iconClass = classNames({
    [styles['Button-icon']]: true,
    [styles[`Button-icon--${iconAlign}`]]: children && iconAlign,
    [`mr-3`]: children && iconAlign === 'left' && size === 'tiny',
    [`ml-3`]: children && iconAlign === 'right' && size === 'tiny',

    [styles[`Button-regularIcon--${iconAlign}`]]: children && iconAlign && size === 'regular' && !expanded,
  });

  const buttonTextClass = classNames({
    [styles['Button-text']]: true,
    [styles['Button-text--hidden']]: true,
  });

  const infoIconClass = classNames({
    [styles['Button-infoIcon']]: true,
    [styles[`Button-infoIcon--${appearance}`]]: appearance && !isOutlined,
    [styles[`Button-infoIcon-outlined--${appearance}`]]: appearance && isOutlined,
  });

  const infoIconWrapperClass = classNames({
    [styles['Button-infoIconWrapper']]: true,
    [styles[`Button-infoIconWrapper--${appearance}`]]: appearance && !isOutlined,
    [styles[`Button-infoIconWrapper-outlined--${appearance}`]]: appearance && isOutlined,
    [styles['Button-infoIconWrapper--iconOnly']]: !children,
    [styles['Button-infoIconWrapper--iconOnly-transparent']]: !children && appearance === 'transparent',
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (useAriaDisabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (useAriaDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  const spinnerSize = size === 'large' && children ? 'small' : 'xsmall';
  const iconSize = size === 'tiny' ? 14 : largeIcon && !children ? sizeMapping[size] + 4 : sizeMapping[size];

  const showInfoAffordance = disabled && tooltip && !loading;

  return (
    <button
      data-test="DesignSystem-Button"
      ref={ref}
      type={renderedType}
      className={buttonClass}
      disabled={nativeDisabled}
      aria-disabled={useAriaDisabled ? true : undefined}
      aria-describedby={computedAriaDescribedBy}
      tabIndex={tabIndex}
      aria-busy={loading || undefined}
      aria-label={computedAriaLabel}
      aria-pressed={typeof selected === 'boolean' && isBasicOrTransparent ? selected : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner
            size={spinnerSize}
            appearance={spinnerAppearance}
            data-test="DesignSystem-Button--Spinner"
            className={styles['Button-spinner']}
          />
          <Text className={buttonTextClass}>{children || ''}</Text>
        </>
      ) : (
        <>
          {icon && (
            <div className={iconClass} data-test="DesignSystem-Button--Icon-Wrapper">
              <Icon data-test="DesignSystem-Button--Icon" name={icon} type={iconType} size={iconSize} />
            </div>
          )}
          {children && <span className={styles['Button-text']}>{children}</span>}
          {showInfoAffordance && (
            <span className={infoIconWrapperClass}>
              <Icon
                name="info_outline"
                type="outlined"
                size={12}
                className={infoIconClass}
                aria-hidden="true"
                data-test="DesignSystem-Button--Info-Icon"
              />
            </span>
          )}
        </>
      )}
      {tooltip && !isIconOnly && (
        <span id={tooltipIdRef.current as string} className={styles['Button-srOnly']}>
          {tooltip}
        </span>
      )}
    </button>
  );
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { tooltip, expanded } = props;
  const triggerClass = expanded ? 'w-100' : 'flex-grow-0';

  return tooltip ? (
    <Tooltip tooltip={tooltip} aria-hidden="true" triggerClass={triggerClass}>
      <ButtonElement {...props} ref={ref} />
    </Tooltip>
  ) : (
    <ButtonElement {...props} ref={ref} />
  );
});

Button.displayName = 'Button';

export default Button;
