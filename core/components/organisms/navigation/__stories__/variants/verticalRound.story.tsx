import * as React from 'react';
import { Navigation } from '@/index';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Menu } from '../../Navigation';

export const verticalRound = () => {
  const expanded = boolean('expanded', false);

  const autoCollapse = boolean('autoCollapse', true);

  const footer = boolean('footer', true);

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

  const onClickHandler = (menu: Menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <Navigation
        type="vertical"
        menus={data}
        expanded={expanded}
        autoCollapse={autoCollapse}
        footer={footer}
        onToggle={() => updateKnob('expanded', !expanded)}
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
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <Navigation
        type="vertical"
        menus={data}
        expanded={expanded}
        footer={true}
        onToggle={(val) => setExpanded(val)}
        active={active}
        rounded={true}
        onClick={onClickHandler}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Navigation/Variants',
  component: Navigation,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
