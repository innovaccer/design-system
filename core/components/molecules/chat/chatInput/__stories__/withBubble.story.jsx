import * as React from 'react';
import { Chat, Button, Text } from '@/index';

export const withBubble = () => {
  const [messageParts, setMessageParts] = React.useState([]);
  const [isTyping, setIsTyping] = React.useState(false);

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

  const messageRenderer = () => {
    return messageParts.map((part, index) => {
      if (part.type === 'mention') {
        return (
          <Text key={index} appearance="link">
            {part.content.label}
          </Text>
        );
      } else if (part.type === 'newline' || part.type === 'linebreak') {
        return <br key={index} />;
      } else {
        return <Text key={index}>{part.content}</Text>;
      }
    });
  };

  const onChangeHandler = () => {
    setIsTyping(true);
  };

  return (
    <Chat className="vh-25 position-relative">
      {messageParts.length > 0 && (
        <Chat.ChatBubble className="mb-6" type="outgoing">
          {messageRenderer()}
        </Chat.ChatBubble>
      )}
      <div className="position-absolute bottom-0 w-100">
        {isTyping && <Chat.TypingIndicator text="Joy Doe is typing..." />}
        <Chat.ChatInput
          enableMention={true}
          placeholder="Enter Message"
          actionRenderer={customActionRenderer}
          mentionProps={{ mentionList }}
          onChange={onChangeHandler}
          className={isTyping ? 'mt-3' : ''}
          onBlur={() => {
            setIsTyping(false);
          }}
          onSend={(e, messageData) => {
            setMessageParts(messageData);
          }}
        />
      </div>
    </Chat>
  );
};

const customCode = `() => {
  const [messageParts, setMessageParts] = React.useState([]);
  const [isTyping, setIsTyping] = React.useState(false);

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

  const messageRenderer = () => {
    return messageParts.map((part, index) => {
      if (part.type === 'mention') {
        return <Text key={index} appearance="link">{part.content.label}</Text>;
      } else if (part.type === 'newline' || part.type === 'linebreak') {
        return <br key={index} />;
      } else {
        return <Text key={index}>{part.content}</Text>;
      }
    });
  };

  console.log(messageRenderer());

  const onChangeHandler = (e, messageData) => {
    console.log('onChange messageData', messageData);
    setIsTyping(true);
  }

  return (
    <Chat className="vh-25 position-relative">
      {messageParts.length > 0 && <Chat.ChatBubble className="mb-6" type="outgoing">{messageRenderer()}</Chat.ChatBubble>}
      <div className="position-absolute bottom-0 w-100">
        {isTyping && <Chat.TypingIndicator text="Joy Doe is typing..." />}
        <Chat.ChatInput
          enableMention={true}
          placeholder="Enter Message"
          actionRenderer={customActionRenderer}
          mentionProps={{ mentionList }}
          onChange={onChangeHandler}
          className={isTyping ? 'mt-3' : ''}
          onBlur={() => {
            setIsTyping(false);
          }}
          onSend={(e, messageData) => {
            console.log('onSend messageData', messageData);
            setMessageParts(messageData);
          }}
        />
      </div>
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/ChatInput/With Bubble',
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
