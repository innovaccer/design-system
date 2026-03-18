import React from 'react';
import { Menu } from '@/index';

export const all = () => {
  return (
    <Menu aria-label="Actions menu" trigger={<Menu.Trigger aria-label="Open actions menu" />}>
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
};

const customCode = `
() => {

  return (
    <Menu aria-label="Actions menu" trigger={<Menu.Trigger aria-label="Open actions menu" />}>
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/All',
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
