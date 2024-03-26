import React from 'react';
import { Menu, Text } from '@/index';

export const withKeyboardShortcut = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Run</Text>
          <Text appearance="subtle">Cmd + R</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Preview</Text>
          <Text appearance="subtle">Cmd + P</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Copy</Text>
          <Text appearance="subtle">Cmd + C</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
};

const customCode = `
() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Run</Text>
          <Text appearance="subtle">Cmd + R</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Preview</Text>
          <Text appearance="subtle">Cmd + P</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Copy</Text>
          <Text appearance="subtle">Cmd + C</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Type/Default/With Keyboard Shortcut',
  component: Menu,
  subcomponents: {
    'Menu.Trigger': Menu.Trigger,
    'Menu.Group': Menu.Group,
    'Menu.List': Menu.List,
    'Menu.Item': Menu.Item,
    'Menu.SubMenu': Menu.SubMenu,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Menu',
        customCode,
      },
    },
  },
};
