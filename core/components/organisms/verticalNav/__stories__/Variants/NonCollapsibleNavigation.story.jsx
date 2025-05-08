import * as React from 'react';
import { VerticalNav } from '@/index';

export const nonCollapsibleNavigation = () => {
  const data1 = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind',
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people',
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check',
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled',
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle',
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit',
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
    },
  ];

  const data2 = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
    },
    {
      name: 'care_management',
      label: 'Care Management',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
    },
    {
      name: 'risk',
      label: 'Risk',
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
    },
    {
      name: 'profile',
      label: 'Profile',
    },
    {
      name: 'claims',
      label: 'Claims',
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
    },
    {
      name: 'documents',
      label: 'Documents',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  return (
    <div className="d-flex vh-75">
      <VerticalNav
        menus={data1}
        active={active}
        expanded={true}
        onClick={setActive}
        className="mr-14 bg-secondary-lightest"
      />

      <VerticalNav
        menus={data2}
        active={active}
        expanded={true}
        onClick={setActive}
        className="bg-secondary-lightest"
      />
    </div>
  );
};

const customCode = `() => {
  const data1 = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const data2 = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
    },
    {
      name: 'care_management',
      label: 'Care Management',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
    },
    {
      name: 'risk',
      label: 'Risk',
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
    },
    {
      name: 'profile',
      label: 'Profile',
    },
    {
      name: 'claims',
      label: 'Claims',
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
    },
    {
      name: 'documents',
      label: 'Documents',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  return (
    <div className="d-flex vh-75">
      <VerticalNav
        menus={data1}
        active={active}
        expanded={true}
        onClick={setActive}
        className="mr-14 bg-secondary-lightest"
      />

      <VerticalNav
        menus={data2}
        active={active}
        expanded={true}
        onClick={setActive}
        className="bg-secondary-lightest"
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Variants/Non Collapsible Navigation',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
