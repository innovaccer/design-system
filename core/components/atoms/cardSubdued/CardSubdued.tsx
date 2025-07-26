import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import styles from '@css/components/cardSubdued.module.css';

type Border = 'top' | 'left' | 'right' | 'bottom';

export type CardSubduedProps = {
  /**
   * Border of the `Subdued Card`
   */
  border?: Border;
  /**
   * React Node to be rendered inside `CardSubdued`
   */
  children?: React.ReactNode;
} & BaseProps &
  BaseHtmlProps<HTMLDivElement>;

export const CardSubdued = React.forwardRef<HTMLDivElement, CardSubduedProps>((props, ref) => {
  const { border, children, className, ...rest } = props;

  const classes = classNames(
    {
      [styles.CardSubdued]: true,
      [styles[`CardSubdued--${border}`]]: border,
    },
    className
  );

  return (
    <div data-test="DesignSystem-CardSubdued" ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

CardSubdued.displayName = 'CardSubdued';

export default CardSubdued;
