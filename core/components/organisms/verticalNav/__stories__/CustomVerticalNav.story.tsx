import * as React from 'react';
import { VerticalNav, Collapsible, DatePicker } from '@/index';

export const cutsomVerticalNavigation = () => {

  const data = [
    {
      name: 'to_dos',
      label: 'To-dos',
      icon: 'check_circle_outline',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10
        },
        {
          name: 'to_dos.completed',
          label: 'Completed',
          count: 7
        },
      ]
    },
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received'
    },
    {
      name: 'sent',
      label: 'Sent',
      icon: 'call_made'
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports'
  });

  return (
    <div style={{ height: '90vh', background: 'var(--secondary-lightest)' }}>
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <>
          <VerticalNav
            menus={data}
            expanded={expanded}
            active={active}
            onClick={setActive}
          />
          {expanded && (
            <div className="mt-5 d-flex justify-content-center" style={{ borderTop: 'var(--border)' }}>
              <DatePicker date={new Date()} size="small" />
            </div>
          )}
        </>
      </Collapsible>
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'to_dos',
      label: 'To-dos',
      icon: 'check_circle_outline',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10
        },
        {
          name: 'to_dos.completed',
          label: 'Completed',
          count: 7
        },
      ]
    },
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received'
    },
    {
      name: 'sent',
      label: 'Sent',
      icon: 'call_made'
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports'
  });

  return (
    <div style={{ height: '90vh', background: 'var(--secondary-lightest)' }}>
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <>
          <VerticalNav
            menus={data}
            expanded={expanded}
            active={active}
            onClick={setActive}
          />
          {expanded && (
            <div className="mt-5 d-flex justify-content-center" style={{ borderTop: 'var(--border)' }}>
              <DatePicker date={new Date()} size="small" />
            </div>
          )}
        </>
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/Cutsom Vertical Navigation',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
