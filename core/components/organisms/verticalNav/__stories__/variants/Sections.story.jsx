import { useState } from 'react';
import { VerticalNav } from '@/index';
import { action } from '@/utils/action';

export const section = () => {
  const autoCollapse = true;

  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
      group: 'Section 1',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      group: 'Section 2',
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
      group: 'Section 2',
      icon: 'airline_seat_flat_angled',
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      group: 'Section 2',
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
      group: 'Section 3',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      group: 'Section 3',
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color',
      group: 'Section 3',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
      group: 'Section 3',
    },
  ];

  const [active, setActive] = useState({
    name: 'care_management.timeline',
  });

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-100">
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
      group: 'Section 1'
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      group: 'Section 2',
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
      group: 'Section 2',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      group: 'Section 2',
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
      icon: 'receipt',
      group: 'Section 3'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      group: 'Section 3'
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color',
      group: 'Section 3'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
      group: 'Section 3'
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
    <div className="bg-secondary-lightest vh-100">
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
  title: 'Components/VerticalNav/VerticalNav/Variants/Section',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
