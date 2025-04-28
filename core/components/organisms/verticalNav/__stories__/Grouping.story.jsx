import * as React from 'react';
import { VerticalNav, Collapsible } from '@/index';

export const grouping = () => {
  const data = [
    {
      name: 'customer_information',
      label: 'Customer Information',
      group: 'General',
      icon: 'assignment_ind',
    },
    {
      name: 'organizational_structure',
      label: 'Organizational Structure',
      group: 'General',
      icon: 'forum',
    },
    {
      name: 'contacts',
      label: 'Contacts',
      group: 'General',
      icon: 'people',
    },
    {
      name: 'empi',
      label: 'EMPI',
      group: 'Platform',
      icon: 'assignment',
    },
    {
      name: 'data_exchange',
      label: 'Data Exchange',
      group: 'Platform',
      icon: 'fact_check',
      subMenu: [
        {
          name: 'data_exchange.reports',
          label: 'Reports',
          icon: 'beenhere',
        },
        {
          name: 'data_exchange.destinations',
          label: 'Destinations',
          icon: 'accessibility_new',
        },
        {
          name: 'data_exchange.validation',
          label: 'Validation',
          icon: 'local_pharmacy',
        },
      ],
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
      group: 'Platform',
      icon: 'golf_course',
    },
    {
      name: 'pipelines',
      label: 'Pipelines',
      group: 'Apps',
      icon: 'businesses',
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports',
  });

  return (
    <div className="bg-secondary-lightest vh-75">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav menus={data} expanded={expanded} active={active} onClick={setActive} />
      </Collapsible>
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'customer_information',
      label: 'Customer Information',
      group: 'General',
      icon: 'assignment_ind'
    },
    {
      name: 'organizational_structure',
      label: 'Organizational Structure',
      group: 'General',
      icon: 'forum',
    },
    {
      name: 'contacts',
      label: 'Contacts',
      group: 'General',
      icon: 'people',
    },
    {
      name: 'empi',
      label: 'EMPI',
      group: 'Platform',
      icon: 'assignment',
    },
    {
      name: 'data_exchange',
      label: 'Data Exchange',
      group: 'Platform',
      icon: 'fact_check',
      subMenu: [
        {
          name: 'data_exchange.reports',
          label: 'Reports',
          icon: 'beenhere',
        },
        {
          name: 'data_exchange.destinations',
          label: 'Destinations',
          icon: 'accessibility_new'
        },
        {
          name: 'data_exchange.validation',
          label: 'Validation',
          icon: 'local_pharmacy',
        },
      ]
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
      group: 'Platform',
      icon: 'golf_course',
    },
    {
      name: 'pipelines',
      label: 'Pipelines',
      group: 'Apps',
      icon: 'businesses',
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports'
  });

  return (
    <div className="bg-secondary-lightest vh-75">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={data}
          expanded={expanded}
          active={active}
          onClick={setActive}
        />
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Grouping',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
