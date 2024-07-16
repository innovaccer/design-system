import * as React from 'react';
import { Message } from '@/index';

// CSF format story
export const alert = () => (
  <Message className="w-50" appearance="alert" description="Could not start verification. Please try again later." />
);

export default {
  title: 'Components/Message/Appearance/Alert',
  component: Message,
};
