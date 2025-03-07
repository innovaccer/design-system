import * as React from 'react';
import { Text, Chat } from '@/index';
import './styles.css';

export const containerQueries = () => {
  return (
    <div className="bg-secondary container">
      <Chat>
        <Chat.ChatBubble type="outgoing" className="custom-chat-bubble">
          <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ?</Text>
        </Chat.ChatBubble>
      </Chat>
    </div>
  );
};

export default {
  title: 'Components/Chat/ChatBubble/Container Queries',
  component: Chat,
  subcomponents: {
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
  },
};
