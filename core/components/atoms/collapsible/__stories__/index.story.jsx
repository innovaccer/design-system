import * as React from 'react';
import Collapsible from '@/components/atoms/collapsible';
import { Icon, Text } from '@/index';

// CSF format story
export const all = () => {
  const hoverable = true;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Collapsible expanded={expanded} hoverable={hoverable} height="100vh" onToggle={setExpanded}>
      <div className="d-flex pt-4">
        <Icon name="events" className="d-flex align-items-center px-6 Text--regular" />
        {expanded && <Text className="mr-6">Collapsible</Text>}
      </div>
    </Collapsible>
  );
};

const customCode = `() => {
  const [expanded, setExpanded] = React.useState(false);
  return (
      <Collapsible
        expanded={expanded}
        height="100vh"
        onToggle={setExpanded}
      >
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-6 Text--regular" />
          {expanded && (
            <Text className="mr-6">Collapsible</Text>
          )}
        </div>
      </Collapsible>
  );
}`;

export default {
  title: 'Components/Collapsible/All',
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
