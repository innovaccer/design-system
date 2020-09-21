import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Shadow = 'none' | 'light' | 'medium' | 'dark';

export interface CardProps extends BaseProps {
  /**
   * Shadow of the `Card`
   */
  shadow: Shadow;
  /**
   * Will be wrapped in a `Card` container
   */
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const {
    shadow,
    children,
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Card: true,
    [`Card--shadow-${shadow}`]: shadow,
    [`${className}`]: className
  });

  return (
    <div {...baseProps} className={classes}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';
Card.defaultProps = {
  shadow: 'medium'
};

export default Card;
