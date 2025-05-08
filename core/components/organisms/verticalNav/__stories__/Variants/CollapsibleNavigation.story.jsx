import * as React from 'react';
import { VerticalNav, Collapsible } from '@/index';

export const collapsibleNavigation = () => {
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

  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  return (
    <div className="vh-75 d-flex">
      <div className="w-50">
        <Collapsible expanded={expanded1} onToggle={setExpanded1} className="mr-14">
          <VerticalNav menus={data1} active={active} expanded={expanded1} onClick={setActive} />
        </Collapsible>
      </div>

      <div className="w-50">
        <Collapsible expanded={expanded2} onToggle={setExpanded2} className="">
          <VerticalNav menus={data2} active={active} expanded={expanded2} onClick={setActive} />
        </Collapsible>
      </div>
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

  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  return (
    <div className="vh-75 d-flex">
      <div className="w-50">
        <Collapsible expanded={expanded1} onToggle={setExpanded1} className="mr-14">
          <VerticalNav
            menus={data1}
            active={active}
            expanded={expanded1}
            onClick={setActive}
          />
        </Collapsible>
      </div>

      <div className="w-50">
        <Collapsible expanded={expanded2} onToggle={setExpanded2} className="">
          <VerticalNav
            menus={data2}
            active={active}
            expanded={expanded2}
            onClick={setActive}
          />
        </Collapsible>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Variants/Collapsible Navigation',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
