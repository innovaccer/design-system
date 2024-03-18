import React from 'react';
import { Menu } from '@/index';

export const divider = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group>
        <Menu.List>
          <Menu.Item>Run Pipeline</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group>
        <Menu.List>
          <Menu.Item>Logs</Menu.Item>
          <Menu.Item>Preview Data</Menu.Item>
          <Menu.Item>View Profile</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group showDivider={false}>
        <Menu.List>
          <Menu.Item>Copy ID</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
          <Menu.Item>Duplicate Pipeline</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
};

const customCode = `
() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group>
        <Menu.List>
          <Menu.Item>Run Pipeline</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group>
        <Menu.List>
          <Menu.Item>Logs</Menu.Item>
          <Menu.Item>Preview Data</Menu.Item>
          <Menu.Item>View Profile</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group showDivider={false}>
        <Menu.List>
          <Menu.Item>Copy ID</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
          <Menu.Item>Duplicate Pipeline</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Grouping/Divider',
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
