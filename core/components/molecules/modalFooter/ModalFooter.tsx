import * as React from 'react';
import classNames from 'classnames';

interface IModalFooterProps {
  children: React.ReactElement[];
}

const ModalFooter: React.FunctionComponent<IModalFooterProps> = props => {
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
