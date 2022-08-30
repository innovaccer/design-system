import * as React from 'react';
import { VerticalNav } from '@/index';

export const LabelOverflowBehaviour = () => {
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
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  return (
    <div style={{ height: '90vh', background: 'var(--secondary-lightest)' }}>
      <VerticalNav menus={data} expanded={true} active={active} onClick={setActive} showTooltip={true} />
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
      icon: 'beenhere'
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });
  
  return (
    <div style={{ height: '90vh', background: 'var(--secondary-lightest)' }}>
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        showTooltip={true}      
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/Label Overflow Behaviour',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
