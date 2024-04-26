import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const infoToast = () => (
  <Toast
    appearance="info"
    title="Sophie sent you a task"
    message="Schedule Appointment for 'Joy Lawson'. It's due on Aug 31."
  />
);

export default {
  title: 'Components/Toast/Info Toast',
  component: Toast,
};
