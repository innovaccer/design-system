import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ModalFooterProps extends BaseProps {
  children: React.ReactElement[];
}

export const ModalFooter = (props: ModalFooterProps) => {
  const { children, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-footer': true
  }, className);

  return (
    <div data-test="DesignSystem-ModalFooter" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
