import * as React from 'react';
import classNames from 'classnames';

export type Shadows = 'light' | 'medium' | 'dark';

export interface ICardProps {
  /**
   * Shadow of the `card`
   */
  shadow?: Shadows;
  /**
   * Adds CSS to `card` component
   */
  style?: React.CSSProperties;
  /**
   * Will be wrapped in a `card` container
   */
  children: React.ReactNode;
}

const Card: React.FunctionComponent<ICardProps> = props => {
  const {
    shadow,
    children,
    ...rest
  } = props;

  const classes = classNames({
    Card: true,
    [`Card--shadow-${shadow}`]: shadow,
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Card;
