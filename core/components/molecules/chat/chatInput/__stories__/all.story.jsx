import * as React from 'react';
import { Chat } from '@/index';

export const all = () => {
  return (
    <Chat>
      <Chat.ChatInput />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.ChatInput />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Chat Input/All',
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
