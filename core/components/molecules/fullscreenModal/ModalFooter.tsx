import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Button } from '@/index';
import { ButtonProps } from '@/index.type';

export interface ModalFooterProps extends BaseProps {
  open?: boolean;
  actions: ButtonProps[];
}

export const ModalFooter = (props: ModalFooterProps) => {
  const { open, actions } = props;
  const baseProps = extractBaseProps(props);
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
    <div ref={wrapperRef} {...baseProps} className="d-flex">
      {actions.map(({ label, ...options }, index) => {
        return <Button {...options} key={index} />;
      })}
    </div>
  );
};

ModalFooter.defaultProps = {
  actions: []
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
