import * as React from 'react';
import classNames from 'classnames';
import { Icon, Tooltip } from '@/index';
import { IconProps } from '@/index.type';
import { IconType } from '@/common.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { SegmentedControlContext, SegmentedControlSize, SegmentedControlValue } from './SegmentedControlContext';
import styles from '@css/components/segmentedControl.module.css';

export interface SegmentedControlItemProps extends BaseProps {
  /**
   * Custom content to render inside the segment. When provided, `label` and `icon` are ignored.
   */
  children?: React.ReactNode;
  /**
   * Label text of the segment used for display. Ignored if `children` is provided.
   */
  label?: SegmentedControlValue;
  /**
   * Icon to render before the label. Accepts icon name (from Icon component) or a custom node.
   * Ignored if `children` is provided.
   */
  icon?: IconProps['name'] | React.ReactNode;
  /**
   * Sets icon type for Material icons. Applicable when `icon` is a string.
   */
  iconType?: IconType;
  /**
   * Shows tooltip on hover / focus.
   */
  tooltip?: string;
  /**
   * Disables the segment.
   */
  disabled?: boolean;
  /**
   * Value associated with this segment. Returned in onChange callback alongside index.
   */
  value?: SegmentedControlValue;
}

const iconSizeMap: Record<SegmentedControlSize, number> = {
  small: 14,
  regular: 16,
  large: 20,
};

export const SegmentedControlItem = (props: SegmentedControlItemProps) => {
  const { children, label, icon, iconType, tooltip, disabled, value, className } = props;
  const baseProps = extractBaseProps(props);
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const segmentProps = React.useContext(SegmentedControlContext);

  if (!segmentProps) {
    console.warn('SegmentedControl.Item must be used inside SegmentedControl');
    return null;
  }

  const {
    size,
    selectedIndex,
    onSelect,
    index,
    expanded,
    isEqualWidth,
    disabled: controlDisabled,
    isTwoSegments,
    isConstrained,
    registerButtonRef,
  } = segmentProps;
  const isSelected = selectedIndex === index;
  const isDisabled = disabled || controlDisabled;
  const hasChildren = children != null;
  const isIconOnly = !hasChildren && icon && !label;
  const segmentClass = classNames(
    styles['SegmentedControl-segment'],
    styles[`SegmentedControl-segment--${size}`],
    {
      [styles['SegmentedControl-segment--selected']]: isSelected,
      [styles['SegmentedControl-segment--disabled']]: isDisabled,
      [styles['SegmentedControl-segment--iconOnly']]: isIconOnly,
      [styles['SegmentedControl-segment--expanded']]: expanded,
      [styles['SegmentedControl-segment--equalWidth']]: isEqualWidth,
      [styles['SegmentedControl-segment--twoSegmentsSelected']]: isTwoSegments && isSelected,
      [styles[`SegmentedControl-segment--${size}IconOnly`]]: isIconOnly,
      [styles['SegmentedControl-segment--customContent']]: hasChildren,
    },
    className
  );

  const renderIcon = () => {
    if (hasChildren || !icon) return null;
    const iconClass = classNames(styles['SegmentedControl-segmentIcon'], {
      [styles['SegmentedControl-segmentIcon--only']]: !label,
      [styles[`SegmentedControl-segmentIcon--${size}`]]: label,
    });
    return (
      <div className={iconClass}>
        {typeof icon === 'string' ? <Icon name={icon} type={iconType} size={iconSizeMap[size]} /> : icon}
      </div>
    );
  };

  const renderLabel = () => {
    if (hasChildren || !label) return null;
    const labelClass = classNames(styles['SegmentedControl-segmentLabel'], {
      [styles['SegmentedControl-segmentLabel--constrained']]: isConstrained,
    });
    return (
      <span ref={labelRef} className={labelClass}>
        {label}
      </span>
    );
  };

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      event.currentTarget.blur();
    }
  }, []);

  const button = (
    <button
      ref={(node) => {
        buttonRef.current = node;
        registerButtonRef?.(index, node);
      }}
      type="button"
      className={segmentClass}
      disabled={isDisabled}
      tabIndex={isDisabled || isSelected ? -1 : 0}
      data-test="DesignSystem-SegmentedControl-Item"
      {...baseProps}
      onClick={() => {
        if (!isDisabled && onSelect) {
          onSelect(index, value);
        }
      }}
      onKeyDown={handleKeyDown}
    >
      {hasChildren ? (
        children
      ) : (
        <>
          {renderIcon()}
          {renderLabel()}
        </>
      )}
    </button>
  );

  if (tooltip) {
    return <Tooltip tooltip={tooltip}>{button}</Tooltip>;
  }

  if (!hasChildren && label && typeof label === 'string') {
    return (
      <Tooltip tooltip={label} showOnTruncation={true} elementRef={labelRef} position="bottom">
        {button}
      </Tooltip>
    );
  }

  return button;
};

SegmentedControlItem.defaultProps = {
  disabled: false,
};

export default SegmentedControlItem;
