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
   * Will be wrapped in a `Card` container
   */
  children: React.ReactNode;
}

export const Card: React.FunctionComponent<CardProps> = props => {
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

export default Card;
