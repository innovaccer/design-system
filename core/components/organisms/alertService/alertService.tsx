import * as React from 'react';
import ReactDOM from 'react-dom';
import { pubSub } from '../../../utils/alertServiceHelper';
import AlertContainer, { AlertServiceToastProps } from './alertContainer';
const defaultConf = {
  dismissIn: 3000,
  autoHiderBar: {
    style: {
      height: '3px',
      borderRadius: '5px',
      backgroundColor: `rgb(0,0,0,35%)`
    }
  },
  position: 'left',
  transitionDelay: 800,
  appearance: 'alert',
  title: 'Some error occurred'
};
export interface AlertServiceConfig {
  dismissIn: number;
  position: string;
  transitionDelay: number;
  appearance: string;
  title: string;
}

export interface PubSubServiceProps {
  publish: (eventName: string | number, data: any) => any;
  subscribe: (eventName: string | number, callback: any) => any;
}

export class AlertService {
  elem: HTMLElement;
  pubSubService: PubSubServiceProps;
  config: AlertServiceConfig;
  constructor(config = {}) {
    this.elem = document.createElement('div');
    this.pubSubService = pubSub();
    this.config = { ...defaultConf, ...config };
    this.renderAlert(this.config);
  }

  renderAlert = (config: AlertServiceConfig) => {
    let fullConf = { ...this.config, ...config };
    this.removeAlertService();
    this.elem.setAttribute('id', 'alertService-container');
    document.body.appendChild(this.elem);
    ReactDOM.render(<AlertContainer pubSubService={this.pubSubService} defaultConfig={fullConf} />, this.elem);
  };

  removeAlertService = () => {
    const removed = ReactDOM.unmountComponentAtNode(this.elem);
    return removed;
  };

  remove = (toastId: string) => this.pubSubService.publish('remove-toast', toastId);

  add = (toast: AlertServiceToastProps) => {
    const toastId = this.pubSubService.publish('add-toast', toast);
    return toastId;
  };
}

export default AlertService;
