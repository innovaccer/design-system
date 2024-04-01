import React from 'react';
import { Menu, Text } from '@/index';

export const standard = () => {
  return (
    <div className="d-flex justify-content-between">
      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Export</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Copy</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Export</Text>
          </Menu.Item>
          <Menu.Item>
            <Text appearance="destructive">Delete</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
};

const customCode = `
() => {

  return (
    <div className="d-flex justify-content-between">
      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Export</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Copy</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Export</Text>
          </Menu.Item>
          <Menu.Item>
            <Text appearance="destructive">Delete</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}
`;

export default {
  title: 'Components/Menu/Variants/Standard',
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
