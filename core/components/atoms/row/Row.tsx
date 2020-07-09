import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface RowProps extends BaseProps {
  children?: React.ReactNode;
}

export const Row = (props: RowProps) => {
  const { className, children } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Row: true,
    [`${className}`]: className
  });
  return <div {...baseProps} className={classes}>{children}</div>;
};

Row.displayName = 'Row';

export default Row;
