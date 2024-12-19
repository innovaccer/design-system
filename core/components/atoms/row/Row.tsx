import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/column.module.css';

export type RowProps = BaseProps & BaseHtmlProps<HTMLDivElement>;

export const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classes = classNames(
    {
      [styles.Row]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Row" ref={ref} {...rest} className={classes}>
      {children}
    </div>
  );
});

Row.displayName = 'Row';

export default Row;
