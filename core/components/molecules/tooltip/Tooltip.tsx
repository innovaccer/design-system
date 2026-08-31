import * as React from 'react';
import { Popover, Text } from '@/index';
import { PopoverProps } from '@/index.type';
import { BaseProps, filterProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
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

type TooltipSize = 'small' | 'regular';

export interface TooltipProps extends Omit<PopoverProps, TooltipPopperProps>, BaseProps {
  /**
   * Text to be rendered in `Tooltip`
   */
  tooltip: string;
  /**
   * Size of the `Tooltip`
   */
  size?: TooltipSize;
  /**
   * Render tooltip conditionally
   * @default true
   */
  showTooltip?: boolean;
  /**
   * Trigger for `Tooltip`.
   *
   * Must be a focusable element (e.g. `button`, `a`, or an element with a `tabIndex`)
   * so keyboard users can reveal the tooltip on focus, consistent with mouse hover.
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
  elementRef?: React.RefObject<HTMLElement>;
  /**
   * Handles open/close
   */
  open?: boolean;
  /**
   * Add delay to the tooltip opening event
   */
  openDelay?: number;
  /**
   * Hides the visual tooltip bubble from assistive technology and skips linking it to the
   * trigger via `aria-describedby`.
   *
   * Use this when the trigger already exposes an equivalent accessible description itself
   * (e.g. `Button`/`LinkButton`'s own `tooltip` prop, which renders a dedicated sr-only
   * description) so screen readers don't announce the same text twice.
   */
  'aria-hidden'?: React.AriaAttributes['aria-hidden'];
}

function assignRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (ref == null) return;
  if (typeof ref === 'function') {
    ref(value);
  } else {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
}

export const detectTruncation = (boundaryRef: React.RefObject<HTMLElement>) => {
  const element = boundaryRef?.current;
  const isTruncated = element ? element.scrollWidth > element.clientWidth : false;

  return isTruncated;
};

export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    tooltip,
    showTooltip,
    showOnTruncation,
    elementRef,
    className,
    size = 'regular',
    'aria-hidden': ariaHidden,
    ...rest
  } = props;
  const childrenRef = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);

  const tooltipIdRef = React.useRef<string | null>(null);
  if (tooltipIdRef.current === null) {
    tooltipIdRef.current = `Tooltip-${uidGenerator()}`;
  }
  const tooltipId = tooltipIdRef.current;

  // When true, the trigger already exposes an equivalent accessible description of its own
  // (e.g. Button/LinkButton's sr-only tooltip text), so this Tooltip must not add a second one.
  const hideFromAT = ariaHidden === true || ariaHidden === 'true';

  // Truncation tooltips repeat text that's already present (just visually clipped) in the
  // trigger/elementRef DOM node, so screen readers already have it — linking the tooltip
  // bubble via aria-describedby would announce the same text a second time.
  const skipDescription = hideFromAT || showOnTruncation;

  React.useEffect(() => {
    const element = elementRef ? elementRef : childrenRef;
    setIsTruncated(detectTruncation(element));
  }, [childrenRef, elementRef, children]);

  // Associates the trigger with the tooltip content so screen readers announce it,
  // regardless of whether the trigger also needs the ref used for truncation detection.
  // The ref passed via `extraProps` is merged with (not swapped for) any ref the caller
  // already attached to the trigger, so imperative access (e.g. `<Button ref={...}>`) keeps working.
  const withTooltipAria = (
    element: React.ReactElement<any>,
    extraProps: { ref?: React.Ref<any> } = {}
  ): React.ReactElement<any> => {
    if (!React.isValidElement(element)) return element;

    const existingRef = (element as React.ReactElement<any> & { ref?: React.Ref<any> }).ref;
    const mergedRef = extraProps.ref
      ? (node: unknown) => {
          assignRef(extraProps.ref, node);
          assignRef(existingRef, node);
        }
      : existingRef;

    if (skipDescription) {
      return React.cloneElement<any>(element, { ref: mergedRef });
    }

    // If the trigger's own accessible name (aria-label) already says the same thing as the
    // tooltip (e.g. a "Close" icon button with tooltip="Close"), describing it again would
    // make screen readers announce the same word twice — once as the name, once as the description.
    const triggerAriaLabel = (element.props as { 'aria-label'?: string })['aria-label'];
    const repeatsAccessibleName =
      typeof triggerAriaLabel === 'string' &&
      typeof tooltip === 'string' &&
      triggerAriaLabel.trim().toLowerCase() === tooltip.trim().toLowerCase();

    if (repeatsAccessibleName) {
      return React.cloneElement<any>(element, { ref: mergedRef });
    }

    const existingDescribedBy = (element.props as { 'aria-describedby'?: string })['aria-describedby'];
    return React.cloneElement<any>(element, {
      ref: mergedRef,
      'aria-describedby': existingDescribedBy ? `${existingDescribedBy} ${tooltipId}` : tooltipId,
    });
  };

  const renderChildren =
    elementRef || !React.isValidElement(children)
      ? withTooltipAria(children)
      : withTooltipAria(children, { ref: childrenRef });

  if (!showTooltip) {
    // If showTooltip is false skip the Popover and return the children directly
    return children;
  }

  const tooltipClass = classNames({
    [styles['Tooltip']]: true,
    [styles[`Tooltip--small`]]: size === 'small',
  });

  const tooltipWrapper = (
    <div
      id={skipDescription ? undefined : tooltipId}
      aria-hidden={hideFromAT || undefined}
      role="tooltip"
      className={tooltipClass}
      data-test="DesignSystem-Tooltip-Wrapper"
    >
      <Text className={styles['Tooltip-text']} appearance="white" size={size}>
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
  );
};

Tooltip.useAutoTooltip = function () {
  return {
    detectTruncation,
  };
};

Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
  hoverable: true,
  showTooltip: true,
  showOnTruncation: false,
});

export default Tooltip;
