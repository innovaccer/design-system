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
      <div style={{ maxWidth: 150 }}>
        {isFirstTruncated ? (
          <Tooltip tooltip="John Doe: Passionate Innovator and Visionary Leader">
            <div className="d-flex ellipsis--noWrap">
              <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
              <Text ref={firstContentRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
                John Doe: Passionate Innovator and Visionary Leader
              </Text>
            </div>
          </Tooltip>
        ) : (
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={firstContentRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        )}
      </div>
      <div>
      {isSecondTruncated ? (
        <Tooltip tooltip="John Doe: Passionate Innovator and Visionary Leader">
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={SecondContentRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      ) : (
        <div className="d-flex ellipsis--noWrap">
          <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
          <Text ref={SecondContentRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
            John Doe: Passionate Innovator and Visionary Leader
          </Text>
        </div>
      )}
    </div>
    </div>
  );
}`;

export default {
  title: 'Overlays/Tooltip/Auto Tooltip With Hook',
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
