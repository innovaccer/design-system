import * as React from 'react';
import { ChatMessage } from '@/index';
// CSF format story
export const chatMessage = () => <></>;

export default {
  title: 'Components/Chat/Chat Message',
  component: ChatMessage,
  parameters: {
    docs: {
      docPage: {
        title: 'Chat Message',
        isDeprecated: true,
        description:
          'Chat Message component has been deprecated, please use [Chat Bubble](https://mds.innovaccer.com/?path=/docs/components-chat-chatbubble-bubble-types--bubble-types) component instead.',
      },
    },
  },
};
