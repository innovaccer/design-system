import React from 'react';
import { Menu, Icon } from '@/index';

export const nesting = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>App store</Menu.Item>
          <Menu.Item>Developer Portal</Menu.Item>

          <Menu.SubMenu>
            <Menu.Item className="d-flex align-items-center justify-content-between w-100">
              User Admin
              <Icon name="chevron_right" />
            </Menu.Item>
            <Menu position="right-start">
              <Menu.List>
                <Menu.Item>Users</Menu.Item>
                <Menu.Item>Groups</Menu.Item>
                <Menu.Item>Roles</Menu.Item>
              </Menu.List>
            </Menu>
          </Menu.SubMenu>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
};

const customCode = `
() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>App store</Menu.Item>
          <Menu.Item>Developer Portal</Menu.Item>

          <Menu.SubMenu>
            <Menu.Item className="d-flex align-items-center justify-content-between w-100">
              User Admin
              <Icon name="chevron_right" />
            </Menu.Item>
            <Menu position="right-start">
              <Menu.List>
                <Menu.Item>Users</Menu.Item>
                <Menu.Item>Groups</Menu.Item>
                <Menu.Item>Roles</Menu.Item>
              </Menu.List>
            </Menu>
          </Menu.SubMenu>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Nesting',
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
