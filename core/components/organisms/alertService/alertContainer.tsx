import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AlertComponent from './alertComponent';
import { AlertServiceConfig, PubSubServiceProps } from './alertService';
import { ToastProps } from '@/index.type';

type autoHiderBarProp = { style: object };
export interface AlertServiceToastProps extends ToastProps {
  toastId: string;
  dismissIn?: number;
  toastClassName: string;
  autoHiderBar: autoHiderBarProp;
}

interface AlertContainerProps {
  pubSubService: PubSubServiceProps;
  defaultConfig: AlertServiceConfig;
}

const pendingToasts: AlertServiceToastProps[] = [];

export type doctype = Document;

const AlertContainer = (props: AlertContainerProps) => {
  const { pubSubService, defaultConfig } = props;
  const { transitionDelay, position } = defaultConfig;
  const [alerts, setAlerts] = React.useState<AlertServiceToastProps[]>([]);
  const [enterFlag, setEnterFlag] = React.useState(false);
  const [removeFlag, setRemoveFlag] = React.useState<boolean>(false);

  const renderAlerts = () => (alerts.length > 0 ? alerts.map(renderSingleAlert) : null);

  const renderSingleAlert = (alert: AlertServiceToastProps, i: number, alertsStack: AlertServiceToastProps[]) => {
    const { toastId } = alert;
    let calcBottom: number | undefined;
    let calcTop: number | undefined;
    if (i === 0) {
      calcBottom = 32;
    } else if (i === 1) {
      calcTop = 20;
    } else if (i === 2) {
      try {
        const prevEle = document.getElementById(`alert-toast__${alertsStack[i - 1].toastId}`);
        const prevTop = prevEle ? prevEle.offsetHeight * 1 - 5 : new Error('Previous element not found');
        calcTop = -prevTop;
      } catch (error) {
        calcTop = -20;
        console.error(error);
      }
    } else {
      calcTop = -120;
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
        addingNew={enterFlag}
        removingNew={removeFlag}
      />
    );
  };

  const addToast = (toast: AlertServiceToastProps) => {
    if (enterFlag) {
      pendingToasts.push(toast);
    } else {
      setEnterFlag(true);
      setTimeout(() => {
        const nalerts: AlertServiceToastProps[] = alerts.slice();
        nalerts.unshift(toast);
        setEnterFlag(false);
        setAlerts(nalerts);
      }, transitionDelay);
    }
  };

  const removeToast = (toastId: string) => {
    setRemoveFlag(true);
    setTimeout(() => {
      const ralerts: AlertServiceToastProps[] = alerts
        .slice()
        .filter((alert: AlertServiceToastProps) => alert.toastId !== toastId);
      setAlerts(ralerts);
      setRemoveFlag(false);
    }, transitionDelay + 500);
  };

  React.useEffect(() => {
    const addUnsub = pubSubService.subscribe('add-toast', addToast);
    const removeUnsub = pubSubService.subscribe('remove-toast', removeToast);
    return () => {
      addUnsub();
      removeUnsub();
    };
  });

  React.useEffect(() => {
    if (!enterFlag && pendingToasts.length) {
      const newToast = pendingToasts.shift();
      newToast ? setTimeout(() => addToast(newToast), 900) : null;
    }
  }, [alerts]);

  const dismiss = (id: string, onClose?: () => void | undefined) => {
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
