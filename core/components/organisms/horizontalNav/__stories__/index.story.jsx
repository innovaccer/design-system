import * as React from 'react';
import { HorizontalNav } from '@/index';
import { action } from '@/utils/action';

export const all = () => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
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
    <div className="bg-secondary-lightest pb-13">
      <div className="bg-light border-top border-bottom p-3">
        <HorizontalNav className="w-100 justify-content-center" menus={data} active={active} onClick={onClickHandler} />
      </div>
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      count: 10
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true
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
    <div className="bg-secondary-lightest pb-13">
      <div className="bg-light border-top border-bottom p-3">
        <HorizontalNav
          className="w-100 justify-content-center"
          menus={data}
          active={active}
          onClick={onClickHandler}
        />
      </div>
  </div>
  );
}`;

export default {
  title: 'Navigation/HorizontalNav/All',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
