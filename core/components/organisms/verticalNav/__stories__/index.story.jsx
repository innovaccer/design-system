import * as React from 'react';
import { VerticalNav } from '@/index';
import { action } from '@/utils/action';

export const all = () => {
  const autoCollapse = true;

  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
      count: 10,
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      count: 2,
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled',
      count: 5,
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
        },
      ],
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <VerticalNav menus={data} expanded={true} autoCollapse={autoCollapse} active={active} onClick={onClickHandler} />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
      count: 10,
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      count: 2,
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled',
      count: 5,
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
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
  title: 'Components/VerticalNav/All',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
