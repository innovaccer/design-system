import * as React from 'react';
import { Navigation } from '@/index';
import { Menu } from '../Navigation';
import { select } from '@storybook/addon-knobs';

export const navigationTabs = () => {
  const data = [
    {
      name: 'tab1',
      label: 'Tab #1',
    },
    {
      name: 'tab2',
      label: 'Tab #2'
    },
    {
      name: 'tab3',
      label: 'Tab #3',
    },
    {
      name: 'tab4',
      label: 'Tab #3',
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
    },
    {
      name: 'tab2',
      label: 'Tab #2'
    },
    {
      name: 'tab3',
      label: 'Tab #3',
    },
    {
      name: 'tab4',
      label: 'Tab #3',
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
  title: 'Organisms|Navigation',
  component: Navigation,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
