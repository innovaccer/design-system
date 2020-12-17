import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ModalFooterProps extends BaseProps {
  open?: boolean;
  children: React.ReactNode;
}

export const ModalFooter = (props: ModalFooterProps) => {
  const { open, children, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames({
    'Modal-footer': true
  }, className);

  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (open) {
      if (wrapperRef.current) {
        const secondaryBtns: NodeListOf<HTMLButtonElement> = wrapperRef.current?.querySelectorAll('.Button--basic');
        const secondaryBtn = secondaryBtns[secondaryBtns.length - 1];
        if (secondaryBtn) {
          window.requestAnimationFrame(() => secondaryBtn.focus({ preventScroll: true }));
        }
      }
    }
  }, [open]);

  return (
    <div data-test="DesignSystem-ModalFooter" ref={wrapperRef} {...baseProps} className={classes}>
      {children}
    </div>
  );
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
