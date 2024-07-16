import * as React from 'react';
import { Message } from '@/index';
// CSF format story
export const warning = () => (
  <Message
    className="w-50"
    appearance="warning"
    description="Try to save again. If it continues to fail, please raise a ticket."
  />
);

export default {
  title: 'Components/Message/Appearance/Warning',
  component: Message,
};
