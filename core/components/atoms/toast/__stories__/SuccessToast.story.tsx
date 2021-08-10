import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const successToast = () => (
  <Toast
    appearance="success"
    title="Outreach successfully sent"
    message="2,340 outreach messages have been successfully sent."
  />
);

export default {
  title: 'Components/Toast/Success Toast',
  component: Toast,
};
