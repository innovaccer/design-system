import React from 'react';
import { Menu } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Menu, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1481-10464', {
  imports: ["import { Menu } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
  },
  example: ({ size, ...rest }) => {
    return (
      <Menu {...(rest as any)} trigger={<Menu.Trigger size={size as any} />}>
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Export</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
});

// Grouping in Menu
figma.connect(Menu, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=33767-6251', {
  imports: ["import { Menu } from '@innovaccer/design-system'"],
  props: {
    showDivider: figma.enum('Divider', {
      True: true,
      False: false,
    }),
  },
  example: ({ showDivider, ...props }) => {
    return (
      <Menu trigger={<Menu.Trigger />} {...props}>
        <Menu.Group showDivider={showDivider}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
          </Menu.List>
        </Menu.Group>

        <Menu.Group showDivider={showDivider}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
            <Menu.Item>Menu Item 3</Menu.Item>
          </Menu.List>
        </Menu.Group>

        <Menu.Group showDivider={showDivider}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
            <Menu.Item>Menu Item 3</Menu.Item>
          </Menu.List>
        </Menu.Group>
      </Menu>
    );
  },
});
