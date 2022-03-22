import * as React from 'react';
import { Toast } from '@/index';

// CSF format story
export const toastWithActions = () => (
  <Toast
    appearance="success"
    title="Review requested successfully"
    message="Automatically redirecting to the next Prior Auth of Joy Lawson in 10s"
    actions={[
      {
        label: 'Need Prior Auth',
        onClick: () => {},
      },
      {
        label: 'Go To Worklist',
        onClick: () => {},
      },
    ]}
  />
);

export default {
  title: 'Components/Toast/Toast With Actions',
  component: Toast,
};
