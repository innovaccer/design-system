import * as React from 'react';
import { VerticalNav } from '@/index';
import { action } from '@/utils/action';

export const all = () => {
  const autoCollapse = true;

  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      link: '/home',
      count: 10,
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'event',
      link: '/profile',
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      link: '/medical_records',
      subMenu: [
        {
          name: 'medical_records.allergies',
          label: 'Allergies',
        },
        {
          name: 'medical_records.conditions',
          label: 'Conditions',
        },
        {
          name: 'medical_records.diabetes',
          label: 'Medical records diabetes history',
        },
        {
          name: 'medical_records.devices',
          label: 'Devices',
        },
      ],
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
      link: '/formulary',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'medical_records.allergies',
  });

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <VerticalNav menus={data} expanded={true} autoCollapse={autoCollapse} active={active} onClick={onClickHandler} />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      link: '/home',
      count: 10,
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'event',
      link: '/profile',
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      link: '/medical_records',
      subMenu: [
        {
          name: 'medical_records.allergies',
          label: 'Allergies',
        },
        {
          name: 'medical_records.conditions',
          label: 'Conditions',
        },
        {
          name: 'medical_records.diabetes',
          label: 'Medical records diabetes history',
        },
        {
          name: 'medical_records.devices',
          label: 'Devices',
        },
      ],
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
      link: '/formulary',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'medical_records.allergies'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        hoverable={false}
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/All',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
