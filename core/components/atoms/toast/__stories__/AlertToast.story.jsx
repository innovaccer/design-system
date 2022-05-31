import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const alertToast = () => (
  <Toast
    appearance="alert"
    title="Campaign failed to run"
    message="Try to run again. If it continues to fail, please raise a ticket."
  />
);

export default {
  title: 'Components/Toast/Alert Toast',
  component: Toast,
};
