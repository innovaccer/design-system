import * as React from 'react';
import classNames from 'classnames';

export type Shadows = 'light' | 'medium' | 'dark';

export interface ICardProps {
  shadow?: Shadows;
  style?: React.CSSProperties;
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
