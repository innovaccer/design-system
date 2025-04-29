import * as React from 'react';
import { VerticalNav, Icon } from '@/index';

export const CustomOptionsRenderer = () => {
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
      count: 40,
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
          count: 10,
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment',
          count: 10,
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

  const customItemRenderer = (props) => {
    const { menu, onClick, hasSubmenu, expanded, isChildren, MenuIcon, MenuLabel, MenuPills } = props;
    return (
      <div
        aria-hidden="true"
        onClick={() => onClick(menu)}
        className={`p-5 d-flex align-items-center cursor-pointer ${isChildren ? 'ml-7' : ''}`}
      >
        {menu.icon && (
          <Icon data-test="DesignSystem-VerticalNav--Icon" className={expanded ? 'mr-4' : ''} name={menu.icon} />
        )}
        {MenuLabel()}
        <div className="ml-5 d-flex">{MenuPills()}</div>
        {hasSubmenu && MenuIcon()}
      </div>
    );
  };

  return (
    <div className="bg-secondary-lightest vh-75">
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
      label: 'Care Management policies',
      icon: 'forum',
      count: 40,
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
          count: 10
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment',
          count: 10
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
      icon: 'beenhere'
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
    const {menu, onClick, hasSubmenu, expanded, contentRef, isChildren, MenuIcon, MenuLabel, MenuPills} = props;
    const [isTextTruncated, setIsTextTruncated] = React.useState(false);
    const { detectTruncation } = Tooltip.useAutoTooltip();
  
    React.useEffect(() => {
      const isTruncated = detectTruncation(contentRef);
      setIsTextTruncated(isTruncated);
      console.log(isTruncated);
    }, []);

    return ( 
      <Tooltip showTooltip={isTextTruncated} tooltip={menu.label} position="right">
      <div 
        onClick={() => onClick(menu)}
        style={{width: '232px'}}
        className={\`p-5 d-flex align-items-center cursor-pointer \${isChildren ? 'ml-7' : ''}\`}
      >
        {menu.icon && (
          <Icon data-test="DesignSystem-VerticalNav--Icon" className={expanded ? 'mr-4' : ''} name={menu.icon} />
        )}
        {MenuLabel()}
        <div className="ml-5 d-flex">{MenuPills()}</div>
        {hasSubmenu && MenuIcon()}
      </div>
      </Tooltip>
    );
  };
  
  return (
    <div className="bg-secondary-lightest vh-75">
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
