import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkProps extends BaseProps {
  /**
   * HTML ID of `Link`
   */
  id?: string;
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
   * @type {React.ReactNode}
   */
  children?: React.ReactNode;
}

export const Link: React.FunctionComponent<LinkProps> = props => {
  const {
    children,
    className,
    ...rest
  } = props;

  const classes = classNames({
    Link: true,
  }, className);

  return (
    <GenericText className={classes} componentType="a" {...rest}>
      {children}
    </GenericText>
  );
};

Link.displayName = 'Link';

export default Link;
