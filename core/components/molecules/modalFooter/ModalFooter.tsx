import * as React from 'react';
import classNames from 'classnames';

export interface ModalFooterProps {
  children: React.ReactElement[];
}

export const ModalFooter: React.FunctionComponent<ModalFooterProps> = props => {
  const { children } = props;

  const classes = classNames({
    'Modal-footer': true
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default ModalFooter;
