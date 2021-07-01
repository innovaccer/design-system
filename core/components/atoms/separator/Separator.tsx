import * as React from 'react';
import classNames from 'classnames';

export interface SeparatorProps {
  className?: string;
}

export const Separator = (props: SeparatorProps) => {
  const {
    className,
  } = props;

  const classes = classNames({
    ['Separator']: true,
  }, className);

  return (
      <span data-test="DesignSystem-Separator" className={classes}/>
  );
};

Separator.displayName = 'Separator';

export default Separator;
