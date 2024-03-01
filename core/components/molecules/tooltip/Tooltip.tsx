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
}

export const Tooltip = (props: TooltipProps) => {
  const { children, tooltip, showTooltip, ...rest } = props;

  if (!showTooltip) {
    // If showTooltip is false skip the Popover and return the children directly
    return children;
  }

  const tooltipWrapper = (
    <div className="Tooltip">
      <Text className="Tooltip-text" appearance="white">
        {tooltip}
      </Text>
    </div>
  );

  return (
    <Popover
      trigger={children}
      on={'hover'}
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
  );
};

// Tooltip.defaultProps = filterProps({
//   ...Popover.defaultProps,
//   hoverable: false
// }, propsList);
Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
  hoverable: false,
  showTooltip: true,
});

export default Tooltip;
