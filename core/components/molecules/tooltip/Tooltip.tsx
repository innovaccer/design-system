import * as React from 'react';
import { Popover, Text } from '@/index';
import { PopoverProps } from '@/index.type';
import { BaseProps, filterProps } from '@/utils/types';

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
}

export const Tooltip = (props: TooltipProps) => {
  const { children, tooltip, showTooltip, ...rest } = props;

  const [openPopover, setOpenPopover] = React.useState(false);

  // React.useEffect(() => {
  //   // (children as Element).addEventListener('focus');
  // }, []);

  const handleFocusEvent = () => {
    // Handle the event here
    console.log('Focus event occurred:');
    setOpenPopover(true);
  };

  const handleBlurEvent = () => {
    // Handle the event here
    console.log('Blur event occurred:', openPopover);
    setOpenPopover(false);
  };

  // Attach event listeners to children elements
  const childrenWithEvents = React.Children.map(children, (child) => {
    // Ensure child is an element (not a string or null)
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        onFocus: handleFocusEvent,
        onBlur: handleBlurEvent,
        // className: 'bg-primary',
        ['aria-describedby']: 'tooltip-wrapper',
      });
    }
    return child;
  });

  if (!showTooltip) {
    // If showTooltip is false skip the Popover and return the children directly
    return childrenWithEvents;
  }

  const tooltipWrapper = (
    <div className="Tooltip" id="tooltip-wrapper">
      <Text className="Tooltip-text" appearance="white">
        {tooltip}
      </Text>
    </div>
  );

  return (
    <Popover
      trigger={childrenWithEvents}
      on={'hover'}
      open={openPopover}
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
