import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

type RowColumns = '1' | '2' | '3' | '4' | '5' | '6';

export interface RowProps extends BaseProps {
  group?: RowColumns;
  groupXS?: RowColumns;
  groupS?: RowColumns;
  groupM?: RowColumns;
  groupL?: RowColumns;
  groupXL?: RowColumns;
  children?: React.ReactNode;
  className?: string;
}

export const Row = (props: RowProps) => {
  const { group, groupXS, groupS, groupM, groupL, groupXL, className, children } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Row: true,
    [`RowGroup--${group}`]: group,
    [`RowGroup--xs-${groupXS}`]: groupXS,
    [`RowGroup--s-${groupS}`]: groupS,
    [`RowGroup--m-${groupM}`]: groupM,
    [`RowGroup--l-${groupL}`]: groupL,
    [`RowGroup--xl-${groupXL}`]: groupXL,
    [`${className}`]: className
  });
  return <div {...baseProps} className={classes}>{children}</div>;
};

Row.displayName = 'Row';

export default Row;
