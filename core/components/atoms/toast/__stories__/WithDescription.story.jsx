import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const toastWithDescription = () => (
  <Toast appearance="success" title="Message sent successfully" message="Description goes here" />
);

export default {
  title: 'Indicators/Toast/Toast With Description',
  component: Toast,
};
