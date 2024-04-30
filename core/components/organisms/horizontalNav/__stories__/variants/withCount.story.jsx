import * as React from 'react';
import { HorizontalNav } from '@/index';
import { action } from '@/utils/action';

export const withCount = () => {
  const data = [
    {
      name: 'to-dos',
      label: 'To-dos',
      count: 15,
    },
    {
      name: 'activity_received',
      label: 'Activity received',
      count: 7,
    },
    {
      name: 'activity_sent',
      label: 'Activity sent',
      count: 9,
    },
  ];

  const [active, setActive] = React.useState({
    name: 'to-dos',
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
      name: 'to-dos',
      label: 'To-dos',
      count: 15
    },
    {
      name: 'activity_received',
      label: 'Activity received',
      count: 7
    },
    {
      name: 'activity_sent',
      label: 'Activity sent',
      count: 9
    },
  ];

  const [active, setActive] = React.useState({
    name: 'to-dos'
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
  title: 'Components/HorizontalNav/Variants/With Count',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
