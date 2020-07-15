import * as React from 'react';
import Message from '../index';

// CSF format story
export const info = () => (
  <Message
    appearance={'info'}
  >
    {'Reevaluate the entry after submission'}
  </Message>
);

export default {
  title: 'Atoms|Message',
  component: Message
};
