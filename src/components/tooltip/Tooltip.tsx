import * as React from 'react';
import { Popover, Text, PositionType } from '@/index';
import { BaseProps } from '@/utils/types';

export interface TooltipProps extends BaseProps {
  /**
   * Text to be rendered in `Tooltip`
   */
  text: string;
  /**
   * Trigger for `Tooltip`
   */
  children: React.ReactElement;
  /**
   * Determines from where the popover starts to open/close
   */
  placement?: PositionType;
  /**
   * Determines if tooltip triggers on hover or not
   */
  hoverable?: boolean;
}

export const Tooltip = (props: TooltipProps) => {
  const { children, text, placement, ...rest } = props;

  const tooltipWrapper = (
    <div className="Mds-Tooltip">
      <Text className="Mds-Tooltip-text" appearance="white">
        {text}
      </Text>
    </div>
  );

  return (
    <Popover
      placement={placement}
      trigger={children}
      offset={'medium'}
      animationClass={{
        open: `Mds-Tooltip-animation-open`,
        close: `Mds-Tooltip-animation-close`,
      }}
      role="tooltip"
      {...rest}
    >
      {tooltipWrapper}
    </Popover>
  );
};

Tooltip.defaultProps = {
  placement: 'bottom-start',
};

export default Tooltip;
