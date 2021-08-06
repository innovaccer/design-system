import * as React from 'react';
import { Popover, Text } from '@/index';
import { PopoverProps } from '@/index.type';
import { BaseProps, filterProps } from '@/utils/types';

const propsList = [
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
type PopperProps = typeof propsList[number];
export interface TooltipProps extends Omit<PopoverProps, PopperProps>, BaseProps {
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
    <Popover trigger={children} on={'hover'} offset={'medium'} {...rest}>
      {tooltipWrapper}
    </Popover>
  );
};

// Tooltip.defaultProps = filterProps({
//   ...Popover.defaultProps,
//   hoverable: false
// }, propsList);
Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, propsList), {
  hoverable: false,
});

export default Tooltip;
