import * as React from 'react';
import { Popover, Text } from '@/index';
import { PopoverProps } from '@/index.type';
import { BaseProps, filterProps } from '@/utils/types';

type Position = 'top-start' | 'top' | 'top-end' | 'right' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left';

const tooltipPropsList = [
  'trigger',
  'on',
  'open',
  'offset',
  'onToggle',
  'dark',
  'customStyle',
  'closeOnBackdropClick',
  'hideOnReferenceEscape',
  'closeOnScroll',
] as const;
const positionValue = {
  bottom: 'bottom',
  top: 'top',
  'top-start': 'top',
  'top-end': 'top',
  'bottom-start': 'bottom',
  'bottom-end': 'bottom',
  left: 'left',
  right: 'right',
};
type TooltipPopperProps = typeof tooltipPropsList[number];
export interface TooltipProps extends Omit<PopoverProps, TooltipPopperProps>, BaseProps {
  /**
   * Text to be rendered in `Tooltip`
   */
  tooltip: string;
  /**
   * Render tooltip conditionally
   * @default true
   */
  showTooltip?: boolean;
  /**
   * Trigger for `Tooltip`
   */
  children: PopoverProps['trigger'];
  /**
   * Position to place the `tooltip`
   *
   * @param Position -  | 'top-start'  | 'top'  | 'top-end'
   *  | 'right'  | 'bottom-end'  | 'bottom'  | 'bottom-start'  | 'left';
   */
  position: Position;
  /**
   * Render tooltip conditionally when text element
   * of `elementRef` is truncated
   * @default false
   */
  showTooltipOnTruncation?: boolean;
  /**
   * childern Refernce to detect the overflow
   * of text in case of `showTooltipOnTruncation` is true
   */
  elementRef?: React.RefObject<HTMLElement>;
}

export const Tooltip = (props: TooltipProps) => {
  const { children, tooltip, showTooltip, showTooltipOnTruncation, elementRef, ...rest } = props;
  const childernRef = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);

  if (!showTooltip) {
    // If showTooltip is false skip the Popover and return the children directly
    return children;
  }

  React.useEffect(() => {
    const element = elementRef ? elementRef.current : childernRef.current;
    if (element) {
      setIsTruncated(element.scrollWidth > element.clientWidth);
    }
  }, [childernRef, elementRef]);

  const renderChildern = () => {
    if (elementRef || !React.isValidElement(children)) {
      return children;
    }
    return React.cloneElement(children as React.ReactElement<any>, {
      ref: childernRef,
    });
  };

  const tooltipWrapper = (
    <div className="Tooltip">
      <Text className="Tooltip-text" appearance="white">
        {tooltip}
      </Text>
    </div>
  );

  const isTooltipVisible = showTooltipOnTruncation ? isTruncated : true;

  return isTooltipVisible ? (
    <Popover
      trigger={renderChildern()}
      on={'hover'}
      triggerClass={'d-flex'}
      offset={'medium'}
      {...rest}
      animationClass={{
        open: `Tooltip-animation-open-${positionValue[props.position]}`,
        close: `Tooltip-animation-close-${positionValue[props.position]}`,
      }}
      className="Tooltip-container"
    >
      {tooltipWrapper}
    </Popover>
  ) : (
    renderChildern()
  );
};

Tooltip.useAutoTooltip = function () {
  const detectTruncation = (boundaryRef: React.RefObject<HTMLElement>) => {
    const element = boundaryRef?.current;
    const isTruncated = element ? element.scrollWidth > element.clientWidth : false;

    return isTruncated;
  };
  return {
    detectTruncation,
  };
};

Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
  hoverable: false,
  showTooltip: true,
  showTooltipOnTruncation: false,
});

export default Tooltip;
