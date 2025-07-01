import * as React from 'react';
import { Popover, Text } from '@/index';
import { PopoverProps } from '@/index.type';
import { BaseProps, filterProps } from '@/utils/types';
import styles from '@css/components/tooltip.module.css';
import classNames from 'classnames';

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

type TooltipPopperProps = (typeof tooltipPropsList)[number];

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
  showOnTruncation?: boolean;
  /**
   * text element for reference to detect the overflow
   * of text in case when `showOnTruncation` is true otherwise
   * it will refer to the rendered children
   */
  elementRef?: React.RefObject<HTMLElement | null>;
  /**
   * Handles open/close
   */
  open?: boolean;
  /**
   * Add delay to the tooltip opening event
   */
  openDelay?: number;
}

export const detectTruncation = (boundaryRef: React.RefObject<HTMLElement | null>) => {
  const element = boundaryRef?.current;
  const isTruncated = element ? element.scrollWidth > element.clientWidth : false;

  return isTruncated;
};

export const Tooltip = (props: TooltipProps) => {
  const { children, tooltip, showTooltip, showOnTruncation, elementRef, className, ...rest } = props;
  const childrenRef = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);

  React.useEffect(() => {
    const element = elementRef ? elementRef : childrenRef;
    setIsTruncated(detectTruncation(element));
  }, [childrenRef, elementRef, children]);

  const renderChildren =
    elementRef || !React.isValidElement(children)
      ? children
      : React.cloneElement(children as React.ReactElement<any>, {
          ref: childrenRef,
        });

  if (!showTooltip) {
    // If showTooltip is false skip the Popover and return the children directly
    return children;
  }

  const tooltipWrapper = (
    <div className={styles['Tooltip']}>
      <Text className={styles['Tooltip-text']} appearance="white">
        {tooltip}
      </Text>
    </div>
  );

  const classes = classNames(styles['Tooltip-container'], className);

  if (showOnTruncation) {
    return isTruncated ? (
      <Popover
        trigger={renderChildren}
        on={'hover'}
        offset={'medium'}
        animationClass={{
          open: styles[`Tooltip-animation-open-${positionValue[props.position]}`],
          close: styles[`Tooltip-animation-close-${positionValue[props.position]}`],
        }}
        className={classes}
        {...rest}
      >
        {tooltipWrapper}
      </Popover>
    ) : (
      renderChildren
    );
  }

  return (
    <Popover
      trigger={children}
      on={'hover'}
      offset={'medium'}
      animationClass={{
        open: styles[`Tooltip-animation-open-${positionValue[props.position]}`],
        close: styles[`Tooltip-animation-close-${positionValue[props.position]}`],
      }}
      className={classes}
      {...rest}
    >
      {tooltipWrapper}
    </Popover>
  );
};

Tooltip.useAutoTooltip = function () {
  return {
    detectTruncation,
  };
};

Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
  hoverable: false,
  showTooltip: true,
  showOnTruncation: false,
});

export default Tooltip;
