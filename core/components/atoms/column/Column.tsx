import * as React from 'react';
import classNames from 'classnames';
import { BaseContainerProps } from '@/utils/types';

type Columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto'
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps extends Omit<BaseContainerProps, 'size'> {
  /**
   * Default size of Column
   */
  size?: Columns;
  /**
   * Size of Column if the viewport is between 0 to 575 pixels wide.
   */
  sizeXS?: Columns;
  /**
   * Size of Column if the viewport is between 576 and 767 pixels wide.
   */
  sizeS?: Columns;
  /**
   * Size of Column if the viewport is between 768 and 991 pixels wide.
   */
  sizeM?: Columns;
  /**
   * Size of Column if the viewport is between 992 and 1199 pixels wide.
   */
  sizeL?: Columns;
  /**
   * Size of Column if the viewport is 1200 pixels wide or wider.
   */
  sizeXL?: Columns;
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>((props, ref) => {
  const {
    size,
    sizeXS,
    sizeS,
    sizeM,
    sizeL,
    sizeXL,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames({
    ['Col']: true,
    [`Col--${size}`]: size,
    [`Col--xs-${sizeXS}`]: sizeXS,
    [`Col--s-${sizeS}`]: sizeS,
    [`Col--m-${sizeM}`]: sizeM,
    [`Col--l-${sizeL}`]: sizeL,
    [`Col--xl-${sizeXL}`]: sizeXL,
    [`${className}`]: className
  });

  return <div ref={ref} {...rest} className={classes}>{children}</div>;
});

Column.displayName = 'Column';

export default Column;
