import * as React from 'react';
import ReactDOM from 'react-dom';
import AlertContainer from './alertContainer';
import { pubSub } from '../testHelper';

export class AlertService {
  elem: HTMLElement;
  pubSubService: {
    publish: (eventName: string | number, data: any) => void;
    subscribe: (eventName: string | number, callback: any) => void;
  };
  config: { dismissIn: number; position: string } | undefined;
  constructor(config?: { dismissIn: number; position: string } | undefined) {
    this.elem = document.createElement('div');
    this.pubSubService = pubSub();
    this.config = config;
  }

  renderAlert = () => {
    this.elem.setAttribute('id', 'alert-container');
    document.body.appendChild(this.elem);
    ReactDOM.render(<AlertContainer pubSubService={this.pubSubService} config={this.config} />, this.elem);
  }

  removeToast = (toastId: number) => this.pubSubService.publish('remove-toast', toastId);

  addToast = (toast: any) => {
    const toastId = this.pubSubService.publish('add-toast', toast);
    return toastId;
  }
}

export default AlertService;
