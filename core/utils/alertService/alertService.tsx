import * as React from 'react';
import ReactDOM from 'react-dom';
import AlertContainer from './alertContainer';
import { pubSub } from '../testHelper';
export interface AlertServiceConfig {
  dismissIn: number;
  position: string;
  transitionDelay: number;
  appearance: string;
  title: string;
}

export class AlertService {
  elem: HTMLElement;
  pubSubService: {
    publish: (eventName: string | number, data: any) => void;
    subscribe: (eventName: string | number, callback: any) => void;
  };
  constructor(
    config = {
      dismissIn: 3000,
      autoHiderBar: true,
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
  }

  remove = (toastId: number) => this.pubSubService.publish('remove-toast', toastId);

  add = (toast: any) => {
    const toastId = this.pubSubService.publish('add-toast', toast);
    return toastId;
  }
}

export default AlertService;
