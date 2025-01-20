import * as React from 'react';
import { Chat } from '@/index';

export const dateSeparator = () => {
  return (
    <Chat>
      <Chat.DateSeparator date="May 21, 2024" />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.DateSeparator date="May 21, 2024" />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Separator/Date Separator',
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
