import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ModalBodyProps extends BaseProps {
  children: React.ReactNode;
  stickFooter: boolean;
  withFooter: boolean;
}

export const ModalBody = (props: ModalBodyProps) => {
  const { children, className, stickFooter, withFooter } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-body': true,
    ['Modal-body--stickFooter']: withFooter && stickFooter
  }, className);

  return (
    <div data-test="DesignSystem-ModalBody" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

ModalBody.defaultProps = {
  stickFooter: true,
  withFooter: true
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
