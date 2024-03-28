import * as React from 'react';
import { Tooltip } from '@/index';
import { TooltipProps } from '@/index.type';

interface AutoTooltipProps extends TooltipProps {
  boundaryRef: React.RefObject<HTMLDivElement>;
}

export const AutoTooltip = (props: AutoTooltipProps) => {
  const { children, boundaryRef, ...rest } = props;
  const [isTruncated, setIsTruncated] = React.useState(false);

  React.useEffect(() => {
    checkTruncation();
  }, [children, boundaryRef]);

  const checkTruncation = () => {
    const element = boundaryRef.current;
    if (element) {
      setIsTruncated(element.scrollWidth > element.clientWidth);
    }
  };

  return isTruncated ? (
    <Tooltip triggerClass={'d-inline'} {...rest}>
      <div onMouseEnter={checkTruncation}>{children}</div>
    </Tooltip>
  ) : (
    <div>{children}</div>
  );
};

export default AutoTooltip;
