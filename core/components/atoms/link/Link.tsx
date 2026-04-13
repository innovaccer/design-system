import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import { Icon, Tooltip } from '@/index';
import styles from '@css/components/link.module.css';
import uidGenerator from '@/utils/uidGenerator';

type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type LinkAppearance = 'default' | 'subtle';
type LinkSize = 'regular' | 'tiny';

export interface LinkProps extends BaseProps, OmitNativeProps<HTMLAnchorElement, 'onClick'> {
  /**
   * HTML ID of `Link`
   */
  id?: string;
  /**
   * Color of `Link`
   */
  appearance: LinkAppearance;
  /**
   * Size of `Link`
   */
  size: LinkSize;
  /**
   * Disables the `Link`, making it unable to be clicked
   */
  disabled?: boolean;
  /**
   * The URL to navigate to when the `Link` is clicked
   */
  href?: string;
  /**
   * Specifies where to open the navigated document
   */
  target?: LinkTarget;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: string;
  /**
   * Prompts the user to save the linked URL instead of navigating to it. Can be used with or without a value
   */
  download?: string;
  /**
   * Hints at the human language of the linked URL
   */
  hreflang?: string;
  /**
   * Handler to be called when `Link` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /**
   * Handler to be called when key is pressed on `Link`
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /**
   * Adds title to `Link`
   */
  tooltip?: string;
  /**
   * Element to be rendered
   */
  children: React.ReactNode;
}

/**
 *
 * The choice to use the appearance `subtle` property for the **Link** component, while using the `subtle` boolean prop for the **LinkButton** component, is based on the different roles of typography and action components.
 * - The **Link** component is primarily a typography element. Typography components use the "appearance" property to define their visual style, ensuring consistency and predictability when styling text-based elements.
 * - In contrast, the **LinkButton** component is an action component. Action components use "boolean props" to indicate variations in their behavior and appearance. Therefore, the **LinkButton** uses the `subtle` boolean prop to signify a specific visual style that aligns with other button components.
 */

const LinkElement = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>((props, ref) => {
  const {
    children,
    className,
    appearance,
    size,
    disabled,
    href,
    target,
    rel,
    download,
    hreflang,
    onClick,
    onKeyDown,
    tooltip,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props;

  const isAnchor = !!href;

  const tooltipIdRef = React.useRef<string | null>(null);
  if (tooltipIdRef.current === null && tooltip) {
    tooltipIdRef.current = `Link-tooltip-${uidGenerator()}`;
  }

  const computedAriaDescribedBy =
    [ariaDescribedBy, tooltip ? tooltipIdRef.current : undefined].filter(Boolean).join(' ') || undefined;

  const computedAriaLabel = props['aria-label'] || undefined;

  const useAriaDisabled = Boolean(disabled && tooltip);
  const nativeDisabled = useAriaDisabled ? undefined : disabled;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  const classes = classNames(
    {
      [styles.Link]: true,
      [styles[`Link--${size}`]]: size,
      [styles[`Link--${appearance}`]]: appearance,
      [styles[`Link--${appearance}-disabled`]]: disabled,
      [styles['Link--button-reset']]: !isAnchor,
    },
    className
  );

  const activeHref = disabled ? undefined : href;

  const elementProps = isAnchor
    ? { componentType: 'a', href: activeHref, target, rel, download, hreflang }
    : { componentType: 'button', type: 'button', disabled: nativeDisabled };

  const showInfoAffordance = disabled && tooltip;

  return (
    <GenericText
      data-test="DesignSystem-Link"
      ref={ref}
      className={classes}
      tabIndex={disabled && !tooltip ? -1 : 0}
      aria-disabled={disabled}
      aria-describedby={computedAriaDescribedBy}
      aria-label={computedAriaLabel}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isAnchor ? 'link' : undefined}
      {...rest}
      {...elementProps}
    >
      <span className={styles['Link-wrapper']}>
        <span className={styles['Link-text']}>{children}</span>
        {showInfoAffordance && (
          <span className={styles['Link-infoIconWrapper']}>
            <Icon
              name="info_outline"
              type="outlined"
              size={12}
              className={styles['Link-infoIcon']}
              aria-hidden="true"
              data-test="DesignSystem-Link--Info-Icon"
            />
          </span>
        )}
      </span>
      {tooltip && (
        <span id={tooltipIdRef.current as string} className={styles['Link-srOnly']}>
          {tooltip}
        </span>
      )}
    </GenericText>
  );
});

LinkElement.displayName = 'LinkElement';

export const Link = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>((props, ref) => {
  const { tooltip } = props;

  return tooltip ? (
    <Tooltip tooltip={tooltip} aria-hidden={true} triggerClass="d-inline" wrapperType="span">
      <LinkElement {...props} ref={ref} />
    </Tooltip>
  ) : (
    <LinkElement {...props} ref={ref} />
  );
});

Link.displayName = 'Link';

Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false,
};

export default Link;
