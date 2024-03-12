import React from 'react';
import { Menu, Text, Icon } from '@/index';
import { action } from '@/utils/action';

export const basic = () => {
  const [selectedItem, setSelectedItem] = React.useState([]);

  const actionList = [
    { label: 'Edit', value: 'Edit' },
    { label: 'Share', value: 'Share' },
    { label: 'Copy', value: 'Copy' },
  ];

  const onClickHandler = (item) => {
    const list = [...selectedItem, item];
    action('item', item, 'list', list)();
    setSelectedItem(list);
  };

  return (
    <Menu
      // open={true}
      trigger={<Menu.Trigger />}
    >
      <Menu.Group>
        <Menu.List>
          {actionList.map((action, index) => {
            return (
              <Menu.Item key={index} onClick={() => onClickHandler(action)}>
                {action.label}
              </Menu.Item>
            );
          })}
        </Menu.List>
      </Menu.Group>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>
            <Menu.SubMenu>i am submenu</Menu.SubMenu>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>
                <Text>Item 1</Text>
              </div>
              <Icon name="chevron_right" />
            </div>
          </Menu.Item>
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
