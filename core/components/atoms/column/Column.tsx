import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

type Columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

export interface ColumnProps extends BaseProps {
  size?: Columns;
  sizeXS?: Columns;
  sizeS?: Columns;
  sizeM?: Columns;
  sizeL?: Columns;
  sizeXL?: Columns;
  children?: React.ReactNode;
  className?: string;
}

export const Column = (props: ColumnProps) => {
  const {
    size,
    sizeXS,
    sizeS,
    sizeM,
    sizeL,
    sizeXL,
    className,
    children
  } = props;

  const baseProps = extractBaseProps(props);

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

  return <div {...baseProps} className={classes}>{children}</div>;
};

Column.displayName = 'Column';

export default Column;
