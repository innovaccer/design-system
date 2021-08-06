import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const warningToast = () => (
  <Toast
    appearance="warning"
    title="Chat response is delayed"
    message="'Memorial Clinic' has been running for more that 2 hours."
  />
);

export default {
  title: 'Components/Toast/Warning Toast',
  component: Toast,
};
