import * as React from 'react';
import { CSSProperties } from 'react';
import { Toast } from '../../index';

interface AlertProps {
  onDismiss: any;
  alert?: any;
  wrapId?: any;
  wrapClassName?: any;
  bottom?: any;
  top?: any;
  addingNew?: any;
  leftOrRight: string;
  indexNumber: number;
  zIndex: number;
  setSlideUp: any;
  slidingUp: boolean;
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
    setSlideUp,
    slidingUp
  } = props;
  const {
    title,
    appearance,
    toastId,
    message,
    actions,
    onClose,
    dismissIn,
    className,
    dataTest,
    autoHiderBar,
    transitionDelay
  } = alert;
  const [exit, setExit] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(null);
  const handlePauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  const handleCloseToast = () => {
    handlePauseTimer();
    setExit(true);
    setSlideUp(true);
    setTimeout(() => {
      onDismiss(toastId, onClose);
    }, transitionDelay);
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
    } else if (width === 100 && indexNumber === 0) {
      handleCloseToast();
    } else if (indexNumber === 0 && dismissIn) {
      handleStartTimer();
      return () => clearInterval(intervalId);
    }
  }, [indexNumber]);

  React.useEffect(() => {
    if (width === 100 && indexNumber === 0) {
      handleCloseToast();
    }
  }, [width]);
  const style: CSSProperties = {
    position: 'fixed',
    zIndex: zIndex + 50,
    [leftOrRight]: '24px'
  };
  if (top) {
    style.top = `calc(100% - ${top}px)`;
  } else if (bottom) {
    style.bottom = `${bottom}px`;
  }
  return (
    <div
      id={wrapId}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`${wrapClassName} toast-item Toast--${appearance} ${addingNew ? 'slidedown' : ''} ${
        exit ? 'exit' : ''
      } ${slidingUp && indexNumber !== 0 ? 'slideup' : ''}`}
      style={style}
    >
      <Toast
        title={title}
        message={message}
        appearance={appearance}
        onClose={handleCloseToast}
        actions={actions}
        data-test={dataTest}
        className={className}
      />
      {autoHiderBar && dismissIn && indexNumber === 0 && (
        <div
          style={{
            width: `${width}%`,
            height: '2px',
            backgroundColor: 'black'
          }}
        />
      )}
    </div>
  );
};
export default AlertComponent;
