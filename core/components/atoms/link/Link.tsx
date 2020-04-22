import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkProps {
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
  rel?: string;
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
    ...rest
  } = props;

  const classes = classNames({
    Link: true,
  });

  return (
    <GenericText className={classes} componentType="a" {...rest}>
      {children}
    </GenericText>
  );
};

Link.displayName = 'Link';

export default Link;
