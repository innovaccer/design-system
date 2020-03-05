import * as React from 'react';
import classNames from 'classnames';

type columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

interface IProps {
  size?: columns;
  sizeS?: columns | 's';
  sizeM?: columns | 'm';
  sizeL?: columns | 'l';
  sizeXL?: columns | 'xl';
}

const Column: React.FunctionComponent<IProps> = props => {
  const { size, sizeS, sizeM, sizeL, sizeXL } = props;

  const classes = classNames({
    ['Col']: !size,
    ['Col--s']: sizeS && sizeS === 's',
    ['Col--m']: sizeM && sizeM === 'm',
    ['Col--l']: sizeL && sizeL === 'l',
    ['Col--xl']: sizeXL && sizeXL === 'xl',
    [`Col--${size}`]: size,
    [`Col--s-${sizeS}`]: sizeS && sizeS !== 's',
    [`Col--m-${sizeM}`]: sizeM && sizeM !== 'm',
    [`Col--l-${sizeL}`]: sizeL && sizeL !== 'l',
    [`Col--xl-${sizeXL}`]: sizeXL && sizeXL !== 'xl'
  });
  return <div className={classes}>{props.children}</div>;
};

export default Column;
