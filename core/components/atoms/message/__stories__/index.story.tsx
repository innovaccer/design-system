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
    'Outreach was not saved'
  );

  return (
    <Message
      appearance={appearance}
      title={title}
    >
      Patient record has been updated with new records.
    </Message>
  );
};

export default {
  title: 'Atoms|Message',
  component: Message
};
