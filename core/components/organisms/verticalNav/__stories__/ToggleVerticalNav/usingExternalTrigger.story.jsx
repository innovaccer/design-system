import * as React from 'react';
import Collapsible from '@/components/atoms/collapsible';
import { VerticalNav, Button } from '@/index';

// CSF format story
export const usingExternalTrigger = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: "To-do's.Due",
  });

  const data = [
    {
      name: "To-do's",
      label: "To-do's",
      icon: 'assignment_ind',
      count: 31,
      subMenu: [
        {
          name: "To-do's.Due",
          label: 'Due',
          count: 31,
        },
        {
          name: "To-do's.Completed",
          label: 'Completed',
          count: 0,
        },
      ],
    },
    {
      name: 'Received',
      label: 'Received',
      count: 0,
    },
    {
      name: 'Sent',
      label: 'Sent',
      count: 5,
    },
  ];

  return (
    <div>
      <Button appearance="primary" className="mb-6" onClick={() => setExpanded(!expanded)}>
        Click here
      </Button>
      <Collapsible withTrigger={false} expanded={expanded} height="75vh">
        <VerticalNav menus={data} active={active} expanded={expanded} onClick={setActive} />
      </Collapsible>
    </div>
  );
};

const customCode = `() => {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'TODOs.Due',
  });

  const data = [
    {
      name: 'TODOs',
      label: 'TODOs',
      icon: 'assignment_ind',
      count: 31,
      subMenu: [
        {
          name: 'TODOs.Due',
          label: 'Due',
          count: 31
        },
        {
          name: 'TODOs.Completed',
          label: 'Completed',
          count: 0
        },
      ],
    },
    {
      name: 'Received',
      label: 'Received',
      count: 0
    },
    {
      name: 'Sent',
      label: 'Sent',
      count: 5
    },
  ];

  return (
    <div>
      <Button appearance="primary" className="mb-6" onClick={() => setExpanded(!expanded)}>
        Click here
      </Button>
      <Collapsible withTrigger={false} expanded={expanded} height="75vh">
        <VerticalNav menus={data} active={active} expanded={expanded} onClick={setActive} />
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/VerticalNav/VerticalNav/Toggle Vertical Nav/Using External Trigger',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
