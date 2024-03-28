import React from 'react';
import { Menu, Text } from '@/index';

export const overflow = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Export</Text>
        </Menu.Item>
        <Menu.Item>
          <Text className="ellipsis--noWrap">Create a bug report here</Text>
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
        <Menu.Item>
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Export</Text>
        </Menu.Item>
        <Menu.Item>
          <Text className="ellipsis--noWrap">Create a bug report here</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Overflow',
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
        props: {
          exclude: ['triggerRef', 'menuID'],
        },
      },
    },
  },
};
