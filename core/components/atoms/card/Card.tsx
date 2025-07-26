import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import styles from '@css/components/card.module.css';

export type Shadow = 'none' | 'default' | 'light' | 'medium' | 'dark' | 'shadow10' | 'shadow20' | 'shadow30';

export type CardProps = {
  /**
   * Shadow of the `Card`
   *
   * **Shadow `default`, `light`, `medium` and `dark` will be soon deprecated and it will map to `shadow10` automatically.**
   * @default shadow10
   *
   */
  shadow?: Shadow;
  /**
   * React Node to be rendered inside `Card`
   */
  children?: React.ReactNode;
} & BaseProps &
  BaseHtmlProps<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { shadow = 'shadow10', children, className, ...rest } = props;

  const classes = classNames(
    {
      [styles.Card]: true,
      [styles[`Card--${shadow}`]]: shadow,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Card" ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
