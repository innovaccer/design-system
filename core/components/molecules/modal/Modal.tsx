import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
const { useEffect, useState } = React;
import Backdrop from '@/components/atoms/backdrop';
import OutsideClick from '@/components/atoms/outsideClick';

export type Dimension = 'small' | 'medium' | 'large';

export interface ModalProps {
  /**
   * Callback for `Modal` close event
   */
  onClose: (reason?: string, event?: Event) => void;
  /**
   * Closes `Modal` on outside click
   */
  backdrop?: boolean;
  /**
   * Closes `Modal` on pressing escape key
   */
  closeOnEscape?: boolean;
  /**
   * Dimension of `Modal`
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
    children,
    onClose,
    backdrop
  } = props;
  const [open, setOpen] = useState<boolean>(props.open);
  const [animate, setAnimate] = useState<boolean>(false);

  const classes = classNames({
    Modal: true,
    [`Modal--${dimension}`]: dimension,
    'Modal--open': open,
    'Modal-animation--open': animate,
    'Modal-animation--close': !animate,
  });

  useEffect(() => {
    if (props.open) {
      setOpen(true);
      setAnimate(true);
    }
    if (!props.open) {
      setTimeout(() => {
        setOpen(false);
      }, 120);
      setAnimate(false);
    }
  }, [props.open]);

  const ModalContainer = (
    <div className="Modal-container">
      <div className={classes}>
        {children}
      </div>
    </div>
  );

  const ModalWrapper = backdrop ? (
    <OutsideClick onOutsideClick={(event: Event) => open && onClose('OutsideClick', event)}>
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

Modal.displayName = 'Modal';

export default Modal;
