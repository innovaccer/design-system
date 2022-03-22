import * as React from 'react';
import { action } from '@/utils/action';
import Toast from '../Toast';

// CSF format story
export const all = () => {
  const title = 'Sample toast';

  const message = '';

  const actionLabel1 = '';
  const actionLabel2 = '';

  const props = {
    actions: [],
  };

  if (actionLabel1) {
    props.actions.push({
      label: actionLabel1,
      onClick: () => action('action button click: 1')(),
    });
  }
  if (actionLabel2) {
    props.actions.push({
      label: actionLabel2,
      onClick: () => action('action button click: 2')(),
    });
  }

  return <Toast title={title} message={message} onClose={action('on-close clicked')} {...props} />;
};

export default {
  title: 'Components/Toast/All',
  component: Toast,
};
