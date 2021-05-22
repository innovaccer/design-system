import * as React from 'react';
import { CSSProperties } from 'react';
import { Toast } from '@/index';
import { AlertServiceToastProps } from './alertContainer';

interface AlertProps {
  onDismiss: (toastId: string, onClose?: () => void | undefined) => void;
  alert: AlertServiceToastProps;
  wrapId?: string;
  wrapClassName?: string;
  bottom?: number;
  top?: number;
  addingNew?: boolean;
  leftOrRight: string;
  indexNumber: number;
  zIndex: number;
  removingNew: boolean;
}
const AlertComponent = (props: AlertProps) => {
  const {
    alert,
    wrapId,
    wrapClassName,
    bottom,
    top,
    leftOrRight,
    onDismiss,
    indexNumber,
    addingNew,
    zIndex,
    removingNew
  } = props;
  const { appearance, toastId, onClose, dismissIn, toastClassName, autoHiderBar } = alert;
  const { style: autoHiderBarStyle, ...autoHiderBarProps } = autoHiderBar;
  const [exit, setExit] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState<any>(null);
  const toastStyle: CSSProperties = {
    position: 'fixed',
    zIndex: zIndex + 50,
    [leftOrRight]: '24px'
  };

  if (top) {
    toastStyle.top = `calc(100% - ${top}px)`;
  } else if (bottom) {
    toastStyle.bottom = `${bottom}px`;
  }

  const handlePauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleCloseToast = () => {
    handlePauseTimer();
    setExit(true);
    onDismiss(toastId, onClose);
  };

  const handleStartTimer = () => {
    if (dismissIn && intervalId === null) {
      const intId: NodeJS.Timeout = setInterval(() => {
        setWidth(prev => {
          if (prev < 100) {
            return prev + 0.5;
          }
          clearInterval(intId);
          return prev;
        });
      }, dismissIn / 200);
      setIntervalId(intId);
    }
  };

  React.useEffect(() => {
    if (indexNumber !== 0 && dismissIn) {
      handlePauseTimer();
    } else if (!addingNew && !removingNew && width === 100 && indexNumber === 0) {
      handleCloseToast();
    } else if (indexNumber === 0 && dismissIn) {
      handleStartTimer();
  //    return () => clearInterval(intervalId);
    }
  }, [indexNumber]);

  React.useEffect(() => {
    if (width === 100 && indexNumber === 0) {
      !addingNew && !removingNew ? handleCloseToast() : setWidth(80);
    }
  }, [width]);

  return (
    <div
      id={wrapId}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`${wrapClassName} Toast--${appearance} ${addingNew ? 'slidedown' : ''} ${exit ? 'exit' : ''} ${
        removingNew && indexNumber !== 0 ? 'slideup' : ''
      }`}
      style={toastStyle}
    >
      <Toast {...alert} onClose={handleCloseToast} data-test={wrapId} className={toastClassName} />
      {autoHiderBar && dismissIn && indexNumber === 0 && (
        <div
          {...autoHiderBarProps}
          style={{
            width: `${width}%`,
            ...autoHiderBarStyle
          }}
        />
      )}
    </div>
  );
};

export default AlertComponent;
