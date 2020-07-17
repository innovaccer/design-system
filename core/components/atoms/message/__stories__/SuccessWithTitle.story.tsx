import * as React from 'react';
import Message from '../index';

// CSF format story
export const successWithTitle = () => (
  <Message
    appearance={'success'}
    title={'Outreach successfully sent'}
  >
    {'2,340 messages sent.'}
  </Message>
);

export default {
  title: 'Atoms|Message',
  component: Message
};
