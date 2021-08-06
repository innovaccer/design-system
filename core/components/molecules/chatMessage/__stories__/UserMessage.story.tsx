import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { ChatMessage } from '@/index';
// CSF format story
export const chatMessage = () => {
  const type = select('type', ['incoming', 'outgoing'], 'incoming');

  const statusType = select('statusType', ['sent', 'urgent', 'read', 'sending', 'failed'], 'sent');

  const isTyping = boolean('isTyping', false);

  const message = text('text', 'Hello, there.');
  const typingText = text('typing text', 'Typing..');
  const failedMessage = text('failed message', 'Click to retry');
  const sendingMessage = text('sending message', 'Sending');

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
