import * as React from 'react';
import { Text, Chat } from '@/index';

export const defaultMessage = () => {
  return (
    <Chat>
      <Chat.ChatBubble type="outgoing">
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ?</Text>
      </Chat.ChatBubble>
    </Chat>
  );
};

export default {
  title: 'Components/Chat/ChatBubble/Outgoing/Default Message',
  component: Chat,
  subcomponents: {
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
  },
};
