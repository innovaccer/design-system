import * as React from 'react';
import ReactDOM from 'react-dom';
import AlertContainer, { AlertServiceToastProps } from './alertContainer';
import { pubSub } from '../testHelper';

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

  constructor(
    config = {
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
    }
  ) {
    this.elem = document.createElement('div');
    this.pubSubService = pubSub();
    this.renderAlert(config);
  }

  renderAlert = (config: AlertServiceConfig) => {
    this.elem.setAttribute('id', 'alertService-container');
    document.body.appendChild(this.elem);
    ReactDOM.render(<AlertContainer pubSubService={this.pubSubService} defaultConfig={config} />, this.elem);
  };

  remove = (toastId: string) => this.pubSubService.publish('remove-toast', toastId);

  add = (toast: AlertServiceToastProps) => {
    const toastId = this.pubSubService.publish('add-toast', toast);
    return toastId;
  };
}

export default AlertService;
