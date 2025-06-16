import * as React from 'react';
import { Chat, Button, Text, PlaceholderParagraph, Placeholder, AIResponse } from '@/index';

export const generatingAResponse = () => {
  const [message, setMessage] = React.useState([]);
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

  const incomingMessageHandler = () => {
    if (loading) {
      return (
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" className="vw-50" />
          <PlaceholderParagraph />
        </Placeholder>
      );
    } else {
      return <Text>{AIText}</Text>;
    }
  };

  return (
    <Chat className="vh-50 position-relative">
      <Chat>
        {message.length > 0 && (
          <Chat.ChatBubble className="mb-6" type="outgoing">
            <Text>{message}</Text>
          </Chat.ChatBubble>
        )}
      </Chat>
      {message.length > 0 && (
        <AIResponse showAvatar={true} className="mb-6">
          <AIResponse.Body>{incomingMessageHandler()}</AIResponse.Body>
        </AIResponse>
      )}
      <div className="position-absolute bottom-0 w-100">
        <Chat.ChatInput
          enableMention={true}
          placeholder="Enter Message"
          actionRenderer={customActionRenderer}
          mentionProps={{ mentionList }}
          showStopButton={loading}
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

  const incomingMessageHandler = () => {
    if (loading) {
      return (
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" className="vw-50" />
          <PlaceholderParagraph />
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
      {message.length > 0 && (
        <AIResponse showAvatar={true} className="mb-6">
          <AIResponse.Body>{incomingMessageHandler()}</AIResponse.Body>
        </AIResponse>
      )}
      <div className="position-absolute bottom-0 w-100">
        <Chat.ChatInput
          enableMention={true}
          placeholder="Enter Message"
          actionRenderer={customActionRenderer}
          mentionProps={{ mentionList }}
          showStopButton={loading}
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
  title: 'Components/Chat/Chat Input/Generating A Response',
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
