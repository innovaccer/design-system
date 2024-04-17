import { Tooltip } from '@/index';

export const autoTooltipWithHook = () => {};

const customCode = `() => {
  const [isFirstTruncated, setIsFirstTruncated] = React.useState(false);
  const [isSecondTruncated, setIsSecondTruncated] = React.useState(false);

  const { detectTruncation } = Tooltip.useAutoTooltip();
  const firstContentRef = React.useRef(null);
  const SecondContentRef = React.useRef(null);

  React.useEffect(() => {
    const isFirstTruncated = detectTruncation(firstContentRef);
    const isSecondTruncated = detectTruncation(SecondContentRef);
    setIsFirstTruncated(isFirstTruncated);
    setIsSecondTruncated(isSecondTruncated);
  }, [firstContentRef, SecondContentRef]);

  return (
    <div className="d-flex justify-content-around">
      <div>
        <Tooltip showTooltip={isFirstTruncated} tooltip="John Doe: Passionate Innovator and Visionary Leader">
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={firstContentRef} style={{ maxWidth: 150 }} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip showTooltip={isSecondTruncated} tooltip="John Doe: Passionate Innovator and Visionary Leader">
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={SecondContentRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Tooltip/Auto Tooltip With Hook',
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
