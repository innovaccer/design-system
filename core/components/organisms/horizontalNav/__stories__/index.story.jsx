import * as React from 'react';
import { HorizontalNav } from '@/index';
import { action } from '@/utils/action';

export const all = () => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      count: 20,
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      count: 10,
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true,
      count: 5,
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest py-6">
      <HorizontalNav className="w-100 justify-content-center" menus={data} active={active} onClick={onClickHandler} />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      count: 20
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      count: 10
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true,
      count: 5,
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest py-6">
      <HorizontalNav
        className="w-100 justify-content-center"
        menus={data}
        active={active}
        onClick={onClickHandler}
      />
  </div>
  );
}`;

export default {
  title: 'Components/HorizontalNav/All',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
