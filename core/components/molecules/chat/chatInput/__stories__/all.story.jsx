import * as React from 'react';
import { Chat, Button } from '@/index';

export const all = () => {
  const customActionRenderer = () => {
    return (
      <div className="d-flex">
        <Button
          appearance="transparent"
          className="mr-2"
          icon="add_circle"
          iconType="outlined"
          size="tiny"
          largeIcon={true}
        />
        <Button appearance="transparent" className="ml-2" icon="attach_file" size="tiny" largeIcon={true} />
      </div>
    );
  };

  return (
    <Chat>
      <Chat.ChatInput
        enableMention={false}
        placeholder="Enter Message"
        actionRenderer={customActionRenderer}
      ></Chat.ChatInput>
    </Chat>
  );
};

const customCode = `() => {
  const customActionRenderer = () => {
    return (
      <div className="d-flex">
        <Button
          appearance="transparent"
          className="mr-2"
          icon="add_circle"
          iconType="outlined"
          size="tiny"
          largeIcon={true}
        />
        <Button appearance="transparent" className="ml-2" icon="attach_file" size="tiny" largeIcon={true} />
      </div>
    );
  };

  return (
    <Chat>
      <Chat.ChatInput enableMention={false} placeholder="Enter Message" actionRenderer={customActionRenderer}></Chat.ChatInput>
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/ChatInput/All',
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
