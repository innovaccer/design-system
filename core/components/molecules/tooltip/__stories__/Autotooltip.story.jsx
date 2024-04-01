import { Tooltip } from '@/index';

export const autoTooltip = () => {};

const customCode = `() => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);
  return (
    <div className="d-flex justify-content-around">
      <div style={{ maxWidth: 150 }}>
        <Tooltip showTooltipOnTruncation={true} tooltip="show me the tooltip on hover">
          <Text className="ellipsis--noWrap d-inline-block w-100">show me the tooltip on hover</Text>
        </Tooltip>
      </div>

      <div style={{ maxWidth: 300 }}>
        <Tooltip showTooltipOnTruncation={true} tooltip="Don't show me the tooltip">
          <Text className="ellipsis--noWrap d-inline-block w-100">Don't show me the tooltip on hover</Text>
        </Tooltip>
      </div>

      <div style={{ maxWidth: 200 }}>
        <Tooltip
          elementRef={elementRef}
          showTooltipOnTruncation={true}
          tooltip="John Doe: Passionate Innovator and Visionary Leader"
        >
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={elementRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}`;

export default {
  title: 'Overlays/Tooltip/Auto Tooltip',
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
