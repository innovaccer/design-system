import * as React from 'react';
import { HorizontalNav } from '@/index';
import { action } from '@storybook/addon-actions';
import { Menu } from '@/utils/navigationHelper';

export const defaultHorizontalNavigation = () => {
  const data = [
    {
      name: 'engagements',
      label: 'Engagements',
    },
    {
      name: 'no_linked_activities',
      label: 'No Linked Activities',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'engagements',
  });

  const onClickHandler = (menu: Menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();
    setActive(menu);
  };

  return (
    <div className="d-flex align-items-center py-6" style={{ background: 'var(--secondary-lightest)' }}>
      <HorizontalNav className="w-100 justify-content-center" menus={data} active={active} onClick={onClickHandler} />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'engagements',
      label: 'Engagements',
    },
    {
      name: 'no_linked_activities',
      label: 'No Linked Activities',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'engagements'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="d-flex align-items-center py-6" style={{ background: 'var(--secondary-lightest)' }}>
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
  title: 'Components/HorizontalNav/Default Horizontal Navigation',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
