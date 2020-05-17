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
   * Adds CSS to `Card` component
   */
  style?: React.CSSProperties;
  /**
   * Adds className to `Card` component
   */
  className?: string;
  /**
   * Will be wrapped in a `Card` container
   */
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const {
    shadow = 'medium',
    children,
    className,
    ...rest
  } = props;

  const classes = classNames({
    Card: true,
    [`Card--shadow-${shadow}`]: shadow,
    [`${className}`]: className
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
