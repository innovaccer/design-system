import React from 'react';
import { Menu, Label, Row, Column } from '@/index';

export const State = () => {
  return (
    <Row>
      <Column>
        <Label withInput={true}>Default</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="regular" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Disabled</Label>
        <br />
        <Menu disabled={true} trigger={<Menu.Trigger size="regular" disabled={true} />}>
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
        <Label withInput={true}>Default</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="regular" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Disabled</Label>
        <br />
        <Menu disabled={true} trigger={<Menu.Trigger size="regular" disabled={true} />}>
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
  title: 'Components/Menu/State',
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
