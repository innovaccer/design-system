import * as React from 'react';
import { Chat } from '@/index';

export const stopGeneratingResponse = () => {
  return (
    <Chat>
      <Chat.ChatInput enableMention={false} placeholder="Enter Message" showStopButton={true} />
    </Chat>
  );
};

const customCode = `() => {

  return (
    <Chat>
      <Chat.ChatInput enableMention={false} placeholder="Enter Message" showStopButton={true} />
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/ChatInput/Stop Generating Response',
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
        customCode,
      },
    },
  },
};
