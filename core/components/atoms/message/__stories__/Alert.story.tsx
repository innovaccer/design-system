import * as React from 'react';
import Message from '../index';

// CSF format story
export const alert = () => (
  <Message
    appearance={'alert'}
    title={'Could not change the email address'}
  >
    {'Try again. In case the issue persists please raise a ticket.'}
  </Message>
);

export default {
  title: 'Components/Message',
  component: Message
};
