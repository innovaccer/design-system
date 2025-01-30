import * as React from 'react';
import { Chat } from '@/index';

export const unreadMessage = () => {
  return (
    <Chat>
      <Chat.UnreadMessage text="2 Unread Messages" />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.UnreadMessage text="2 Unread Messages" />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Separator/Unread Message',
  component: Chat,
  subcomponents: {
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
