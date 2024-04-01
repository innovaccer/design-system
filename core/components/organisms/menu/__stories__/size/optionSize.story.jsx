import React from 'react';
import { Menu, Label, Row, Column } from '@/index';

export const optionSize = () => {
  return (
    <Row>
      <Column>
        <Label withInput={true}>Compressed Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="compressed">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Standard Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="standard">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Tight Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="tight">
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
        <Label withInput={true}>Compressed Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="compressed">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Standard Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="standard">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Tight Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="tight">
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
  title: 'Components/Menu/Size/Option Size',
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
