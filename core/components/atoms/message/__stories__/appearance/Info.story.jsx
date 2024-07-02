import * as React from 'react';
import { Message } from '@/index';

// CSF format story
export const info = () => (
  <Message className="w-50" appearance="info" description="Patient profile has been updated with new records." />
);

export default {
  title: 'Components/Message/Appearance/Info',
  component: Message,
};
