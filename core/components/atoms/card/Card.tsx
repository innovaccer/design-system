import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export type Shadow = 'none' | 'default' | 'light' | 'medium' | 'dark' | 'shadow10' | 'shadow20' | 'shadow30';

export interface CardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Shadow of the `Card`
   *
   * **Shadow `default`, `light`, `medium` and `dark` will be soon deprecated and it will map to `shadow10` automatically.**
   *
   */
  shadow?: Shadow;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { shadow = 'shadow10', children, className, ...rest } = props;

  const classes = classNames({
    Card: true,
    [`Card--${shadow}`]: shadow,
    [`${className}`]: className,
  });

  return (
    <div data-test="DesignSystem-Card" ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
Card.defaultProps = {
  shadow: 'shadow10',
};

export default Card;
