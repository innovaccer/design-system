import * as React from 'react';
import { Chat, Button, Text, PlaceholderParagraph, Placeholder } from '@/index';

export const withBubble = () => {
  const [message, setMessage] = React.useState([]);
  const [isTyping, setIsTyping] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const AIText = 'AI will generate a response in a few seconds...';

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

  const onChangeHandler = () => {
    setIsTyping(true);
  };

  const incomingMessageHandler = () => {
    if (loading) {
      return (
        <Placeholder withImage={false}>
          <PlaceholderParagraph size="l" className="vw-50" />
        </Placeholder>
      );
    } else {
      return <Text>{AIText}</Text>;
    }
  };

  return (
    <Chat className="vh-25 position-relative">
      <Chat>
        {message.length > 0 && (
          <Chat.ChatBubble className="mb-6" type="outgoing">
            <Text>{message}</Text>
          </Chat.ChatBubble>
        )}
      </Chat>
      <Chat>
        {message.length > 0 && (
          <Chat.ChatBubble className="mb-6" type="incoming">
            {incomingMessageHandler()}
          </Chat.ChatBubble>
        )}
      </Chat>
      <div className="position-absolute bottom-0 w-100">
        {isTyping && <Chat.TypingIndicator text="Joy Doe is typing..." />}
        <Chat.ChatInput
          enableMention={true}
          placeholder="Enter Message"
          actionRenderer={customActionRenderer}
          mentionProps={{ mentionList }}
          onChange={onChangeHandler}
          showStopButton={loading}
          className={isTyping ? 'mt-3' : ''}
          onBlur={() => {
            setIsTyping(false);
          }}
          onStopGenerating={() => {
            setLoading(false);
          }}
          onSend={(e, messageData) => {
            setLoading(true);
            setMessage(messageData);
          }}
        />
      </div>
    </Chat>
  );
};

const customCode = `() => {
  const [message, setMessage] = React.useState([]);
  const [isTyping, setIsTyping] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const AIText = 'AI will generate a response in a few seconds...';

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

  const onChangeHandler = () => {
    setIsTyping(true);
  };

  const incomingMessageHandler = () => {
    if (loading) {
      return (
        <Placeholder withImage={false}>
          <PlaceholderParagraph size="l" className="vw-50" />
        </Placeholder>
      );
    } else {
      return <Text>{AIText}</Text>;
    }
  };

  return (
    <Chat className="vh-25 position-relative">
      <Chat>
        {message.length > 0 && (
          <Chat.ChatBubble className="mb-6" type="outgoing">
            <Text>{message}</Text>
          </Chat.ChatBubble>
        )}
      </Chat>
      <Chat>
        {message.length > 0 && (
          <Chat.ChatBubble className="mb-6" type="incoming">
            {incomingMessageHandler()}
          </Chat.ChatBubble>
        )}
      </Chat>
      <div className="position-absolute bottom-0 w-100">
        {isTyping && <Chat.TypingIndicator text="Joy Doe is typing..." />}
        <Chat.ChatInput
          enableMention={true}
          placeholder="Enter Message"
          actionRenderer={customActionRenderer}
          mentionProps={{ mentionList }}
          onChange={onChangeHandler}
          showStopButton={loading}
          className={isTyping ? 'mt-3' : ''}
          onBlur={() => {
            setIsTyping(false);
          }}
          onStopGenerating={() => {
            setLoading(false);
          }}
          onSend={(e, messageData) => {
            setLoading(true);
            setMessage(messageData);
          }}
        />
      </div>
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/Chat Input/With Bubble',
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
