import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import styles from '@css/components/cardSubdued.module.css';

type Border = 'top' | 'left' | 'right' | 'bottom';

export interface CardSubduedProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Border of the `Subdued Card`
   */
  border?: Border;
}

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
