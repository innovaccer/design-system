import * as React from 'react';
import { Text, Chat } from '@/index';

export const bubbleTypes = () => {
  return (
    <div className="d-flex">
      <Chat>
        <Chat.ChatBubble type="incoming">
          <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ?</Text>
        </Chat.ChatBubble>
      </Chat>

      <Chat>
        <Chat.ChatBubble type="outgoing">
          <Text>I am happy to provide you with an appointment tomorrow afternoon.</Text>
        </Chat.ChatBubble>
      </Chat>
    </div>
  );
};

export default {
  title: 'Components/Chat/ChatBubble/Bubble Types',
  component: Chat,
  subcomponents: {
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
  },
};
