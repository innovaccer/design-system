import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Collapsible from '@/components/atoms/collapsible';
import { Icon, Text } from '@/index';

// CSF format story
export const all = () => {
  const hoverable = boolean('hoverable', true);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="d-flex">
      <Collapsible
        expanded={expanded}
        hoverable={hoverable}
        height="100vh"
        onToggle={setExpanded}
      >
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-5" />
          {expanded && (
            <Text className="mr-6">Collapsible</Text>
          )}
        </div>
      </Collapsible>
      <div>Testing</div>
    </div>
  );
};

const customCode = `() => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{height: "100vh"}}>
      <Collapsible
        expanded={expanded}
        height="100vh"
        onToggle={setExpanded}
      >
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-5" />
          {expanded && (
            <Text className="mr-6">Collapsible</Text>
          )}
        </div>
      </Collapsible>
    </div>
  );
}`;

export default {
  title: 'Components/Collapsible/All',
  component: Collapsible,
  parameters: {
    docs: {
      docPage: {
        customCode,
        imports: { collapsible: Collapsible }
      }
    }
  }
};
