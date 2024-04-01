import React from 'react';
import { Menu } from '@/index';

export const subHeading = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Add">
        <Menu.List>
          <Menu.Item>Add Product</Menu.Item>
          <Menu.Item>Add Custom</Menu.Item>
          <Menu.Item>Add Row</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group label="Actions">
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Duplicate</Menu.Item>
          <Menu.Item>Share</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
};

const customCode = `
() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Add">
        <Menu.List>
          <Menu.Item>Add Product</Menu.Item>
          <Menu.Item>Add Custom</Menu.Item>
          <Menu.Item>Add Row</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group label="Actions">
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Duplicate</Menu.Item>
          <Menu.Item>Share</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Grouping/Sub Heading',
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
