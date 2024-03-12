import React from 'react';
// import { Menu } from '@/index';
import { Menu } from '../Menu';

export const basic = () => {
  return (
    <Menu
      // open={true}
      trigger={<Menu.Trigger />}
    >
      <Menu.Group>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.List>
      </Menu.Group>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
};

export default {
  title: 'Components/Menu/Basic',
  component: Menu,
  parameters: {
    docs: {
      docPage: {
        title: 'Menu',
      },
    },
  },
};
