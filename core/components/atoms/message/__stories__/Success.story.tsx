import * as React from 'react';
import Message from '../index';

// CSF format story
export const successWithoutTitle = () => (
  <Message
    appearance={'success'}
  >
    {'Password updated. Login with your updated credentials.'}
  </Message>
);

export default {
  title: 'Components/Message/Success Without Title',
  component: Message
};
