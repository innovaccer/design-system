import * as React from 'react';
import { Chat, Button } from '@/index';

export const all = () => {
  const customActionRenderer = () => {
    return (
      <div className="d-flex">
        <Button appearance="transparent" className="mr-2" icon="add_circle" />
        <Button appearance="transparent" icon="attach_file" />
      </div>
    );
  };

  return (
    <Chat>
      <Chat.ChatInput placeholder="Enter Message" actionRenderer={customActionRenderer}></Chat.ChatInput>
    </Chat>
  );
};

const customCode = `() => {
  const customActionRenderer = () => {
    return (
      <div className="d-flex">
        <Button appearance="transparent" className="mr-2" icon="add_circle" />
        <Button appearance="transparent" icon="attach_file" />
      </div>
    );
  };

  return (
    <Chat>
      <Chat.ChatInput placeholder="Enter Message" actionRenderer={customActionRenderer}></Chat.ChatInput>
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/ChatInput/All',
  component: Chat,
  subcomponents: {
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
    'Chat.ChatInput': Chat.ChatInput,
  },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
