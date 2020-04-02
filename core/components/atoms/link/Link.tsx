import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface ILinkProps {
  id?: string;
  href?: string;
  target?: LinkTarget;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * @type {React.ReactNode}
   */
  children?: React.ReactNode;
}

const Link: React.FunctionComponent<ILinkProps> = props => {
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

export default Link;
