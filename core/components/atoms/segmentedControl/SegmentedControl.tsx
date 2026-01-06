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
import { calculateIndicatorPosition, measureButtonWidths } from './utils';
import styles from '@css/components/segmentedControl.module.css';

export type { SegmentedControlValue, SegmentedControlSize };

export interface SegmentedControlProps extends BaseProps {
  /**
   * Index of desired selected segment. By default is 0.
   */
  activeIndex?: number;
  /**
   * Called with a new index when a new segment is selected by user.
   * @param index - Index of the selected segment
   * @param value - Value prop of the selected segment (if provided)
   */
  onChange?: (index: number, value?: SegmentedControlValue) => void;
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
   * Maximum width of each segment.
   * @default "256px"
   */
  maxWidth?: string | number;
  /**
   * Makes all segments equal width based on the largest content.
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

export const SegmentedControl = (props: SegmentedControlProps) => {
  const {
    activeIndex,
    onChange,
    size = 'regular',
    expanded = false,
    maxWidth = '256px',
    isEqualWidth = true,
    disabled = false,
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
    activeIndex !== undefined
      ? Math.max(0, Math.min(activeIndex, totalChildren - 1))
      : Math.max(0, Math.min(internalIndex, totalChildren - 1));

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

    // Use nested RAF to ensure DOM is fully updated before measuring
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const buttons = buttonRefs.current.filter(Boolean) as HTMLButtonElement[];
        const result = measureButtonWidths({ buttons, maxWidth });
        setEqualWidth(result.equalWidth);
        setIsConstrained(result.isConstrained);
      });
    });
  }, [expanded, isEqualWidth, totalChildren, children, maxWidth]);

  const isInitialRender = React.useRef(true);

  // Use useLayoutEffect to measure and update indicator synchronously after layout
  React.useLayoutEffect(() => {
    const selectedButton = buttonRefs.current[selectedIndex];
    const container = containerRef.current;
    const indicator = indicatorRef.current;

    if (!selectedButton || !container || !indicator) return;

    // Disable transition on first render to avoid animation from initial position
    if (isInitialRender.current) {
      indicator.style.transition = 'none';
    }

    const dimensions = calculateIndicatorPosition({
      selectedButton,
      container,
      selectedIndex,
      totalChildren,
      dividerRefs: dividerRefs.current,
    });

    setIndicatorStyle(dimensions);
    if (isInitialRender.current) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (indicator) {
            indicator.style.transition = '';
          }
          isInitialRender.current = false;
        });
      });
    }
  }, [selectedIndex, size, expanded, isEqualWidth, equalWidth, maxWidth, totalChildren]);

  React.useEffect(() => {
    const handleResize = () => {
      const selectedButton = buttonRefs.current[selectedIndex];
      const container = containerRef.current;
      const indicator = indicatorRef.current;

      if (!selectedButton || !container || !indicator) return;

      const dimensions = calculateIndicatorPosition({
        selectedButton,
        container,
        selectedIndex,
        totalChildren,
        dividerRefs: dividerRefs.current,
      });

      setIndicatorStyle(dimensions);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedIndex, totalChildren]);

  const emitChange = (index: number, value?: SegmentedControlValue) => {
    if (disabled || index < 0 || index >= totalChildren) return;
    const child = validChildren[index];
    if (child?.props.disabled) return;

    let targetIndex = index;
    let targetValue = value;

    if (totalChildren === 2 && selectedIndex === index) {
      const otherIndex = index === 0 ? 1 : 0;
      if (validChildren[otherIndex]?.props.disabled) return;
      targetIndex = otherIndex;
      targetValue = validChildren[otherIndex]?.props.value;
    }

    if (activeIndex === undefined) {
      setInternalIndex(targetIndex);
    }
    onChange?.(targetIndex, targetValue);
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

  return (
    <div
      className={controlClass}
      style={containerStyle}
      ref={containerRef}
      data-test="DesignSystem-SegmentedControl"
      {...baseProps}
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
          registerButtonRef: (i, node) => {
            buttonRefs.current[i] = node;
          },
          expanded,
          isEqualWidth: !expanded && isEqualWidth,
          disabled,
          isTwoSegments: totalChildren === 2,
          isConstrained: !expanded && isEqualWidth && isConstrained,
        };

        const segmentNode = (
          <SegmentedControlContext.Provider key={child.key ?? index} value={contextValue}>
            {React.cloneElement(child, {
              disabled: child.props.disabled,
            } as Partial<SegmentedControlItemProps>)}
          </SegmentedControlContext.Provider>
        );

        if (index === validChildren.length - 1) {
          return segmentNode;
        }

        const isDividerHidden = index === selectedIndex || index === selectedIndex - 1;
        const dividerClass = classNames(
          styles['SegmentedControl-divider'],
          styles[`SegmentedControl-divider--${size}`],
          {
            [styles['SegmentedControl-divider--hidden']]: isDividerHidden,
          }
        );

        return (
          <React.Fragment key={child.key ?? index}>
            {segmentNode}
            <span
              ref={(node) => {
                dividerRefs.current[index] = node;
              }}
              className={dividerClass}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

SegmentedControl.displayName = 'SegmentedControl';

SegmentedControl.defaultProps = {
  size: 'regular',
  expanded: false,
  maxWidth: '256px',
  isEqualWidth: true,
  disabled: false,
};

SegmentedControl.Item = SegmentedControlItem;

export default SegmentedControl;
