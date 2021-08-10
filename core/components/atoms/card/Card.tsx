import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export type Shadow = 'none' | 'default' | 'light' | 'medium' | 'dark';

export interface CardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Shadow of the `Card`
   * @default 'medium'
   *
   * **Shadow `light`, `medium` and `dark` will be soon deprecated.**
   */
  shadow?: Shadow;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { shadow = 'default', children, className, ...rest } = props;

  const classes = classNames({
    Card: true,
    [`Card--shadow-${shadow}`]: shadow,
    [`${className}`]: className,
  });

  return (
    <div ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
