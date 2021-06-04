import * as React from 'react';
import { VerticalNav, Collapsible } from '@/index';
import { Menu } from '../../Navigation';
import './custom.class.story.css';
export const customMenuClass = () => {

  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      className:'myOwnClass',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      className:'myOwnClass',
      subMenu: [
        {
          name: 'profile.personal',
          label: 'Personal'
        },
        {
          name: 'profile.are_team',
          label: 'Care Team'
        },
        {
          name: 'profile.goals',
          label: 'Goals'
        },
        {
          name: 'profile.care_plans',
          label: 'Care Plans'
        }
      ]
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      className:'myOwnClass',
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
          label: 'medical_records.Smoking History'
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
      className:'myOwnClass',
      icon: 'list',
    },
    {
      name: 'encounters',
      label: 'Encounters',
      icon: 'directions_walk',
      className:'myOwnClass',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt',
      className:'myOwnClass',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
      className:'myOwnClass',
    },
    {
      name: 'find_care',
      label: 'Find Care',
      icon: 'search',
      className:'myOwnClass',
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
      icon: 'extension',
      className:'myOwnClass',
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'home'
  });

  const onClickHandler = (menu: Menu) => {
    setActive(menu);
  };

  return (
    <div style={{ height: '100vh', background: 'var(--secondary-lightest)' }}>
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <VerticalNav
          menus={data}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
        />
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
      className:'myOwnClass',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      className:'myOwnClass',
      subMenu: [
        {
          name: 'profile.personal',
          label: 'Personal'
        },
        {
          name: 'profile.are_team',
          label: 'Care Team'
        },
        {
          name: 'profile.goals',
          label: 'Goals'
        },
        {
          name: 'profile.care_plans',
          label: 'Care Plans'
        }
      ]
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      className:'myOwnClass',
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
          label: 'medical_records.Smoking History'
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
      className:'myOwnClass',
      icon: 'list',
    },
    {
      name: 'encounters',
      label: 'Encounters',
      icon: 'directions_walk',
      className:'myOwnClass',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt',
      className:'myOwnClass',
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
      className:'myOwnClass',
    },
    {
      name: 'find_care',
      label: 'Find Care',
      icon: 'search',
      className:'myOwnClass',
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
      icon: 'extension',
      className:'myOwnClass',
    },
  ];


  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'home'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div style={{ height: '100vh', background: 'var(--secondary-lightest)' }}>
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
  title: 'Components/VerticalNav/Custom Menu Class',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
