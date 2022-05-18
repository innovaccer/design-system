import * as React from 'react';
import { Popover, Text } from '@/index';
import { PopoverProps } from '@/index.type';
import { BaseProps } from '@/utils/types';

// const tooltipPropsList = [
//   'trigger',
//   'on',
//   'open',
//   'offset',
//   'onToggle',
//   'dark',
//   'customStyle',
//   'closeOnBackdropClick',
//   'hideOnReferenceEscape',
//   'closeOnScroll',
// ] as const;
// type TooltipPopperProps = typeof tooltipPropsList[number];
export interface TooltipProps extends BaseProps {
  /**
   * Text to be rendered in `Tooltip`
   */
  tooltip: string;
  /**
   * Trigger for `Tooltip`
   */
  children: PopoverProps['trigger'];
}

export const Tooltip = (props: TooltipProps) => {
  const { children, tooltip, ...rest } = props;

  const tooltipWrapper = (
    <div className="Tooltip">
      <Text className="Tooltip-text" appearance="white">
        {tooltip}
      </Text>
    </div>
  );

  return (
    <Popover trigger={children} offset={'medium'} {...rest}>
      {tooltipWrapper}
    </Popover>
  );
};

// Tooltip.defaultProps = filterProps({
//   ...Popover.defaultProps,
//   hoverable: false
// }, propsList);
// Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
//   hoverable: false,
// });

export default Tooltip;
