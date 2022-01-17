import * as React from 'react';
import { VerticalNav, Icon, Tooltip, Text } from '@/index';
import { MenuItemProps } from '../MenuItem';

export const CustomItemsRenderer = () => {
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

  const [active, setActive] = React.useState({
    name: 'care_management.timeline',
  });

  const customItemRenderer = (props: MenuItemProps) => {
    const { menu, expanded, isChildren } = props;
    return (
      <div className={`p-5 d-flex align-items-center cursor-pointer ${isChildren ? 'ml-7' : ''}`}>
        {menu.icon && (
          <Icon data-test="DesignSystem-VerticalNav--Icon" className={expanded ? 'mr-4' : ''} name={menu.icon} />
        )}
        <Tooltip tooltip={menu.label}>
          <Text weight="medium">{menu.label}</Text>
        </Tooltip>
      </div>
    );
  };

  return (
    <div style={{ height: '90vh', background: 'var(--secondary-lightest)' }}>
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        customItemRenderer={customItemRenderer}
      />
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

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const customItemRenderer = (props) => {
    const {menu, onClick, expanded, isChildren} = props;
    return ( 
      <div 
        onClick={() => onClick(menu)}
        className={\`p-5 d-flex align-items-center cursor-pointer \${isChildren ? 'ml-7' : ''}\`}
      >
        {menu.icon && 
            <Icon
              data-test="DesignSystem-VerticalNav--Icon"
              className={expanded ? 'mr-4' : ''}
              name={menu.icon}
            />
        }
        <Tooltip tooltip={menu.label}>
          <Text weight="medium">
            {menu.label}
          </Text>
        </Tooltip>
      </div>
    );
  };
  
  return (
    <div style={{ height: '90vh', background: 'var(--secondary-lightest)' }}>
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        customItemRenderer={customItemRenderer}
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/Custom Items Renderer',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
