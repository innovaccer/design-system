import * as React from 'react';
import { HorizontalNav } from '@/index';
import { action } from '@storybook/addon-actions';
import { Menu } from '@/utils/navigationHelper';

export const horizontalNavigationWithIcon = () => {
  const data = [
    {
      name: 'text',
      label: 'Text',
      icon: 'message',
    },
    {
      name: 'voice',
      label: 'Voice',
      icon: 'mic',
    },
    {
      name: 'mail',
      label: 'Mail',
      icon: 'email',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'text',
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
      name: 'text',
      label: 'Text',
      icon: 'message'
    },
    {
      name: 'voice',
      label: 'Voice',
      icon: 'mic'
    },
    {
      name: 'mail',
      label: 'Mail',
      icon: 'email'
    },
  ];

  const [active, setActive] = React.useState({
    name: 'text'
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
  title: 'Components/HorizontalNav/Horizontal Navigation With Icon',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
