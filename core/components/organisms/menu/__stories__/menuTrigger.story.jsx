import * as React from 'react';
import { Menu } from '@/index';

export const all = () => {
  return (
    <Menu trigger={<Menu.Trigger aria-label="Open actions menu" />}>
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
};

const customCode = `() => {
  return (
    <Menu trigger={<Menu.Trigger aria-label="Open actions menu" />}>
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
}`;

export default {
  title: 'Components/Menu/Menu.Trigger',
  component: Menu.Trigger,
  parameters: {
    docs: {
      docPage: {
        title: 'Menu.Trigger',
        customCode,
        a11yPropsTable: ['aria-label'],
      },
    },
  },
};
