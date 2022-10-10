import * as React from 'react';
import { VerticalNav } from '@/index';

export const nonCollapsibleVerticalNavigation = () => {
  const data = [
    {
      name: 'practice',
      label: 'Practice',
    },
    {
      name: 'users',
      label: 'Users',
    },
    {
      name: 'copayment',
      label: 'Copayment',
    },
    {
      name: 'subscription',
      label: 'Subscription',
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'users',
  });

  return (
    <div className="bg-secondary-lightest" style={{ height: '50vh' }}>
      <VerticalNav menus={data} active={active} expanded={true} onClick={setActive} />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'practice',
      label: 'Practice',
    },
    {
      name: 'users',
      label: 'Users',
    },
    {
      name: 'copayment',
      label: 'Copayment',
    },
    {
      name: 'subscription',
      label: 'Subscription',
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'users'
  });

  return (
    <div className="bg-secondary-lightest" style={{ height: '50vh'}}>
      <VerticalNav
        menus={data}
        active={active}
        expanded={true}
        onClick={setActive}
      />
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/Non Collapsible Vertical Navigation',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
