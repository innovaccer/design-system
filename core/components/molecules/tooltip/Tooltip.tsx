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
  elementRef?: React.RefObject<HTMLElement>;
  /**
   * Handles open/close
   */
  open?: boolean;
  /**
   * Add delay to the tooltip opening event
   */
  openDelay?: number;
}

export const detectTruncation = (boundaryRef: React.RefObject<HTMLElement>) => {
  const element = boundaryRef?.current;
  const isTruncated = element ? element.scrollWidth > element.clientWidth : false;

  return isTruncated;
};

export const Tooltip = (props: TooltipProps) => {
  const { children, tooltip, showTooltip, showOnTruncation, elementRef, className, size = 'regular', ...rest } = props;
  const childrenRef = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);
  // When the Tooltip is explicitly hidden from assistive tech
  // (`aria-hidden`), the consumer already handles its own a11y wiring
  // (e.g. Button/LinkButton render their own srOnly text + describedby).
  // In that case we must NOT add a second `aria-describedby`/id.
  const ariaHidden = (rest as { 'aria-hidden'?: boolean | 'true' | 'false' })['aria-hidden'];
  const isAriaHidden = ariaHidden === true || ariaHidden === 'true';

  const tooltipIdRef = React.useRef<string | null>(null);
  if (tooltipIdRef.current === null) {
    tooltipIdRef.current = `Tooltip-${uidGenerator()}`;
  }
  const tooltipId = tooltipIdRef.current;

  // Whether `element` should be associated with the tooltip text via
  // `aria-describedby` (and, consequently, whether the persistent sr-only
  // node carrying that text should be rendered at all).
  // Skips when the trigger already exposes the same text via `aria-label`
  // (e.g. icon-only Button: `aria-label="Close"` inside `<Tooltip tooltip="Close">`).
  // Adding `aria-describedby` to the identical text makes assistive tech
  // announce the name twice ("Close, Close"); rendering the sr-only node in
  // that case would leave it unreferenced.
  const shouldDescribe = (element: React.ReactNode): element is React.ReactElement<any> => {
    if (isAriaHidden || !React.isValidElement(element)) return false;
    if (element.type === React.Fragment) return false;
    const childAriaLabel = (element.props as { 'aria-label'?: string })['aria-label'];
    if (typeof tooltip === 'string' && typeof childAriaLabel === 'string' && childAriaLabel.trim() === tooltip.trim()) {
      return false;
    }
    return true;
  };

  // Associates the trigger with the tooltip content so assistive tech
  // announces the tooltip text via `aria-describedby`, without altering
  // Popover/PopperWrapper behavior for other consumers.
  const withTooltipDescribedBy = (element: React.ReactElement<any>) => {
    if (!shouldDescribe(element)) return element;
    const existingDescribedBy = (element.props as { 'aria-describedby'?: string })['aria-describedby'];
    return React.cloneElement(element, {
      'aria-describedby': existingDescribedBy ? `${existingDescribedBy} ${tooltipId}` : tooltipId,
    } as React.HTMLAttributes<HTMLElement>);
  };

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

  const tooltipClass = classNames({
    [styles['Tooltip']]: true,
    [styles[`Tooltip--small`]]: size === 'small',
  });

  const tooltipWrapper = (
    <div role="tooltip" className={tooltipClass} data-test="DesignSystem-Tooltip-Wrapper">
      <Text className={styles['Tooltip-text']} appearance="white" size={size}>
        {tooltip}
      </Text>
    </div>
  );

  // Persisted (always mounted) sr-only node carrying the tooltip text at
  // `tooltipId`. Unlike `tooltipWrapper`, which only mounts while the
  // Popover is open, this stays in the DOM so `aria-describedby` on the
  // trigger always resolves to real content — including when a
  // screen-reader user focuses the trigger without hovering/opening it.
  // Only rendered when the described child actually gets `aria-describedby`
  // (see `shouldDescribe`), otherwise it would be an unreferenced sr-only
  // node announced on its own (e.g. duplicate-label triggers like the
  // Modal close button or Calendar nav arrows).
  const renderPersistentDescription = (describedElement: React.ReactNode) =>
    shouldDescribe(describedElement) ? (
      <span id={tooltipId} className={styles['Tooltip-srOnly']}>
        {tooltip}
      </span>
    ) : null;

  const classes = classNames(styles['Tooltip-container'], className);

  if (showOnTruncation) {
    return isTruncated ? (
      <>
        {renderPersistentDescription(renderChildren)}
        <Popover
          trigger={withTooltipDescribedBy(renderChildren)}
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
      </>
    ) : (
      renderChildren
    );
  }

  return (
    <>
      {renderPersistentDescription(children)}
      <Popover
        trigger={withTooltipDescribedBy(children)}
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
    </>
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
