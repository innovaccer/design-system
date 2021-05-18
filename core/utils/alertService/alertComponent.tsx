import * as React from 'react';
import { CSSProperties } from 'react';
import { Toast } from '../../index';

interface AlertProps {
  onClose?: any;
  alert?: any;
  wrapId?: any;
  wrapClassName?: any;
  bottom?: any;
  top?: any;
  leftOrRight: string;
}
const AlertComponent = (props: AlertProps) => {
  const { alert, wrapId, wrapClassName, bottom, top, leftOrRight, onClose } = props;
  const { title, appearance = 'alert', toastId, message, actions, className, dataTest } = alert;

  const style: CSSProperties = {
    position: 'fixed',
    zIndex: toastId + 50,
    [leftOrRight]: '24px'
  };
  if (top) {
    style.top = `calc(100% - ${top}px)`;
  } else if (bottom) {
    style.bottom = `${bottom}px`;
  }
  return (
    <div id={wrapId} className={wrapClassName} style={style}>
      <Toast
        title={title}
        message={message}
        appearance={appearance}
        onClose={onClose}
        actions={actions}
        data-test={dataTest}
        className={className}
      />
    </div>
  );
};
export default AlertComponent;
