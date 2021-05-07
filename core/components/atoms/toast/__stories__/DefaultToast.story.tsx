import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const defaultToast = () => (
  <Toast
    appearance="default"
    title="Assessment has been archived"
    message="You can find the assessment later under the 'Archive' tab."
  />
);

export default {
  title: 'Components/Toast/Default Toast',
  component: Toast
};
