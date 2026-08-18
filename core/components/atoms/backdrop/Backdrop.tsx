import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/backdrop.module.css';

const { useEffect, useState } = React;

export interface BackdropProps extends BaseProps {
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * Specify zIndex Value
   */
  zIndex?: number;
}

/**
 * ### Note:
 * **   The backdrop component is used to provide emphasis on a particular element or parts of it. <br/>**
 * The backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs, and more. <br/>
 * In its simplest form, the backdrop component will add a dimmed layer over your application.
 */

export const Backdrop: React.FC<BackdropProps> = (props) => {
  const { className } = props;

  const baseProps = extractBaseProps(props);

  const [savedBodyOverflow, setBodyOverflow] = useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(props.open);
  const [animate, setAnimate] = React.useState<boolean>(props.open);

  const classes = classNames(
    {
      [styles.Backdrop]: true,
      [styles['Backdrop--open']]: open,
      [styles['Backdrop-animation--open']]: animate,
      [styles['Backdrop-animation--close']]: !animate,
    },
    className
  );

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
    <div
      data-test="DesignSystem-Backdrop"
      data-layer={true}
      data-opened={open}
      {...baseProps}
      className={classes}
      style={{ zIndex: props.zIndex }}
    />,
    document.body
  );

  return BackdropElement;
};

Backdrop.displayName = 'Backdrop';

export default Backdrop;
