import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';

const { useEffect, useState } = React;

export interface BackdropProps {
  /**
   * Handles open/close state
   */
  open: boolean;
}

const Backdrop = (props: BackdropProps) => {
  const [savedBodyOverflow, setBodyOverflow] = useState<string | null>(null);
  const [backdropClasses, setClasses] = useState<string>('Backdrop');
  const { open } = props;

  const classes = classNames({
    Backdrop: true
  });

  const disableBodyScroll = () => {
    if (savedBodyOverflow) {
      return;
    }

    setBodyOverflow(document.body.style.overflow);
    document.body.style.overflow = 'hidden';
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = savedBodyOverflow || 'auto';
    setBodyOverflow(null);
  };

  useEffect(() => {
    if (open) {
      disableBodyScroll();
      const newBackdropClasses = `${classes} Backdrop--open Backdrop-animation--open`;
      setClasses(newBackdropClasses);
    }
    if (!open) {
      const newBackdropClasses = `${classes} Backdrop--open Backdrop-animation--close`;
      setClasses(newBackdropClasses);
      setTimeout(() => {
        setClasses(classes);
      }, 110);
    }

    return () => {
      enableBodyScroll();
    };
  }, [open]);

  const BackdropElement = ReactDOM.createPortal(
    (
      <div className={backdropClasses} />
    ),
    document.body
  );

  return BackdropElement;
};

Backdrop.displayName = 'Backdrop';

export default Backdrop;
