import * as React from 'react';
import { VerticalNav, Text } from '@/index';
import { action } from '@/utils/action';

export const activeItemClick = () => {
  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'event',
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'home',
  });
  const [clickCount, setClickCount] = React.useState(0);

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();
    setClickCount((count) => count + 1);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <Text className="d-block mb-5">onClick calls: {clickCount}</Text>
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        aria-label="Primary sidebar navigation"
      />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'event',
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'home'
  });
  const [clickCount, setClickCount] = React.useState(0);

  // Selecting the active leaf again does not call onClick,
  // so the counter only changes when a different item is selected.
  const onClickHandler = (menu) => {
    setClickCount((count) => count + 1);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <Text className="d-block mb-5">onClick calls: {clickCount}</Text>
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        aria-label="Primary sidebar navigation"
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Active Item Click',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
