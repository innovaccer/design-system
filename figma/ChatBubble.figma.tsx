import React from 'react';
import { Chat, Text } from '@/index';
import figma from '@figma/code-connect';

// Outgoing Chat Bubble
figma.connect(Chat, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=59053-13610', {
  imports: ["import { Chat, Text } from '@innovaccer/design-system'"],
  props: {
    status: figma.boolean('Status'),
    time: figma.enum('Message Type', {
      'With Metadata': '01:00 AM',
    }),
  },
  example: ({ status, time, ...rest }) => (
    <Chat>
      <Chat.ChatBubble type="outgoing" {...rest} outgoingOptions={{ status, time }}>
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that?</Text>
      </Chat.ChatBubble>
    </Chat>
  ),
});

// Incoming Chat Bubble
figma.connect(Chat, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=59053-14022', {
  imports: ["import { Chat, Text } from '@innovaccer/design-system'"],
  props: {
    time: figma.enum('Message Type', {
      'With Metadata': '01:00 AM',
    }),
  },
  example: ({ time, ...rest }) => (
    <Chat>
      <Chat.ChatBubble type="incoming" {...rest} incomingOptions={{ time }}>
        <Text>I am happy to provide you with an appointment tomorrow afternoon.</Text>
      </Chat.ChatBubble>
    </Chat>
  ),
});
