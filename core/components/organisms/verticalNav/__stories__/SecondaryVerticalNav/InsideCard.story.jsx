import * as React from 'react';
import { VerticalNav, Card, Heading } from '@/index';

export const insideCard = () => {
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
      name: 'profile',
      label: 'Profile',
      icon: 'receipt',
    },
  ];

  const secondaryNavdata = [
    {
      name: '19/01/20',
      label: '19 Jan, 2020',
      group: 'Completed',
    },
    {
      name: '16/01/20',
      label: '16 Jan, 2020',
      group: 'Completed',
    },
    {
      name: '11/11/20',
      label: '11 Nov, 2020',
      group: 'Ongoing',
    },
    {
      name: '17/11/20',
      label: '17 Nov, 2020',
      group: 'Ongoing',
    },
    {
      name: '07/11/20',
      label: '7 Nov, 2020',
      group: 'Ongoing',
    },
    {
      name: '09/10/20',
      label: '9 Oct, 2020',
      group: 'Ongoing',
    },
    {
      name: '23/08/20',
      label: '23 Aug, 2020',
      group: 'Ongoing',
    },
  ];

  const [primaryActive, setPrimaryActive] = React.useState({
    name: 'care_management.timeline',
  });

  const [secondaryActive, setSecondaryActive] = React.useState({
    name: '19/01/20',
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-75 w-100">
      <VerticalNav menus={primaryNavdata} active={primaryActive} onClick={setPrimaryActive} />
      <div className="mx-6 w-75">
        <Heading className="my-5">Assessments</Heading>
        <Card shadow="none pb-12">
          <VerticalNav menus={secondaryNavdata} active={secondaryActive} onClick={setSecondaryActive} />
        </Card>
      </div>
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
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
  ];

  const secondaryNavdata = [
    {
      name: '19/01/20',
      label: '19 Jan, 2020',
      group: 'Completed'
    },
    {
      name: '16/01/20',
      label: '16 Jan, 2020',
      group: 'Completed'
    },
    {
      name: '11/11/20',
      label: '11 Nov, 2020',
      group: 'Ongoing'
    },
    {
      name: '17/11/20',
      label: '17 Nov, 2020',
      group: 'Ongoing'
    },
    {
      name: '07/11/20',
      label: '7 Nov, 2020',
      group: 'Ongoing'
    },
    {
      name: '09/10/20',
      label: '9 Oct, 2020',
      group: 'Ongoing'
    },
    {
      name: '23/08/20',
      label: '23 Aug, 2020',
      group: 'Ongoing'
    },
  ];

  const [primaryActive, setPrimaryActive] = React.useState({
    name: 'care_management.timeline'
  });

  const [secondaryActive, setSecondaryActive] = React.useState({
    name: '19/01/20'
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-75 w-100">
      <VerticalNav
        menus={primaryNavdata}
        active={primaryActive}
        onClick={setPrimaryActive}
      />
      <div className="mx-6 w-75">
        <Heading className="my-5">Assessments</Heading>
        <Card shadow="none pb-12">
          <VerticalNav
            menus={secondaryNavdata}
            active={secondaryActive}
            onClick={setSecondaryActive}
          />
        </Card>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Secondary Vertical Navigation/Inside Card',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
