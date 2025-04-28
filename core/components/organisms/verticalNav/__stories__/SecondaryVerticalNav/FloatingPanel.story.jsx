import * as React from 'react';
import { VerticalNav } from '@/index';

export const floatingPanel = () => {
  const primaryNavdata = [
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
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit',
    },
  ];

  const secondaryNavdata = [
    {
      name: '11/12/20',
      label: '11 Dec, 2020',
    },
    {
      name: '17/11/20',
      label: '17 Nov, 2020',
    },
    {
      name: '07/11/20',
      label: '7 Nov, 2020',
    },
    {
      name: '09/10/20',
      label: '9 Oct, 2020',
    },
    {
      name: '23/08/20',
      label: '23 Aug, 2020',
    },
  ];

  const [primaryActive, setPrimaryActive] = React.useState({
    name: 'care_management.timeline',
  });

  const [secondaryActive, setSecondaryActive] = React.useState({
    name: '11/12/20',
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-75">
      <VerticalNav menus={primaryNavdata} active={primaryActive} onClick={setPrimaryActive} />
      <VerticalNav
        menus={secondaryNavdata}
        active={secondaryActive}
        rounded={true}
        className="mt-10 ml-5"
        onClick={setSecondaryActive}
      />
    </div>
  );
};

const customCode = `() => {

  const primaryNavdata = [
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
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
  ];

  const secondaryNavdata = [
    {
      name: '11/12/20',
      label: '11 Dec, 2020',
    },
    {
      name: '17/11/20',
      label: '17 Nov, 2020',
    },
    {
      name: '07/11/20',
      label: '7 Nov, 2020',
    },
    {
      name: '09/10/20',
      label: '9 Oct, 2020',
    },
    {
      name: '23/08/20',
      label: '23 Aug, 2020',
    },
  ];

  const [primaryActive, setPrimaryActive] = React.useState({
    name: 'care_management.timeline'
  });

  const [secondaryActive, setSecondaryActive] = React.useState({
    name: '11/12/20'
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-75">
      <VerticalNav
        menus={primaryNavdata}
        active={primaryActive}
        onClick={setPrimaryActive}
      />
      <VerticalNav
        menus={secondaryNavdata}
        active={secondaryActive}
        rounded={true}
        className="mt-10 ml-5"
        onClick={setSecondaryActive}
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Secondary Vertical Navigation/Floating Panel',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
