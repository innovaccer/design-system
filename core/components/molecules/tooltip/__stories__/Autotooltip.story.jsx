import * as React from 'react';
import { Tooltip, Text, Avatar } from '@/index';

export const autoTooltip = () => {
  const elementRef = React.useRef(null);
  return (
    <div className="d-flex justify-content-around">
      <div>
        <Tooltip showOnTruncation={true} tooltip="show me the tooltip on hover">
          <Text style={{ maxWidth: 150 }} className="ellipsis--noWrap d-inline-block w-100">
            show me the tooltip on hover
          </Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip showOnTruncation={true} tooltip="Don't show me the tooltip">
          <Text style={{ maxWidth: 300 }} className="ellipsis--noWrap d-inline-block w-100">
            Don't show me the tooltip on hover
          </Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          elementRef={elementRef}
          showOnTruncation={true}
          tooltip="John Doe: Passionate Innovator and Visionary Leader"
        >
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text style={{ maxWidth: 200 }} ref={elementRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

const customCode = `() => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);
  return (
    <div className="d-flex justify-content-around">
      <div>
        <Tooltip showOnTruncation={true} tooltip="show me the tooltip on hover">
          <Text style={{ maxWidth: 150 }} className="ellipsis--noWrap d-inline-block w-100">
            show me the tooltip on hover
          </Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip showOnTruncation={true} tooltip="Don't show me the tooltip">
          <Text style={{ maxWidth: 300 }} className="ellipsis--noWrap d-inline-block w-100">
            Don't show me the tooltip on hover
          </Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          elementRef={elementRef}
          showOnTruncation={true}
          tooltip="John Doe: Passionate Innovator and Visionary Leader"
        >
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text style={{ maxWidth: 200 }} ref={elementRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Tooltip/Auto Tooltip',
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
