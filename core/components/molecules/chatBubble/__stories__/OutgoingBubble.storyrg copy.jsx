import * as React from 'react';
import { Text, ChatBubble } from '@/index';

export const outgoingBubbles = () => {
  return (
    <ChatBubble
      type="outgoing"
      outgoingOptions={{
        status: true,
        time: "Yesterday, 10:30",
        metaData: "meta data here",
        urgentMessage: <p>urgent msg</p>,
        failedMessage: <p>failed msg</p>,
        actionBar: <div>action bar</div>,
        children: <Text>Hey! How can I help you today?</Text>
      }}
    />
  )
};

export default {
  title: 'Components/Chat/ChatBubble/Outgoing Bubbles',
  component: ChatBubble,
};
