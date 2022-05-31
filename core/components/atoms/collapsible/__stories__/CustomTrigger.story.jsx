import * as React from 'react';
import Collapsible from '@/components/atoms/collapsible';
import { Icon, VerticalNav, Heading } from '@/index';

// CSF format story
export const CustomTrigger = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'To-do\'s.Due',
  });

  const data = [
    {
      name: 'To-do\'s',
      label: 'To-do\'s',
      icon: 'assignment_ind',
      count: 31,
      subMenu: [
        {
          name: 'To-do\'s.Due',
          label: 'Due',
          count: 31
        },
        {
          name: 'To-do\'s.Completed',
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
      <div className='d-flex align-items-center mb-3'>
        <Icon name="menu" className="cursor-pointer" onClick={() => setExpanded(!expanded)}></Icon>
        <Heading size='s' className="ml-4">Click to Open</Heading>
      </div>
      <Collapsible withTrigger={false} expanded={expanded} height="100vh">
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-5 Text--regular" />
          {expanded && <Text className="mr-6">Collapsible</Text>}
        </div>
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
      <div className='d-flex align-items-center mb-3'>
        <Icon name="menu" className="cursor-pointer" onClick={() => setExpanded(!expanded) }></Icon>
        <Heading size='s' className="ml-4">Click to Open</Heading>
      </div>
      <Collapsible withTrigger={false} expanded={expanded} height="100vh">
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-5 Text--regular" />
          {expanded && <Text className="mr-6">Collapsible</Text>}
        </div>
        </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/Collapsible/Custom Trigger',
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
