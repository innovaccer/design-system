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

  const findItem = (arrList, item) => {
    arrList.find((obj) => obj.label === item.label && obj.value === item.value);
  };

  const onClickHandler = (item) => {
    if (findItem(selectedItem, item)) {
      const list = selectedItem.filter(
        (selectItem) => selectItem.label !== item.label && selectItem.value !== item.value
      );
      action('itemssss', item, 'list', list)();

      setSelectedItem(list);
    } else {
      const list = [...selectedItem, item];
      action('itemssss', item, 'list', list)();
      setSelectedItem(list);
    }
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
                {/* {findItem(selectedItem, action) && <Icon name="places" />} */}
              </Menu.Item>
            );
          })}
        </Menu.List>
      </Menu.Group>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>
            <Menu.SubMenu>I am submenu</Menu.SubMenu>
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

const customCode = `
() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>
            <Menu.SubMenu>I am submenu</Menu.SubMenu>
            <div className="d-flex align-items-center justify-content-between w-100">
              <Text>Item 1</Text>
              <Icon name="chevron_right" />
            </div>
          </Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Basic',
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
