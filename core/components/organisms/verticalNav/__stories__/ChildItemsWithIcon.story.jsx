import * as React from 'react';
import { VerticalNav, Collapsible } from '@/index';

export const childItemsWithIcons = () => {
  const data = [
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
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment',
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm',
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course',
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new',
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy',
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses',
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

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav menus={data} active={active} expanded={expanded} onClick={setActive} />
      </Collapsible>
    </div>
  );
};

const customCode = `() => {

  const data = [
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
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses'
        }
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

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={setActive}
        />
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Navigation/VerticalNav/Child Items With Icons',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
