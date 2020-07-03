import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

const { useEffect, useState } = React;

export interface BackdropProps extends BaseProps {
  /**
   * Handles open/close state
   */
  open: boolean;
}

const Backdrop = (props: BackdropProps) => {
  const {
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const [savedBodyOverflow, setBodyOverflow] = useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(props.open);
  const [animate, setAnimate] = React.useState<boolean>(props.open);

  const classes = classNames({
    Backdrop: true,
    'Backdrop--open': open,
    'Backdrop-animation--open': animate,
    'Backdrop-animation--close': !animate
  }, className);

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
    if (props.open) {
      disableBodyScroll();
      setOpen(true);
      setAnimate(true);
    }
    if (!props.open) {
      setTimeout(() => {
        setOpen(false);
      }, 120);
      setAnimate(false);
    }

    return () => {
      enableBodyScroll();
    };
  }, [props.open]);

  const BackdropElement = ReactDOM.createPortal(
    (
      <div {...baseProps} className={classes} />
    ),
    document.body
  );

  return BackdropElement;
};

Backdrop.displayName = 'Backdrop';

export default Backdrop;
