import * as React from 'react';
import { Chat } from '@/index';

export const defaultMessage = () => {
  return (
    <Chat>
      <Chat.ChatInput></Chat.ChatInput>
    </Chat>
  );
};

export default {
  title: 'Components/Chat/ChatInput/All',
  component: Chat,
  subcomponents: {
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
    'Chat.ChatInput': Chat.ChatInput,
  },
};
