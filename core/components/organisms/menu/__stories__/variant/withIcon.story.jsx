import React from 'react';
import { Menu, Text, Icon } from '@/index';

export const withIcon = () => {
  return (
    <div className="d-flex justify-content-between">
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
            <Icon name="share" className="mr-4 my-2" />
            <Text>Share</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

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
    </div>
  );
};

const customCode = `
() => {

  return (
<div className="d-flex justify-content-between">
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
            <Icon name="share" className="mr-4 my-2" />
            <Text>Share</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

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
    </div>
  );
}
`;

export default {
  title: 'Components/Menu/Variants/With Icon',
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
