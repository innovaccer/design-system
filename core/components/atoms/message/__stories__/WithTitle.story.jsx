import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const MessageWithTitle = () => (
  <Message
    className="w-75"
    appearance="warning"
    title="Sender 'Alta Wells' already exists "
    description="Based on the details you've entered, we found that this sender might already be on our platform."
    actions={
      <Text className="cursor-pointer" appearance="link">
        Edit details
      </Text>
    }
  />
);

export default {
  title: 'Components/Message/Message With Title',
  component: Message,
};
