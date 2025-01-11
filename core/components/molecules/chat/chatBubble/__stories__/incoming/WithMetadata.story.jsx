import * as React from 'react';
import { Icon, Text, Chat } from '@/index';

export const withMetadata = () => {
  const incomingOptions = {
    time: '1:00 AM',
    metaData: 'Meta Data',
    urgentMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Icon name="notifications" size={14} appearance="alert" />
          <Text size="small" appearance="destructive" className="ml-2" weight="medium">
            Urgent
          </Text>
        </div>
      );
    },
  };

  return (
    <Chat>
      <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ? </Text>
      </Chat.ChatBubble>
    </Chat>
  );
};

const customCode = `() => {

  const incomingOptions = {
    time: '1:00 AM',
    metaData: 'Meta Data',
    urgentMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Icon name="notifications" size={14} appearance="alert" />
          <Text size="small" appearance="destructive" className="ml-2" weight="medium">
            Urgent
          </Text>
        </div>
      );
    },
  };

  return (
    <Chat>
      <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ? </Text>
      </Chat.ChatBubble>
    </Chat>
  );
  
}`;

export default {
  title: 'Components/Chat/ChatBubble/Incoming/With Metadata',
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
        customCode,
      },
    },
  },
};
