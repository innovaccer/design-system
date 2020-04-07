import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
const { useEffect, useState } = React;
import Backdrop from '@/components/atoms/backdrop';
import OutsideClick from '@/components/atoms/outsideClick';

export type Dimension = 'small' | 'medium' | 'large';

export interface ModalProps {
  /**
   * Callback for `modal` close event
   */
  onClose: (reason?: string, event?: Event) => void;
  /**
   * Closes `modal` on outside click
   */
  backdrop?: boolean;
  /**
   * Closes `modal` on pressing escape key
   */
  closeOnEscape?: boolean;
  /**
   * Dimension of `modal`
   * @default "small"
   */
  dimension?: Dimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * Element to be rendered
   */
  children?: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const {
    dimension = 'small',
    open,
    children,
    onClose,
    backdrop
  } = props;
  const [modalClasses, setClasses] = useState<string>('Modal');

  const classes = classNames({
    Modal: true,
    [`Modal--${dimension}`]: dimension,
  });

  useEffect(() => {
    if (open) {
      const newModalClasses = `${classes} Modal--open Modal-animation--open`;
      setClasses(newModalClasses);
    }
    if (!open) {
      const newModalClasses = `${classes} Modal--open Modal-animation--close`;
      setClasses(newModalClasses);
      setTimeout(() => {
        setClasses(classes);
      }, 150);
    }
  }, [open]);

  const ModalContainer = (
    <div className="Modal-container">
      <div className={modalClasses}>
        {children}
      </div>
    </div>
  );

  const ModalWrapper = backdrop ? (
    <OutsideClick onOutsideClick={(event: Event) => onClose('OutsideClick', event)}>
      {ModalContainer}
    </OutsideClick>
  ) : ModalContainer;

  const WrapperElement = ReactDOM.createPortal(
    ModalWrapper,
    document.body
  );

  return (
    <div>
      {WrapperElement}
      <Backdrop open={open} />
    </div>
  );
};

export default Modal;
