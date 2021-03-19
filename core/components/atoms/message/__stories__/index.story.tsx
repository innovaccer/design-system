import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import Message from '../index';

// CSF format story
export const all = () => {

  const appearance = select(
    'appearance',
    ['default', 'alert', 'info', 'success', 'warning'],
    undefined
  );

  const title = text(
    'title',
    'Design System'
  );

  const children = text('children', 'Design System is a library of reusable components');

  return (
    <Message
      appearance={appearance}
      title={title}
    >
      {children}
    </Message>
  );
};

export default {
  title: 'Components/Message',
  component: Message
};
