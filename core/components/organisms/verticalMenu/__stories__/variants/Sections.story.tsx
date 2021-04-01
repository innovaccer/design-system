import * as React from 'react';
import { VerticalMenu } from '@/index';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Menu } from '../../../Navigation';

export const section = () => {

  const autoCollapse = boolean('autoCollapse', true);

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
    }
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu: Menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(90vh)', background: 'var(--secondary-lightest)' }}>
      <VerticalMenu
        menus={data}
        expanded={true}
        autoCollapse={autoCollapse}
        active={active}
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
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <VerticalMenu
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
  title: 'Components/VerticalMenu/Variants/Section',
  component: VerticalMenu,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
