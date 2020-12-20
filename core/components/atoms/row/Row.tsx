import * as React from 'react';
import classNames from 'classnames';
import { BaseContainerProps } from '@/utils/types';

export type RowProps = BaseContainerProps;

export const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classes = classNames({
    Row: true,
    [`${className}`]: className
  });
  return (
    <div
      data-test="DesignSystem-Row"
      ref={ref}
      {...rest}
      className={classes}
    >
      {children}
    </div>
  );
});

Row.displayName = 'Row';

export default Row;
