import * as React from 'react';
import { VerticalNav, Collapsible } from '@/index';

export const navigationBarOverflow = () => {
  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      count: 10,
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      count: 25,
      subMenu: [
        {
          name: 'profile.personal',
          label: 'Personal',
          count: 5,
        },
        {
          name: 'profile.are_team',
          label: 'Care Team',
          count: 10,
        },
        {
          name: 'profile.goals',
          label: 'Goals',
          count: 5,
        },
        {
          name: 'profile.care_plans',
          label: 'Care Plans',
          count: 5,
        },
      ],
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
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
          name: 'medical_records.immunizations',
          label: 'Immunizations',
        },
        {
          name: 'medical_records.lab_results',
          label: 'Lab Results',
        },
        {
          name: 'medical_records.medications',
          label: 'Medications',
        },
        {
          name: 'medical_records.procedures',
          label: 'Procedures',
        },
        {
          name: 'medical_records.vitals',
          label: 'Vitals',
        },
        {
          name: 'medical_records.smoking_history',
          label: 'Medical Records Smoking History',
        },
        {
          name: 'devices',
          label: 'Devices',
        },
      ],
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
    },
    {
      name: 'encounters',
      label: 'Encounters',
      icon: 'directions_walk',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
    },
    {
      name: 'find_care',
      label: 'Find Care',
      icon: 'search',
      subMenu: [
        {
          name: 'find_care.providers',
          label: 'Providers',
        },
        {
          name: 'find_care.pharmacies',
          label: 'Pharmacies',
        },
      ],
    },
    {
      name: 'connected_applications',
      label: 'Connected Applications',
      icon: 'extension',
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'medical_records.allergies',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <VerticalNav menus={data} expanded={expanded} active={active} onClick={onClickHandler} />
      </Collapsible>
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      count: 10
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      count: 25,
      subMenu: [
        {
          name: 'profile.personal',
          label: 'Personal',
          count: 5
        },
        {
          name: 'profile.are_team',
          label: 'Care Team',
          count: 10
        },
        {
          name: 'profile.goals',
          label: 'Goals',
          count: 5
        },
        {
          name: 'profile.care_plans',
          label: 'Care Plans',
          count: 5
        }
      ]
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      subMenu: [
        {
          name: 'medical_records.allergies',
          label: 'Allergies'
        },
        {
          name: 'medical_records.conditions',
          label: 'Conditions'
        },
        {
          name: 'medical_records.immunizations',
          label: 'Immunizations'
        },
        {
          name: 'medical_records.lab_results',
          label: 'Lab Results'
        },
        {
          name: 'medical_records.medications',
          label: 'Medications'
        },
        {
          name: 'medical_records.procedures',
          label: 'Procedures'
        },
        {
          name: 'medical_records.vitals',
          label: 'Vitals'
        },
        {
          name: 'medical_records.smoking_history',
          label: 'Medical Records Smoking History'
        },
        {
          name: 'devices',
          label: 'Devices'
        }
      ]
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
    },
    {
      name: 'encounters',
      label: 'Encounters',
      icon: 'directions_walk',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
    {
      name: 'find_care',
      label: 'Find Care',
      icon: 'search',
      subMenu: [
        {
          name: 'find_care.providers',
          label: 'Providers'
        },
        {
          name: 'find_care.pharmacies',
          label: 'Pharmacies'
        },
      ]
    },
    {
      name: 'connected_applications',
      label: 'Connected Applications',
      icon: 'extension'
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'medical_records.allergies'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={onClickHandler}
        />
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Overflow Behavior/Navigation Bar Overflow',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
