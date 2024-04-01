import React from 'react';
import { Menu, Text } from '@/index';

export const withSubInfo = () => {
  return (
    <div className="d-flex justify-content-between">
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

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item className="d-flex flex-column align-items-start">
            <Text appearance="destructive">Delete</Text>
            <Text appearance="subtle" size="small" weight="medium">
              Changes will be lost.
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
    </div>
  );
};

const customCode = `
() => {

  return (
    <div className="d-flex justify-content-between">
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

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item className="d-flex flex-column align-items-start">
            <Text appearance="destructive">Delete</Text>
            <Text appearance="subtle" size="small" weight="medium">
              Changes will be lost.
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
    </div>
  );
}
`;

export default {
  title: 'Components/Menu/Variants/With Sub Info',
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
