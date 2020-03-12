import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Toast from '../Toast';

// CSF format story
export const toast = () => {
  const appearance = select(
    'appearance',
    ['default', 'info', 'success', 'alert', 'warning'],
    undefined
  );

  const title = text(
    'title',
    'Sample toast'
  );

  const message = text(
    'message',
    ''
  );

  const actionLabel1 = text(
    'actionLabel1',
    ''
  );
  const actionLabel2 = text(
    'actionLabel2',
    ''
  );

  const props: Record<string, any> = {
    actions: [],
  };

  if (actionLabel1) {
    props.actions.push({
      label: actionLabel1,
      onClick: () => action('action button click: 1')()
    });
  }
  if (actionLabel2) {
    props.actions.push({
      label: actionLabel2,
      onClick: () => action('action button click: 2')()
    });
  }

  return (
    <Toast
      appearance={appearance}
      title={title}
      message={message}
      onClose={action('on-close clicked')}
      {...props}
    />
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Toast' };
