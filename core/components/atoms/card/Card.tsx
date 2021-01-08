import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export type Shadow = 'none' | 'light' | 'medium' | 'dark';

export interface CardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Shadow of the `Card`
   * @default 'medium'
   */
  shadow?: Shadow;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
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
    <div ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
