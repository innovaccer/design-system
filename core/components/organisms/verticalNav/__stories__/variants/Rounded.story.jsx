import * as React from 'react';
import { VerticalNav } from '@/index';
import { action } from '@/utils/action';

export const rounded = () => {
  const autoCollapse = true;

  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
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
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        autoCollapse={autoCollapse}
        active={active}
        rounded={true}
        onClick={onClickHandler}
      />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360'
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans'
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
  const [expanded, setExpanded] = React.useState(false);

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        rounded={true}
        onClick={onClickHandler}
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/Variants/Rounded',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
