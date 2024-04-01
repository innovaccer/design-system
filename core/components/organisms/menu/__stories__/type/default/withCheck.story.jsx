import React from 'react';
import { Menu, Icon } from '@/index';

export const withCheck = () => {
  const [itemList, setItemList] = React.useState([]);
  const actionList = ['Edit', 'Export', 'Copy'];

  const onClickHandler = (action) => {
    if (itemList.includes(action)) {
      const list = itemList.filter((item) => item !== action);
      setItemList(list);
    } else {
      setItemList([...itemList, action]);
    }
  };

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        {actionList.map((actions) => {
          return (
            <Menu.Item key={actions} onClick={() => onClickHandler(actions)} className="d-flex justify-content-between">
              {actions}
              {itemList.includes(actions) && <Icon name="done" />}
            </Menu.Item>
          );
        })}
      </Menu.List>
    </Menu>
  );
};

const customCode = `
() => {
  const [itemList, setItemList] = React.useState([]);
  const actionList = ['Edit', 'Export', 'Copy'];

  const onClickHandler = (action) => {
    if (itemList.includes(action)) {
      const list = itemList.filter((item) => item !== action);
      setItemList(list);
    } else {
      setItemList([...itemList, action]);
    }
  };

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        {actionList.map((actions) => {
          return (
            <Menu.Item key={actions} onClick={() => onClickHandler(actions)} className="d-flex justify-content-between">
              {actions}
              {itemList.includes(actions) && <Icon name="done" />}
            </Menu.Item>
          );
        })}
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Type/Default/With Check',
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
