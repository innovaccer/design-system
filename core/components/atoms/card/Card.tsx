import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';

export type Shadow = 'light' | 'medium' | 'dark';

export interface CardProps extends BaseProps {
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
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
