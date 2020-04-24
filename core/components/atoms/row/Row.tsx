import * as React from 'react';
import classNames from 'classnames';

type RowColumns = '1' | '2' | '3' | '4' | '5' | '6';

export interface RowProps {
  group?: RowColumns;
  groupXS?: RowColumns;
  groupS?: RowColumns;
  groupM?: RowColumns;
  groupL?: RowColumns;
  groupXL?: RowColumns;
  children?: React.ReactNode;
  utilityClass?: string;
}

export const Row = (props: RowProps) => {
  const { group, groupXS, groupS, groupM, groupL, groupXL, utilityClass } = props;

  const classes = classNames({
    Row: true,
    [`RowGroup--${group}`]: group,
    [`RowGroup--xs-${groupXS}`]: groupXS,
    [`RowGroup--s-${groupS}`]: groupS,
    [`RowGroup--m-${groupM}`]: groupM,
    [`RowGroup--l-${groupL}`]: groupL,
    [`RowGroup--xl-${groupXL}`]: groupXL,
    [`${utilityClass}`]: utilityClass
  });
  return <div className={classes}>{props.children}</div>;
};

Row.displayName = 'Row';

export default Row;
