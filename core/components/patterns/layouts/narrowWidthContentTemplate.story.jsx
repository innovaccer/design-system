import * as React from 'react';
import { Collapsible, VerticalNav, PageHeader, Row, Column } from '@/index';
import { action } from '@/utils/action';

export const narrowWidthContentTemplate = () => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events',
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events',
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled',
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events',
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events',
        },
      ],
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt',
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
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

  const onClickHandler = (menu) => {
    action('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <Row className="vh-100 bg-secondary-lightest flex-nowrap">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav menus={menus} expanded={expanded} active={active} onClick={onClickHandler} hoverable={false} />
      </Collapsible>
      <Row className="justify-content-center">
        <Column size={8} className="d-flex flex-column pb-6">
          <PageHeader title="Page title" separator={false} />
          <Row className="px-6 h-100">
            <Column className="h-100 bg-light" />
          </Row>
        </Column>
      </Row>
    </Row>
  );
};

const customCode = `() => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'event'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'event'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'event'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'event'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return(
    <Row className="vh-100 bg-secondary-lightest flex-nowrap">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={menus}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </Collapsible>
      <Row className="justify-content-center">
        <Column size={8} className="d-flex flex-column pb-6">
          <PageHeader
            title="Page title"
            separator={false}
          />
          <Row className="px-6 h-100">
            <Column className="h-100 bg-light" />
          </Row>
        </Column>
      </Row>
    </Row>
  );
}`;

export default {
  title: 'Patterns/Layouts/Narrow Width Content Template',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Narrow width content Template',
        noProps: true,
      },
    },
  },
};
