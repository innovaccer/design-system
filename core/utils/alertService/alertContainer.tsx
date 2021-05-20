import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AlertComponent from './alertComponent';
import { AlertServiceConfig } from './alertService';
interface AlertContainerProps {
  pubSubService: any;
  defaultConfig: AlertServiceConfig;
}
export type doctype = Document;
const AlertContainer = (props: AlertContainerProps) => {
  const { pubSubService, defaultConfig } = props;
  const { transitionDelay, position } = defaultConfig;
  const [alerts, setAlerts] = React.useState<any[]>([]);
  const [enter, setEnter] = React.useState(false);
  const [slideUp, setSlideUp] = React.useState<boolean>(false);
  const renderAlerts = () => (alerts.length > 0 ? alerts.map(renderSingleAlert) : null);
  const renderSingleAlert = (alert: { toastId: any; onClose: any; dismissIn: any }, i: number, alertsStack: any) => {
    const { toastId } = alert;
    let calcBottom: any;
    let calcTop: any;
    if (i === 0) {
      calcBottom = 32;
    } else if (i === 1) {
      calcTop = 20;
    } else {
      const prevEle = document.getElementById(`alert-toast__${alertsStack[i].toastId}`);
      const prevTop = prevEle ? prevEle.offsetHeight * 1 + prevEle.style.top.match(/\d+/g)[1] * 1 : 90 * i;
      calcTop = -prevTop;
    }
    return (
      <AlertComponent
        bottom={calcBottom}
        top={calcTop}
        zIndex={alertsStack.length - i}
        leftOrRight={position}
        wrapId={`alert-toast__${toastId}`}
        alert={{ ...defaultConfig, ...alert }}
        key={toastId}
        indexNumber={i}
        wrapClassName="alertService"
        onDismiss={dismiss}
        addingNew={enter}
        setSlideUp={setSlideUp}
        slidingUp={slideUp}
      />
    );
  };

  const addToast = (toast: any, toastId: any) => {
    setEnter(true);
    setTimeout(() => {
      const nalerts: any[] = alerts.slice();
      nalerts.unshift({ ...toast, toastId });
      setEnter(false);
      setAlerts(nalerts);
    }, transitionDelay);
  };
  const removeToast = (toastId: number) => {
    const ralerts: any[] = alerts.slice().filter((alert: any) => alert.toastId !== toastId);
    setAlerts(ralerts);
    setSlideUp(false);
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
    <ReactCSSTransitionGroup
      transitionName="alertService"
      transitionEnterTimeout={transitionDelay}
      transitionLeaveTimeout={transitionDelay}
    >
      {renderAlerts()}
    </ReactCSSTransitionGroup>
  );
};

export default AlertContainer;
