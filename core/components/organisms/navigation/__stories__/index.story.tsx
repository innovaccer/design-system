import * as React from 'react';
import Navigation from '../Navigation';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { boolean } from '@storybook/addon-knobs';

export const horizontal = () => {
  const data = [
    {
      id: 'menu_1',
      name: 'Menu 1',
      icon: 'event'
    },
    {
      id: 'menu_2',
      name: 'Menu 2'
    },
    {
      id: 'menu_3',
      name: 'Menu 3',
      disabled: true
    }
  ];

  const options = {
    data
  };

  return <Navigation {...options} onClick={action('menu-clicked')} active="menu_1" />;
};

export const vertical = () => {
  const collapsed = boolean('collapsed', false);

  const onToggle = () => {
    updateKnob('collapsed', !collapsed);
  };

  const data = [
    {
      id: 'patient_360',
      name: 'Patient 360',
      icon: 'assignment_ind'
    },
    {
      id: 'care_management',
      name: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          id: 'care_management.timeline',
          name: 'Timeline'
        },
        {
          id: 'care_management.care_plans',
          name: 'Care Plans'
        }
      ]
    },
    {
      id: 'episodes',
      name: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      id: 'risk',
      name: 'Risk',
      icon: 'favorite'
    },
    {
      id: 'claims',
      name: 'Claims',
      icon: 'receipt'
    },
    {
      id: 'profile',
      name: 'Profile',
      icon: 'account_circle'
    },
    {
      id: 'manula_entry',
      name: 'Manual Entry',
      icon: 'border_color'
    },
    {
      id: 'documents',
      name: 'Documents',
      icon: 'assignment'
    }
  ];

  const options = {
    data,
    onToggle,
    collapsed
  };

  return (
    <div style={{ height: 'calc(80vh)', background: '#f4f4f4' }}>
      <Navigation {...options} type="vertical" onClick={action('menu-clicked')} active="care_management.timeline" />
    </div>
  );
};

export default {
  title: 'Organisms|Navigation',
  component: Navigation
};
