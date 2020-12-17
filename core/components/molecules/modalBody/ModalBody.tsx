import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ModalBodyProps extends BaseProps {
  children: React.ReactNode;
}

export const ModalBody = (props: ModalBodyProps) => {
  const { children, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-body': true,
  }, className);

  return (
    <div data-test="DesignSystem-ModalBody" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
