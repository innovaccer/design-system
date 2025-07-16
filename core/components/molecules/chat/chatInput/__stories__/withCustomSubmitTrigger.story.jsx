/* global console */
import * as React from 'react';
import { Chat, Button } from '@/index';

export const withCustomSubmitRenderer = () => {
  const CustomSubmitRenderer = ({ onClick }) => {
    const handleCustomSubmit = () => {
      // Custom logic here - e.g. analytics, validation put logs for testing
      console.log('Message sent via custom handler');
      // After custom logic is done, ChatInput will clear the textarea
      onClick();
    };

    return <Button size="tiny" appearance="alert" icon="send" onClick={handleCustomSubmit} />;
  };

  return (
    <div>
      <h3>With Custom Submit Renderer (no onSend needed)</h3>
      <Chat>
        <Chat.ChatInput
          customSubmitRenderer={CustomSubmitRenderer}
          placeholder="Type and click custom send button..."
        />
      </Chat>
    </div>
  );
};

const customCode = `() => {
  const CustomSubmitRenderer = ({ onClick }) => {
    const handleCustomSubmit = () => {
      // Custom logic here - e.g. analytics, validation, API calls
      console.log('Message sent via custom handler');
      
      // After custom logic is done, ChatInput will clear the textarea
      onClick();
    };

    return (
      <Button
        size="tiny"
        appearance="alert"
        icon="send"
        onClick={handleCustomSubmit}
      />
    );
  };

  return (
    <div>
      <h3>With Custom Submit Renderer</h3>
      <Chat>
        <Chat.ChatInput 
          customSubmitRenderer={CustomSubmitRenderer}
          placeholder="Type and click custom send button..."
        />
      </Chat>
    </div>
  );
}`;

export default {
  title: 'Components/Chat/Chat Input/With Custom Submit Renderer',
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
        title: 'Chat',
        description: `
Custom Submit Renderer Behavior:
   - onSend prop is optional (not used)
   - Custom submit renderer handles its own send logic
   - ChatInput only handles clearing the textarea
   - Gives full control over the submit behavior
        `,
        customCode,
      },
    },
  },
};
