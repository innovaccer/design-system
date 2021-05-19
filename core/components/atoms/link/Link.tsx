import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, OmitNativeProps } from '@/utils/types';

type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type Appearance = 'default' | 'subtle';
type Size = 'regular' | 'tiny';

export interface LinkProps extends BaseProps, OmitNativeProps<HTMLLinkElement, 'onClick'> {
  /**
   * HTML ID of `Link`
   */
  id?: string;
  /**
   * Color of `Link`
   */
  appearance: Appearance;
  /**
   * Size of `Link`
   */
  size: Size;
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

export const Link = (props: LinkProps) => {
  const {
    children,
    className,
    appearance,
    size,
    disabled,
    ...rest
  } = props;

  const classes = classNames({
    Link: true,
    ['Link--disabled']: disabled,
    [`Link--${size}`]: size,
    [`Link--${appearance}`]: appearance
  }, className);

  return (
    <GenericText data-test="DesignSystem-Link" className={classes} componentType="a" {...rest}>
      {children}
    </GenericText>
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false
};

export default Link;
