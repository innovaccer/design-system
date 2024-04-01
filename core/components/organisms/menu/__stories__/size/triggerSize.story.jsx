import React from 'react';
import { Menu, Label, Row, Column } from '@/index';

export const triggerSize = () => {
  return (
    <Row>
      <Column>
        <Label withInput={true}>Tiny</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="tiny" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Regular</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="regular" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>
    </Row>
  );
};

const customCode = `
() => {

  return (
    <Row>
      <Column>
        <Label withInput={true}>Tiny</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="tiny" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Regular</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="regular" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>
    </Row>
  );
}
`;

export default {
  title: 'Components/Menu/Size/Trigger Size',
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
