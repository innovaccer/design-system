import * as React from 'react';
import { Chat } from '@/index';

export const unreadMessage = () => {
  return (
    <Chat>
      <Chat.UnreadMessage text="2 unread messages" />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.UnreadMessage text="2 unread messages" />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Separator/Unread Message',
  component: Chat,
  subcomponents: {
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
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
