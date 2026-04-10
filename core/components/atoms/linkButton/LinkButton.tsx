import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Icon, Tooltip } from '@/index';
import { IconType } from '@/common.type';
import styles from '@css/components/linkButton.module.css';
import uidGenerator from '@/utils/uidGenerator';

export type ButtonType = 'button' | 'submit' | 'reset';
export type LinkButtonSize = 'tiny' | 'regular';
export type IconAlignment = 'left' | 'right';

export interface LinkButtonProps extends BaseProps, BaseHtmlProps<HTMLButtonElement> {
  /**
   * Type of `Link Button`
   */
  type?: ButtonType;
  /**
   * The size of `Link Button`
   * @default "regular"
   */
  size?: LinkButtonSize;
  /**
   * Disables the `Button`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Text to be displayed in the tooltip. For disabled buttons, it additionally renders an affordance icon.
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
  iconAlign?: IconAlignment;
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
   * Display `subtle` appearance
   */
  subtle?: boolean;
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

const sizeMapping: Record<LinkButtonSize, number> = {
  tiny: 12,
  regular: 16,
};

// eslint-disable-next-line react/display-name
const LinkButtonElement = React.forwardRef<HTMLButtonElement, LinkButtonProps>((props, ref) => {
  const {
    children,
    type,
    className,
    disabled,
    tabIndex,
    icon,
    subtle,
    size,
    iconAlign,
    iconType,
    tooltip,
    onClick,
    onKeyDown,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props;

  const isIconOnly = icon && !children;

  const tooltipIdRef = React.useRef<string | null>(null);
  if (tooltipIdRef.current === null && tooltip && !isIconOnly) {
    tooltipIdRef.current = `LinkButton-tooltip-${uidGenerator()}`;
  }

  const computedAriaDescribedBy =
    [ariaDescribedBy, tooltip && !isIconOnly ? tooltipIdRef.current : undefined].filter(Boolean).join(' ') || undefined;

  const computedAriaLabel =
    props['aria-label'] || (isIconOnly && tooltip ? tooltip : undefined) || (!children && icon ? icon : undefined);

  const useAriaDisabled = Boolean(disabled && tooltip);
  const nativeDisabled = useAriaDisabled ? undefined : disabled;
  const renderedType = useAriaDisabled && type === 'submit' ? 'button' : type;

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

  const showInfoAffordance = disabled && tooltip;

  const buttonClass = classNames({
    [styles['LinkButton']]: true,
    [styles[`LinkButton--${size}`]]: size,
    [styles['LinkButton--default']]: !subtle,
    [styles['LinkButton--subtle']]: subtle,
    [styles[`LinkButton--iconAlign-${iconAlign}`]]: children && iconAlign,
    [styles['LinkButton--withInfoAffordance']]: showInfoAffordance,
    [`${className}`]: className,
  });

  const iconClass = classNames({
    [styles['LinkButton-icon']]: true,
    [styles[`LinkButton-icon--${iconAlign}`]]: children && iconAlign,
  });

  const iconSize = size && sizeMapping[size];

  return (
    <button
      ref={ref}
      type={renderedType}
      data-test="DesignSystem-LinkButton"
      className={buttonClass}
      disabled={nativeDisabled}
      aria-disabled={useAriaDisabled ? true : undefined}
      aria-describedby={computedAriaDescribedBy}
      tabIndex={tabIndex}
      {...rest}
      aria-label={computedAriaLabel}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <>
        {icon && (
          <div className={iconClass}>
            <Icon data-test="DesignSystem-LinkButton--Icon" name={icon} type={iconType} size={iconSize} />
          </div>
        )}
        {children}
        {showInfoAffordance && (
          <span
            className={classNames(styles['LinkButton-infoIconWrapper'], {
              [styles['LinkButton-infoIconWrapper--iconOnly']]: !children,
            })}
          >
            <Icon
              name="info_outline"
              type="outlined"
              size={12}
              className={styles['LinkButton-infoIcon']}
              aria-hidden="true"
              data-test="DesignSystem-LinkButton--Info-Icon"
            />
          </span>
        )}
      </>
      {tooltip && !isIconOnly && (
        <span id={tooltipIdRef.current as string} className={styles['LinkButton-srOnly']}>
          {tooltip}
        </span>
      )}
    </button>
  );
});

export const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>((props, ref) => {
  const { tooltip } = props;

  return tooltip ? (
    <Tooltip tooltip={tooltip} aria-hidden="true" triggerClass="flex-grow-0">
      <LinkButtonElement {...props} ref={ref} />
    </Tooltip>
  ) : (
    <LinkButtonElement {...props} ref={ref} />
  );
});

LinkButton.displayName = 'LinkButton';
LinkButton.defaultProps = {
  size: 'regular',
  type: 'button',
  iconAlign: 'left',
};

export default LinkButton;
