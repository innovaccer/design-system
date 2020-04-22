import * as React from 'react';
import classNames from 'classnames';

export type Shadow = 'light' | 'medium' | 'dark';

export interface CardProps {
  /**
   * Shadow of the `Card`
   * @default "medium"
   */
  shadow?: Shadow;
  /**
   * Adds CSS to `card` component
   */
  style?: React.CSSProperties;
  /**
   * Will be wrapped in a `Card` container
   */
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const {
    shadow = 'medium',
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

Card.displayName = 'Card';

export default Card;
