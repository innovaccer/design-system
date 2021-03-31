import * as React from 'react';
import { Navigation } from '@/index';
import { Menu } from '../Navigation';
import { select } from '@storybook/addon-knobs';

export const navigationTabsWithIcon = () => {
  const data = [
    {
      name: 'tab1',
      label: 'Tab #1',
      icon: 'events'
    },
    {
      name: 'tab2',
      label: 'Tab #2',
      icon: 'events'
    },
    {
      name: 'tab3',
      label: 'Tab #3',
      icon: 'events'
    },
    {
      name: 'tab4',
      label: 'Tab #3',
      icon: 'events'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'tab1'
  });

  const onClickHandler = (menu: Menu) => {
    setActive(menu);
  };

  const align = select(
    'align',
    ['left', 'center'],
    'center'
  );

  return (
    <Navigation
      align={align}
      menus={data}
      active={active}
      onClick={onClickHandler}
    />
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'tab1',
      label: 'Tab #1',
      icon: 'events'
    },
    {
      name: 'tab2',
      label: 'Tab #2',
      icon: 'events'
    },
    {
      name: 'tab3',
      label: 'Tab #3',
      icon: 'events'
    },
    {
      name: 'tab4',
      label: 'Tab #3',
      icon: 'events'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'tab1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const align = 'center';

  return (
    <Navigation
      align={align}
      menus={data}
      active={active}
      onClick={onClickHandler}
    />
  );
}`;

export default {
  title: 'Components/Navigation/Navigation Tabs With Icon',
  component: Navigation,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
