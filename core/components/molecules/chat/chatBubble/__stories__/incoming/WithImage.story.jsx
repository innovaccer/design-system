import * as React from 'react';
import { Text, Chat } from '@/index';
import Image from '../assets/media.png';

export const withImage = () => {
  return (
    <Chat>
      <Chat.ChatBubble type="incoming">
        <Text>
          Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
          sinusitis makes it hard for the sinuses to drain. Mucus builds up.
        </Text>
        <div>
          <img alt="placeholder" src={Image} className="mt-4 w-100 h-auto" />
        </div>
      </Chat.ChatBubble>
    </Chat>
  );
};

export default {
  title: 'Components/Chat/ChatBubble/Incoming/With Image',
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
        title: 'Incoming Chat Bubble',
      },
    },
  },
};
