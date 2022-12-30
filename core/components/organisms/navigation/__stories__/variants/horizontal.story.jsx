import * as React from 'react';
import { Navigation } from '@/index';
import { action } from '@/utils/action';

export const horizontal = () => {
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

  const align = 'center';

  return (
    <div className="pb-13 bg-secondary-lightest">
      <div className="bg-light border-top border-bottom p-3">
        <Navigation align={align} menus={data} active={active} onClick={onClickHandler} />
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

  const align = 'center';

  return (
    <div className="pb-13 bg-secondary-lightest">
      <div className="bg-light border-top border-bottom p-3">
        <Navigation
          align={align}
          menus={data}
          active={active}
          onClick={onClickHandler}
        />
      </div>
  </div>
  );
}`;

export default {
  title: 'Components/Navigation/Variants/Horizontal',
  component: Navigation,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
