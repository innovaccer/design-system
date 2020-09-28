import * as React from 'react';

export const narrowWidthContentTemplate = () => <></>;

const customCode = `() => {
  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360'
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans'
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
          label: 'Timeline'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans'
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
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });
  const [expanded, setExpanded] = React.useState(true);

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return(
    <Row className="vh-100 bg-secondary-lightest">
      <div className="d-flex bg-secondary-lighter">
        <Navigation
          type="vertical"
          menus={data}
          expanded={expanded}
          footer={true}
          onToggle={(val) => setExpanded(val)}
          active={active}
          onClick={onClickHandler}
        />
      </div>
      <Row className="justify-content-center">
        <Column size={8} className="d-flex flex-column h-100 overflow-hidden pb-6">
          <PageHeader
            title="Page title"
            separator={false}
          />
          <Row className="px-6 h-100">
            <Column className="h-100 v-100 bg-light" />
          </Row>
        </Column>
      </Row>
    </Row>
  );
}`;

export default {
  title: 'Patterns|Layouts',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Narrow width content Template',
        noProps: true
      }
    }
  }
};
