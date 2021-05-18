import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AlertComponent from './alertComponent';

export type doctype = Document;
let timerIds: NodeJS.Timeout[] = [];
const AlertContainer = (props: { pubSubService: any; config: any }) => {
  const { pubSubService, config = { position: 'left' } } = props;
  const [alerts, setAlerts] = React.useState<any[]>([]);
  const renderAlerts = () => (alerts.length > 0 ? alerts.map(renderSingleAlert) : null);
  const renderSingleAlert = (alert: { toastId: any; onClose: any; dismissIn: any }, i: number) => {
    const { toastId, onClose, dismissIn = config.dismissIn } = alert;
    let calcBottom: any = undefined;
    let calcTop: any = undefined;
    if (i === 0) {
      timerIds.every(timeoutId => clearTimeout(timeoutId));
      timerIds = [];
      calcBottom = 32;
    } else if (i === 1) {
      calcTop = 20;
    } else {
      calcTop = -10;
    }
    if (dismissIn && i === 0) {
      timerIds.push(setTimeout(() => dismiss(toastId, onClose), dismissIn));
    }
    return (
      <AlertComponent
        bottom={calcBottom}
        top={calcTop}
        leftOrRight={config.position}
        wrapId={`alert-toast__${toastId}`}
        alert={alert}
        key={toastId}
        wrapClassName="alertService"
        onClose={() => dismiss(toastId, onClose)}
      />
    );
  };

  const addToast = (toast: any, toastId: any) => {
    const nalerts:any[] = alerts.slice();
    nalerts.unshift({ ...toast, toastId });
    setAlerts(nalerts);
  };
  const removeToast = (toastId: number) => {
    const ralerts:any[] = alerts.slice().filter((alert:any) => alert.toastId !== toastId);
    setAlerts(ralerts);
  };

  React.useEffect(() => {
    const addUnsub = pubSubService.subscribe('add-toast', addToast);
    const removeUnsub = pubSubService.subscribe('remove-toast', removeToast);
    return () => {
      addUnsub();
      removeUnsub();
    };
  });
  const dismiss = (id: number, onClose: () => void) => {
    removeToast(id);
    return onClose ? onClose() : null;
  };

  return (
    <ReactCSSTransitionGroup transitionName="alertService" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      {renderAlerts()}
    </ReactCSSTransitionGroup>
  );
};

export default AlertContainer;
