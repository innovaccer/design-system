import React from 'react';
import { Menu, Text } from '@/index';

export const withSubInfo = () => {
  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex flex-column align-items-start">
          <Text>Edit</Text>
          <Text appearance="subtle" size="small" weight="medium">
            Changes will be saved
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Share</Text>
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
        <Menu.Item className="d-flex flex-column align-items-start">
          <Text>Edit</Text>
          <Text appearance="subtle" size="small" weight="medium">
            Changes will be saved
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Share</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Type/Default/With Sub Info',
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
