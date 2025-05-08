import * as React from 'react';
import Collapsible from '@/components/atoms/collapsible';
import { DatePicker, VerticalNav } from '@/index';

// CSF format story
export const all = () => {
  const data = [
    {
      name: 'to_dos',
      label: 'To-dos',
      icon: 'check_circle_outline',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10,
        },
        {
          name: 'to_dos.completed',
          label: 'Completed',
          count: 7,
        },
      ],
    },
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received',
    },
    {
      name: 'sent',
      label: 'Sent',
      icon: 'call_made',
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports',
  });

  return (
    <div className="bg-secondary-lightest vh-75">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <>
          {expanded && (
            <div className="mt-5 d-flex justify-content-center border-bottom">
              <DatePicker date={new Date()} size="small" />
            </div>
          )}
          <VerticalNav menus={data} expanded={expanded} active={active} onClick={setActive} />
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
    <div className="bg-secondary-lightest vh-75">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <>
        {expanded && (
          <div className="mt-5 d-flex justify-content-center border-bottom">
          <DatePicker date={new Date()} size="small" />
          </div>
          )}
          <VerticalNav
            menus={data}
            expanded={expanded}
            active={active}
            onClick={setActive}
          />
        </>
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/Collapsible/All',
  component: Collapsible,
  parameters: {
    docs: {
      docPage: {
        customCode,
        imports: { collapsible: Collapsible },
      },
    },
  },
};
