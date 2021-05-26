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

export const Backdrop: React.FC<BackdropProps> = props => {
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
    document.body.style.setProperty('overflow', 'hidden', 'important');
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = savedBodyOverflow || '';
    setBodyOverflow(null);
  };

  useEffect(() => {
    if (props.open) {
      setBodyOverflow(document.body.style.overflow);
      disableBodyScroll();
      setOpen(true);
      setAnimate(true);
    }
    if (!props.open) {
      window.setTimeout(() => {
        setOpen(false);
      }, 120);
      setAnimate(false);
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  }, [props.open]);

  const BackdropElement = ReactDOM.createPortal(
    (
      <div data-test="DesignSystem-Backdrop" data-layer={true} {...baseProps} className={classes}  />
    ),
    document.body
  );

  return BackdropElement;
};

Backdrop.displayName = 'Backdrop';

export default Backdrop;
