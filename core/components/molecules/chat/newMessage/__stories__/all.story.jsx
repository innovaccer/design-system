import * as React from 'react';
import { Chat } from '@/index';

export const newMessage = () => {
  return (
    <Chat>
      <Chat.NewMessage text="2 New Messages" />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.NewMessage text="2 New Messages" />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Separator/New Message',
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
