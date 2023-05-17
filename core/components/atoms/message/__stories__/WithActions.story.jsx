import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const MessageWithActions = () => (
  <Message
    className="w-75"
    appearance="alert"
    description="Sorry we couldn't subscribe you. Please try again."
    actions={
      <Text className="cursor-pointer" appearance="link">
        Try again
      </Text>
    }
  />
);

export default {
  title: 'Components/Message/Message With Actions',
  component: Message,
};
