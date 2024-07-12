import * as React from 'react';
import { Message, LinkButton } from '@/index';

// CSF format story
export const MessageWithTitle = () => (
  <Message
    className="w-50"
    appearance="warning"
    title="Sender 'Alta Wells' already exists "
    description="Based on the details you've entered, we found that this sender might already be on our platform."
    actions={<LinkButton>Edit details</LinkButton>}
  />
);

export default {
  title: 'Components/Message/Message With Title',
  component: Message,
};
