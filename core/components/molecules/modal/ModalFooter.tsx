import * as React from 'react';
import classNames from 'classnames';
import { OverlayFooter } from '@/components/molecules/overlayFooter';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ModalFooterProps extends BaseProps {
  open?: boolean;
  children: React.ReactNode;
  stickToBottom?: boolean;
  seperator?: boolean;
  inSidesheet?: boolean;
}

export const ModalFooter = (props: ModalFooterProps) => {
  const { open, children, className, seperator } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      ['Modal-footer']: true,
      ['Modal-footer--withSeperator']: seperator,
    },
    className
  );

  return (
    <OverlayFooter {...baseProps} open={open} className={classes}>
      {children}
    </OverlayFooter>
  );
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
