import * as React from 'react';
import { ChatMessage } from '@/index';
// CSF format story
export const chatMessage = () => {
  const type = 'incoming';
  const statusType = 'sent';
  const isTyping = false;
  const message = 'Hello, there.';
  const typingText = 'Typing..';
  const failedMessage = 'Click to retry';
  const sendingMessage = 'Sending';

  const options = {
    type,
    isTyping,
    typingText,
    failedMessage,
    sendingMessage,
    text: message,
    statusOptions: { type: statusType, time: '10:11 AM' },
  };

  return (
    <div className="w-25">
      <ChatMessage {...options} />
    </div>
  );
};

export default {
  title: 'Components/Chat/Chat Message',
  component: ChatMessage,
};
