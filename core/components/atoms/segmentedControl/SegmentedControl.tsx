import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import {
  SegmentedControlContext,
  SegmentedControlContextValue,
  SegmentedControlValue,
  SegmentedControlSize,
} from './SegmentedControlContext';
import { SegmentedControlItem, SegmentedControlItemProps } from './SegmentedControlItem';
import styles from '@css/components/segmentedControl.module.css';

export type { SegmentedControlValue, SegmentedControlSize };

export interface SegmentedControlProps extends BaseProps {
  /**
   * Index of desired selected segment.
   */
  activeIndex?: number;
  /**
   * Called with a new index when a new segment is selected by user.
   */
  onChange?: (index: number) => void;
  /**
   * Size of the control.
   * @default "regular"
   */
  size?: SegmentedControlSize;
  /**
   * Expands segments to fill available width.
   */
  expanded?: boolean;
  /**
   * Maximum width of each segment. Not applicable if `expanded` is true.
   * @default "256px"
   */
  maxWidth?: string | number;
  /**
   * Makes all segments equal width based on the largest content. Not applicable if `expanded` is true.
   * @default true
   */
  isEqualWidth?: boolean;
  /**
   * Disables the entire control and all segments.
   */
  disabled?: boolean;
  /**
   * Child segments (SegmentedControl.Item components)
   */
  children: React.ReactElement<SegmentedControlItemProps> | React.ReactElement<SegmentedControlItemProps>[];
}

const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>((props, ref) => {
  const {
    activeIndex,
    onChange,
    size = 'regular',
    expanded,
    maxWidth = '256px',
    isEqualWidth = true,
    disabled,
    className,
    children,
  } = props;

  const baseProps = extractBaseProps(props);

  const childrenArray = React.Children.toArray(children) as React.ReactElement<SegmentedControlItemProps>[];
  const validChildren = childrenArray.filter((child) => React.isValidElement(child));
  const totalChildren = validChildren.length;

  const [internalIndex, setInternalIndex] = React.useState<number>(
    activeIndex !== undefined && activeIndex < totalChildren ? activeIndex : 0
  );

  React.useEffect(() => {
    if (activeIndex !== undefined && activeIndex < totalChildren) {
      setInternalIndex(activeIndex);
    }
  }, [activeIndex, totalChildren]);

  const selectedIndex =
    activeIndex !== undefined ? Math.max(0, Math.min(activeIndex, totalChildren - 1)) : internalIndex;

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const indicatorRef = React.useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = React.useState<{
    left: number;
    width: number;
    top: number;
    height: number;
  }>({ left: 0, width: 0, top: 0, height: 0 });
  const buttonRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const dividerRefs = React.useRef<Array<HTMLSpanElement | null>>([]);
  const [equalWidth, setEqualWidth] = React.useState<number | null>(null);
  const [isConstrained, setIsConstrained] = React.useState<boolean>(false);

  React.useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, totalChildren);
    dividerRefs.current = dividerRefs.current.slice(0, Math.max(0, totalChildren - 1));
  }, [totalChildren]);

  React.useLayoutEffect(() => {
    if (expanded || !isEqualWidth) {
      setEqualWidth(null);
      setIsConstrained(false);
      return;
    }

    const measureWidths = () => {
      const buttons = buttonRefs.current.filter(Boolean) as HTMLButtonElement[];
      if (buttons.length === 0) return;

      const originalStyles = buttons.map((button) => ({
        width: button.style.width,
        minWidth: button.style.minWidth,
      }));

      buttons.forEach((button) => {
        button.style.width = 'auto';
        button.style.minWidth = 'auto';
      });

      void buttons[0]?.offsetHeight;

      const widths = buttons.map((button) => button.scrollWidth);
      const maxContentWidth = Math.max(...widths);

      buttons.forEach((button, index) => {
        button.style.width = originalStyles[index].width;
        button.style.minWidth = originalStyles[index].minWidth;
      });

      if (maxContentWidth > 0) {
        const maxWidthValue = typeof maxWidth === 'number' ? maxWidth : parseFloat(maxWidth) || Infinity;
        const finalWidth = Math.min(maxContentWidth, maxWidthValue);
        const constrained = maxWidth !== undefined && finalWidth < maxContentWidth;
        setEqualWidth(finalWidth);
        setIsConstrained(constrained);
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(measureWidths);
    });
  }, [expanded, isEqualWidth, totalChildren, children, maxWidth]);

  const updateIndicator = React.useCallback(() => {
    const selectedButton = buttonRefs.current[selectedIndex];
    const container = containerRef.current;
    if (!selectedButton || !container || !indicatorRef.current) return;

    const containerStyles = window.getComputedStyle(container);
    const borderWidth = parseFloat(containerStyles.borderLeftWidth) || 0;
    const borderTop = parseFloat(containerStyles.borderTopWidth) || 0;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = selectedButton.getBoundingClientRect();

    let left = buttonRect.left - containerRect.left;
    let width = buttonRect.width;
    const top = -borderTop;
    const height = buttonRect.height + borderTop * 2;

    if (selectedIndex > 0) {
      const leftDivider = dividerRefs.current[selectedIndex - 1];
      if (leftDivider) {
        const dividerRect = leftDivider.getBoundingClientRect();
        left -= dividerRect.width;
        width += dividerRect.width;
      }
    }

    if (selectedIndex < totalChildren - 1) {
      const rightDivider = dividerRefs.current[selectedIndex];
      if (rightDivider) {
        width += dividerRefs.current[selectedIndex]!.getBoundingClientRect().width;
      }
    }

    if (selectedIndex === 0) {
      left = -borderWidth;
      width += borderWidth;
    }

    if (selectedIndex === totalChildren - 1) {
      width += borderWidth;
    }

    setIndicatorStyle({ left, width, top, height });
  }, [selectedIndex, totalChildren]);

  const isInitialRender = React.useRef(true);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      updateIndicator();
      if (isInitialRender.current && indicatorRef.current) {
        indicatorRef.current.style.transition = 'none';
        requestAnimationFrame(() => {
          if (indicatorRef.current) {
            indicatorRef.current.style.transition = '';
          }
          isInitialRender.current = false;
        });
      }
    });
  }, [updateIndicator, selectedIndex, size, expanded, isEqualWidth, equalWidth, maxWidth]);

  React.useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  const emitChange = (index: number) => {
    if (disabled || index < 0 || index >= totalChildren) return;
    const child = validChildren[index];
    if (child?.props.disabled) return;

    let targetIndex = index;

    if (totalChildren === 2 && selectedIndex === index) {
      const otherIndex = index === 0 ? 1 : 0;
      if (validChildren[otherIndex]?.props.disabled) return;
      targetIndex = otherIndex;
    }

    if (activeIndex === undefined) {
      setInternalIndex(targetIndex);
    }
    onChange?.(targetIndex);
  };

  const controlClass = classNames(
    styles['SegmentedControl'],
    styles[`SegmentedControl--${size}`],
    {
      [styles['SegmentedControl--expanded']]: expanded,
      [styles['SegmentedControl--equalWidth']]: !expanded && isEqualWidth,
      [styles['SegmentedControl--disabled']]: disabled,
      [styles['SegmentedControl--twoSegments']]: totalChildren === 2,
    },
    className
  );

  const containerStyle: React.CSSProperties & { '--segment-max-width'?: string; '--segment-equal-width'?: string } = {
    maxWidth: '100%',
  };
  if (!expanded) {
    if (maxWidth) {
      containerStyle['--segment-max-width'] = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
    }
    if (isEqualWidth && equalWidth) {
      containerStyle['--segment-equal-width'] = `${equalWidth}px`;
    }
  }

  if (!validChildren.length) return null;

  const combinedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [ref]
  );

  return (
    <div
      {...baseProps}
      className={controlClass}
      style={containerStyle}
      ref={combinedRef}
      data-test="DesignSystem-SegmentedControl"
    >
      <div
        ref={indicatorRef}
        className={styles['SegmentedControl-indicator']}
        style={{
          transform: `translateX(${indicatorStyle.left}px)`,
          width: `${indicatorStyle.width}px`,
          top: `${indicatorStyle.top}px`,
          height: `${indicatorStyle.height}px`,
        }}
      />
      {validChildren.map((child, index) => {
        const contextValue: SegmentedControlContextValue = {
          size,
          selectedIndex,
          onSelect: emitChange,
          index,
          expanded,
          isEqualWidth: !expanded && isEqualWidth,
          disabled,
          isTwoSegments: totalChildren === 2,
          isConstrained: !expanded && isEqualWidth && isConstrained,
        };

        const handleButtonRef = (node: HTMLButtonElement | null) => {
          buttonRefs.current[index] = node;
        };

        const segmentNode = (
          <SegmentedControlContext.Provider key={child.key ?? index} value={contextValue}>
            {React.cloneElement(child, {
              ref: handleButtonRef,
              disabled: child.props.disabled,
            } as Partial<SegmentedControlItemProps>)}
          </SegmentedControlContext.Provider>
        );

        if (index === validChildren.length - 1) {
          return segmentNode;
        }
        const isDividerHidden = index === selectedIndex || index === selectedIndex - 1;
        return (
          <React.Fragment key={child.key ?? index}>
            {segmentNode}
            <span
              ref={(node) => {
                dividerRefs.current[index] = node;
              }}
              className={classNames(styles['SegmentedControl-divider'], styles[`SegmentedControl-divider--${size}`], {
                [styles['SegmentedControl-divider--hidden']]: isDividerHidden,
              })}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
});

SegmentedControl.displayName = 'SegmentedControl';

(SegmentedControl as typeof SegmentedControl & { Item: typeof SegmentedControlItem }).Item = SegmentedControlItem;

export { SegmentedControl };
export default SegmentedControl;
