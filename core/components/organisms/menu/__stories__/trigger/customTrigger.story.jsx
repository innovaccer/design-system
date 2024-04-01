import React from 'react';
import { Menu, Button } from '@/index';

export const customTrigger = () => {
  return (
    <Menu
      trigger={
        <Button icon="expand_more" iconAlign="right">
          Page actions
        </Button>
      }
    >
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
    <Menu
      trigger={
        <Button icon="expand_more" iconAlign="right">
          Page actions
        </Button>
      }
    >
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
  title: 'Components/Menu/Trigger/Custom Trigger',
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
