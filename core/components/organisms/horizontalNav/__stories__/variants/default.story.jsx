import * as React from 'react';
import { HorizontalNav } from '@/index';
import { action } from '@/utils/action';

export const defaultHorizontalNav = () => {
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

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();
    setActive(menu);
  };

  return (
    <div className="d-flex align-items-center py-6 bg-secondary-lightest">
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
    <div className="d-flex align-items-center py-6 bg-secondary-lightest">
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
  title: 'Components/HorizontalNav/Variants/Default Horizontal Nav',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
