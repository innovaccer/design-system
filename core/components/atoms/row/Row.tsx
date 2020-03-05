import * as React from 'react';
import classNames from 'classnames';

type RowColumns = '1' | '2' | '3' | '4' | '5' | '6';

interface IProps {
  group?: RowColumns;
  groupS?: RowColumns;
  groupM?: RowColumns;
  groupL?: RowColumns;
  groupXL?: RowColumns;
}

const Row: React.FunctionComponent<IProps> = props => {
  const { group, groupS, groupM, groupL, groupXL } = props;

  const classes = classNames({
    Row: true,
    [`RowCols--${group}`]: group,
    [`RowCols--s-${groupS}`]: groupS,
    [`RowCols--m-${groupM}`]: groupM,
    [`RowCols--l-${groupL}`]: groupL,
    [`RowCols--xl-${groupXL}`]: groupXL
  });
  return <div className={classes}>{props.children}</div>;
};

export default Row;
