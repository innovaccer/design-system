import * as React from 'react';
import { Chat, Button, Menu, Icon, Text } from '@/index';

export const withSecondaryAction = () => {
  const customActionRenderer = () => {
    return (
      <div className="d-flex">
        <Menu
          width="231px"
          trigger={
            <Button
              appearance="transparent"
              className="mr-2"
              icon="add_circle"
              iconType="outlined"
              size="tiny"
              largeIcon={true}
            />
          }
        >
          <Menu.List>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="layers" className="mr-4 my-2" />
              <Text>Recent files</Text>
            </Menu.Item>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="event" className="mr-4 my-2" />
              <Text>Appointment date</Text>
            </Menu.Item>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="upload" className="mr-4 my-2" />
              <Text>Upload from your computer</Text>
            </Menu.Item>
          </Menu.List>
        </Menu>
        <Button appearance="transparent" className="ml-2" icon="attach_file" size="tiny" largeIcon={true} />
      </div>
    );
  };

  return (
    <Chat>
      <Chat.ChatInput actionRenderer={customActionRenderer} />
    </Chat>
  );
};

const customCode = `() => {

  const customActionRenderer = () => {
    return (
      <div className="d-flex">
        <Menu
          width="231px"
          trigger={
            <Button
              appearance="transparent"
              className="mr-2"
              icon="add_circle"
              iconType="outlined"
              size="tiny"
              largeIcon={true}
            />
          }
        >
          <Menu.List>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="layers" className="mr-4 my-2" />
              <Text>Recent files</Text>
            </Menu.Item>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="event" className="mr-4 my-2" />
              <Text>Appointment date</Text>
            </Menu.Item>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="upload" className="mr-4 my-2" />
              <Text>Upload from your computer</Text>
            </Menu.Item>
          </Menu.List>
        </Menu>
        <Button appearance="transparent" className="ml-2" icon="attach_file" size="tiny" largeIcon={true} />
      </div>
    );
  };

  return (
    <Chat>
      <Chat.ChatInput actionRenderer={customActionRenderer} />
    </Chat>
  )
}`;

export default {
  title: 'Components/Chat/Chat Input/With Secondary Action',
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
        customCode,
      },
    },
  },
};
