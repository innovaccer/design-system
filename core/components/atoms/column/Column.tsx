import * as React from 'react';
import classNames from 'classnames';

type Columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

export interface ColumnProps {
  size?: Columns;
  sizeXS?: Columns;
  sizeS?: Columns;
  sizeM?: Columns;
  sizeL?: Columns;
  sizeXL?: Columns;
  children: React.ReactNode;
}

export const Column = (props: ColumnProps) => {
  const {
    size,
    sizeXS,
    sizeS,
    sizeM,
    sizeL,
    sizeXL
  } = props;

  const classes = classNames({
    ['Col']: true,
    [`Col--${size}`]: size,
    [`Col--xs-${sizeXS}`]: sizeXS,
    [`Col--s-${sizeS}`]: sizeS,
    [`Col--m-${sizeM}`]: sizeM,
    [`Col--l-${sizeL}`]: sizeL,
    [`Col--xl-${sizeXL}`]: sizeXL,
  });

  return <div className={classes}>{props.children}</div>;
};

Column.displayName = 'Column';

export default Column;
