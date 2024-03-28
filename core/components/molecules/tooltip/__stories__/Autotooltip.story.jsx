import { Tooltip } from '@/index';

export const autoTooltip = () => {};

const customCode = `() => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const firstBoundaryRef = React.useRef(null);
  const secondBoundaryRef = React.useRef(null);
  return (
    <div className="d-flex justify-content-around">
      <div style={{ maxWidth: 150 }}>
        <Tooltip.AutoTooltip tooltip="show me the tooltip on hover" boundaryRef={firstBoundaryRef}>
          <Text className="ellipsis--noWrap d-inline-block w-100" ref={firstBoundaryRef}>
            show me the tooltip on hover
          </Text>
        </Tooltip.AutoTooltip>
      </div>

      <div style={{ maxWidth: 300 }}>
        <Tooltip.AutoTooltip tooltip="Don't show me the tooltip" boundaryRef={secondBoundaryRef}>
          <Text className="ellipsis--noWrap d-inline-block w-100" ref={secondBoundaryRef}>
            Don't show me the tooltip on hover
          </Text>
        </Tooltip.AutoTooltip>
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
