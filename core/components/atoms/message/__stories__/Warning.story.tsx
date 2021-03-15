import * as React from 'react';
import Message from '../index';

// CSF format story
export const warning = () => (
  <Message
    appearance={'warning'}
  >
    {'You must ask the owner to invite viewers.'}
  </Message>
);

export default {
  title: 'Components/Message',
  component: Message
};
