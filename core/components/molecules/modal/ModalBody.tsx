import * as React from 'react';
import classNames from 'classnames';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/modal.module.css';

export interface ModalBodyProps extends BaseProps {
  children: React.ReactNode;
  stickFooter: boolean;
  withFooter: boolean;
}

export const ModalBody = (props: ModalBodyProps) => {
  const { children, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Modal-body']]: true,
      [styles['Modal-body--withMargin']]: true,
    },
    className
  );

  return (
    <OverlayBody {...baseProps} stickFooter={true} className={classes}>
      {children}
    </OverlayBody>
  );
};

ModalBody.defaultProps = {
  stickFooter: true,
  withFooter: true,
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
