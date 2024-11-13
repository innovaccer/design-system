import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import styles from '@css/components/link.module.css';

type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type LinkAppearance = 'default' | 'subtle';
type LinkSize = 'regular' | 'tiny';

export interface LinkProps extends BaseProps, OmitNativeProps<HTMLLinkElement, 'onClick'> {
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
  disabled: boolean;
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
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
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

export const Link = (props: LinkProps) => {
  const { children, className, appearance, size, disabled, ...rest } = props;

  const classes = classNames(
    {
      [styles.Link]: true,
      [styles[`Link--${size}`]]: size,
      [styles[`Link--${appearance}`]]: appearance,
      [styles[`Link--${appearance}-disabled`]]: disabled,
    },
    className
  );

  return (
    <GenericText
      data-test="DesignSystem-Link"
      className={classes}
      componentType="a"
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {children}
    </GenericText>
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false,
};

export default Link;
