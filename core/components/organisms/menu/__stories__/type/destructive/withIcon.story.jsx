import React from 'react';
import { Menu, Icon, Text } from '@/index';

export const withIcon = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="edit" className="mr-4 my-2" />
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="content_Copy" className="mr-4 my-2" />
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="delete" appearance="alert" className="mr-4 my-2" type="rounded" />
          <Text appearance="destructive">Delete</Text>
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
        <Menu.Item className="d-flex align-items-center">
          <Icon name="edit" className="mr-4 my-2" />
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="content_Copy" className="mr-4 my-2" />
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="delete" appearance="alert" className="mr-4 my-2" type="rounded" />
          <Text appearance="destructive">Delete</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Type/Destructive/With Icon',
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
