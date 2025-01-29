/* global setTimeout */
import * as React from 'react';
import { Text, Chat, LinkButton, Button } from '@/index';
import '../styles.css';

export const failedResponse = () => {
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setShowSuccess(true);
      }, 800);
    }
  }, [loading]);

  const outgoingOptions = {
    status: showSuccess,
    failed: !loading && !showSuccess,
    failedMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Text size="small" appearance="destructive" className="mr-4" weight="medium">
            Message failed!
          </Text>
          <LinkButton size="tiny" onClick={() => setLoading(true)}>
            Click to retry
          </LinkButton>
        </div>
      );
    },
  };

  const classes = loading ? 'ChatBubble--loading' : '';

  const handleReset = () => {
    setLoading(false);
    setShowSuccess(false);
  };

  return (
    <div>
      <Button onClick={handleReset}>Reset</Button>
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions} className={classes}>
          <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ?</Text>
        </Chat.ChatBubble>
      </Chat>
    </div>
  );
};

const customCode = `() => {

  // styles.css
  /**
    .ChatBubble--loading {
      opacity: var(--opacity-12)
    }
  */

  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setShowSuccess(true);
      }, 800);
    }
  }, [loading]);

  const outgoingOptions = {
    status: showSuccess,
    failed: !loading && !showSuccess,
    failedMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Text size="small" appearance="destructive" className="mr-4" weight="medium">
            Message failed!
          </Text>
          <LinkButton size="tiny" onClick={() => setLoading(true)}>
            Click to retry
          </LinkButton>
        </div>
      );
    },
  };

  const classes = loading ? 'ChatBubble--loading' : '';

  const handleReset = () => {
    setLoading(false);
    setShowSuccess(false);
  };

  return (
    <div>
      <Button onClick={handleReset}>Reset</Button>
      <Chat>
        <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions} className={classes}>
          <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ?</Text>
        </Chat.ChatBubble>
      </Chat>
    </div>
  );
}`;

export default {
  title: 'Components/Chat/ChatBubble/Outgoing/Failed Response',
  component: Chat,
  subcomponents: {
    'Chat.ChatBubble': Chat.ChatBubble,
    'Chat.DateSeparator': Chat.DateSeparator,
    'Chat.NewMessage': Chat.NewMessage,
    'Chat.UnreadMessage': Chat.UnreadMessage,
    'Chat.TypingIndicator': Chat.TypingIndicator,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Outgoing Chat Bubble',
        customCode,
      },
    },
  },
};
