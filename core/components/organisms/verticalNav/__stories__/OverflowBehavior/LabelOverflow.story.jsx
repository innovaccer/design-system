import * as React from 'react';
import { VerticalNav } from '@/index';

export const LabelOverflow = () => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind',
    },
    {
      name: 'care_management',
      label: 'Care Management Timeline Protocol',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people',
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol Management Guidelines',
          icon: 'fact_check',
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment',
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled',
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health Precautions Template',
      icon: 'beenhere',
      count: 10,
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  return (
    <div className="bg-secondary-lightest vh-75">
      <VerticalNav menus={data} expanded={true} active={active} onClick={setActive} />
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
      label: 'Care Management Timeline Protocol',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol Management Guidelines',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health Precautions Template',
      icon: 'beenhere',
      count: 10,
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });
  
  return (
    <div className="bg-secondary-lightest vh-75">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}   
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Overflow Behavior/Label Overflow',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
