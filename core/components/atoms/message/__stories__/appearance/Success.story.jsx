import * as React from 'react';
import { Message } from '@/index';

// CSF format story
export const success = () => (
  <Message className="w-50" appearance="success" description="Password updated. Login with your updated credentials." />
);

export default {
  title: 'Components/Message/Appearance/Success',
  component: Message,
};
