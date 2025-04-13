import * as React from 'react';
import { Chat, Button } from '@/index';

export const withMention = () => {
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
        enableMention={true}
        placeholder="Enter Message"
        actionRenderer={customActionRenderer}
      ></Chat.ChatInput>
    </Chat>
  );
};

const customCode = `() => {

  const mentionList = [
    { label: 'John Doe', value: 'John Doe' },
    { label: 'Jane Doe', value: 'Jane Doe' },
    { label: 'John Smith', value: 'John Smith' },
    { label: 'Jane Smith', value: 'Jane Smith' },
    { label: 'John', value: 'John' },
    { label: 'Jane', value: 'Jane' },
    { label: 'Smith', value: 'Smith' },
    { label: 'Doe', value: 'Doe' },
    { label: 'Johny', value: 'Johny' },
    { label: 'Janey', value: 'Janey' },
    { label: 'Smithy', value: 'Smithy' },
  ];

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
      <Chat.ChatInput mentionProps={{ mentionList }} enableMention={true} placeholder="Enter Message" actionRenderer={customActionRenderer}></Chat.ChatInput>
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/ChatInput/With Mention',
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
