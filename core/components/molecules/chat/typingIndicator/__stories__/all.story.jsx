import * as React from 'react';
import { Chat } from '@/index';

export const typingIndicator = () => {
  return (
    <Chat>
      <Chat.TypingIndicator text="Joy, Jeff and Thomas are typing..." />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.TypingIndicator text="Joy, Jeff and Thomas are typing..." />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Typing Indicator',
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
