import * as React from 'react';
import { Tooltip, Label, Switch, Button } from '@/index';

export const showTooltip = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div>
      <div className="mb-6 d-flex">
        <Label className="mr-4">Show Tooltip</Label>
        <Switch
          value={showTooltip}
          aria-label="Toggle tooltip"
          size="tiny"
          onChange={(_, selected) => setShowTooltip(selected)}
        />
      </div>

      <Tooltip showTooltip={showTooltip} tooltip="An awesome tooltip">
        <Button>Conditional Tooltip</Button>
      </Tooltip>
    </div>
  );
};

const customCode = `() => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div>
      <div className="mb-6 d-flex">
        <Label className="mr-4">Show Tooltip</Label>
        <Switch
          value={showTooltip}
          aria-label="Toggle tooltip"
          size="tiny"
          onChange={(_, selected) => setShowTooltip(selected)}
        />
      </div>

      <Tooltip showTooltip={showTooltip} tooltip="An awesome tooltip">
        <Button>Conditional Tooltip</Button>
      </Tooltip>
    </div>
  );
}`;

export default {
  title: 'Components/Tooltip/Show Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      docPage: {
        title: 'Tooltip',
        description: 'Conditionally render a tooltip.',
        customCode,
        noHtml: true,
      },
    },
  },
};
