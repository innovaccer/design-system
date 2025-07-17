import * as React from 'react';
import { Chat } from '@/index';

export const readOnlyState = () => {
  return (
    <Chat>
      <Chat.ChatInput readOnly defaultValue="This is a read-only message that can be sent but not edited." />
    </Chat>
  );
};

const customCode = `() => {
  return (
    <Chat>
      <Chat.ChatInput readOnly defaultValue="This is a read-only message that can be sent but not edited." />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Chat Input/State/Read Only State',
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
