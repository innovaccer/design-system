import * as React from 'react';
import { Text, Chat, Button } from '@/index';

export const withActionBar = () => {
  const actionBar = () => {
    return (
      <div className="d-flex">
        <Button appearance="transparent" icon="edit" tooltip="Edit" className="mr-3" size="tiny" largeIcon={true} />
        <Button
          appearance="transparent"
          icon="forward"
          tooltip="Forward"
          className="mr-3"
          size="tiny"
          largeIcon={true}
        />
        <Button appearance="transparent" icon="more_vert" tooltip="More Options" size="tiny" largeIcon={true} />
      </div>
    );
  };

  const incomingOptions = {
    actionBar,
  };

  return (
    <Chat>
      <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ? </Text>
      </Chat.ChatBubble>
    </Chat>
  );
};

const customCode = `() => {
  const actionBar = () => {
    return (
      <div className="d-flex">
        <Button appearance="transparent" icon="edit" tooltip="Edit" className="mr-3" size="tiny" largeIcon={true} />
        <Button appearance="transparent" icon="forward" tooltip="Forward" className="mr-3" size="tiny" largeIcon={true} />
        <Button appearance="transparent" icon="more_vert" tooltip="More Options" size="tiny" largeIcon={true} />
      </div>
    );
  };

  const incomingOptions = {
    actionBar,
  };

  return (
    <Chat>
      <Chat.ChatBubble type="incoming" incomingOptions={incomingOptions}>
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ? </Text>
      </Chat.ChatBubble>
    </Chat>
  );
}`;

export default {
  title: 'Components/Chat/ChatBubble/Incoming/With Action Bar',
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
        title: 'Incoming Chat Bubble',
        customCode,
      },
    },
  },
};
