import * as React from 'react';
import Collapsible from '@/components/atoms/collapsible';
import { Icon, Text, Heading } from '@/index';

// CSF format story
export const CustomTrigger = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <Icon name="menu" className="cursor-pointer" onClick={() => setExpanded(!expanded)}></Icon>
        <Heading size="s" className="ml-4">
          Click to Open
        </Heading>
      </div>
      <Collapsible withTrigger={false} expanded={expanded} height="100vh">
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-6 Text--regular" />
          {expanded && <Text className="mr-6">Collapsible</Text>}
        </div>
      </Collapsible>
    </div>
  );
};

const customCode = `() => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <div className='d-flex align-items-center mb-3'>
        <Icon name="menu" className="cursor-pointer" onClick={() => setExpanded(!expanded) }></Icon>
        <Heading size='s' className="ml-4">Click to Open</Heading>
      </div>
      <Collapsible withTrigger={false} expanded={expanded} height="100vh">
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-6 Text--regular" />
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
