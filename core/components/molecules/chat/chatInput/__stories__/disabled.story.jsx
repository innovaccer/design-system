import * as React from 'react';
import { Chat } from '@/index';

export const disabledState = () => {
  return (
    <Chat>
      <Chat.ChatInput disabled />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.ChatInput disabled />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Chat Input/Disabled State',
  component: Chat,
  subcomponents: {
    'Chat.ChatInput': Chat.ChatInput,
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Chat',
        customCode,
      },
    },
  },
};
