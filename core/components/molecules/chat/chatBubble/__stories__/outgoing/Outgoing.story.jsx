import * as React from 'react';
import { Icon, Text, Chat, Button } from '@/index';

export const all = () => {
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

  const outgoingOptions = {
    status: true,
    time: '1:00 AM',
    metaData: 'Meta Data',
    actionBar,
    urgentMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Icon name="notifications" size={14} appearance="alert" />
          <Text size="small" appearance="destructive" className="ml-2" weight="medium">
            Urgent
          </Text>
        </div>
      );
    },
  };

  return (
    <Chat>
      <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions}>
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

  const outgoingOptions = {
    status: true,
    time: '1:00 AM',
    metaData: 'Meta Data',
    actionBar,
    urgentMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Icon name="notifications" size={14} appearance="alert" />
          <Text size="small" appearance="destructive" className="ml-2" weight="medium">
            Urgent
          </Text>
        </div>
      );
    },
  };

  return (
    <Chat>
      <Chat.ChatBubble type="outgoing" outgoingOptions={outgoingOptions}>
        <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ? </Text>
      </Chat.ChatBubble>
    </Chat>
  );
  
}`;

export default {
  title: 'Components/Chat/ChatBubble/Outgoing/All',
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
