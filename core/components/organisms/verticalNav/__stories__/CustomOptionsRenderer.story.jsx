import * as React from 'react';
import { VerticalNav, Icon } from '@/index';

export const CustomOptionsRenderer = () => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Assessment Management',
      icon: 'assignment_ind',
    },
    {
      name: 'care_management',
      label: 'Care Management Policies',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people',
          count: 10,
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
          icon: 'alarm_filled',
          count: 10,
        },
      ],
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled',
      count: 100,
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
      count: 20,
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

  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  const customOptionRenderer = (props) => {
    const { menu, onClick, hasSubmenu, expanded, MenuIcon, MenuLabel, MenuPills } = props;
    return (
      <>
        <div
          aria-hidden="true"
          onClick={() => onClick(menu)}
          className={'d-flex align-items-center cursor-pointer overflow-hidden'}
        >
          {menu.icon && (
            <Icon data-test="DesignSystem-VerticalNav--Icon" className={expanded ? 'mr-4' : ''} name={menu.icon} />
          )}
          {MenuLabel()}
        </div>
        {MenuPills()}
        {hasSubmenu && MenuIcon()}
      </>
    );
  };

  return (
    <div className="bg-secondary-lightest vh-75">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        customOptionRenderer={customOptionRenderer}
      />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Assessment Management',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management Policies',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people',
          count: 10
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
          icon: 'alarm_filled',
          count: 10
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled',
      count: 100
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere',
      count: 20
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

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const customOptionRenderer = (props) => {
    const { menu, onClick, hasSubmenu, expanded, MenuIcon, MenuLabel, MenuPills, MenuWrapper, isActive } = props;
    return (
      <>
        <MenuWrapper>
          {menu.icon && (
            <Icon className={expanded ? 'mr-4' : ''} name={menu.icon} />
          )}
          {MenuLabel()}
        </MenuWrapper>
        {MenuPills()}
        {hasSubmenu && MenuIcon()}
      </>
    );
  };
  
  return (
    <div className="bg-secondary-lightest vh-75">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        customOptionRenderer={customOptionRenderer}
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Custom Options Renderer',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
