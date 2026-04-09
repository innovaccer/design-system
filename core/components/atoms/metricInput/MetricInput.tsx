import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';
import { AutoComplete, IconType } from '@/common.type';
import styles from '@css/components/metricInput.module.css';
import paginationStyles from '@css/components/pagination.module.css';

export type MetricInputSize = 'small' | 'regular' | 'large';

export interface MetricInputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
  /**
   * Name of the `MetricInput`
   */
  name?: string;
  /**
   * Value of the `MetricInput` (Used in case of controlled `MetricInput`)
   */
  value?: React.ReactText;
  /**
   * Adds default value to `MetricInput` (Used in case of uncontrolled `MetricInput`)
   */
  defaultValue?: React.ReactText;
  /**
   * Text to display when `MetricInput` is empty
   */
  placeholder?: string;
  /**
   * Size of the `MetricInput`
   * @default "regular"
   */
  size?: MetricInputSize;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Set type of Icon
   */
  iconType?: IconType;
  /**
   * Label to be displayed inside `MetricInput` before value
   */
  prefix?: string;
  /**
   * Label to be displayed inside `MetricInput` after value
   */
  suffix?: string;
  /**
   * Disables the `MetricInput`, making it unable to type
   */
  disabled?: boolean;
  /**
   * Adds autoFocus
   */
  autoFocus?: boolean;
  /**
   * Specifies whether `input field should have autocomplete enabled
   */
  autoComplete?: AutoComplete;
  /**
   * Disables the `MetricInput`, making it unable to type
   */
  readOnly?: boolean;
  /**
   * Valid for number it defines the most negative value in the range of permitted values.
   */
  min?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the maximum number of characters
   * (as UTF-16 code units) the user can enter into the field.
   */
  max?: number;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Disables the action button which is up and down arrow button.
   */
  showActionButton?: boolean;
  /**
   * Callback function when `MetricInput` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `MetricInput` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `MetricInput` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `MetricInput` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when 'onKeyDown' event is triggered
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const sizeMapping = {
  small: 14,
  regular: 16,
  large: 20,
};

const actionButtonIconSizeMapping = {
  small: 14,
  regular: 14,
  large: 14,
};

const averageCharacterWidthMultiplier = 0.6;
let metricInputGeneratedLabelId = 0;

const isMetricInputPrintableKey = (e: React.KeyboardEvent<HTMLElement>) =>
  !e.altKey && !e.ctrlKey && !e.metaKey && e.key.length === 1;

const isBlockedMetricInputKey = (key: string) => key === 'e' || key === 'E';

const getMeasuredTextWidth = (input: HTMLInputElement, renderedValue: string) => {
  const computedStyle = window.getComputedStyle(input);
  const fontSize = Number.parseFloat(computedStyle.fontSize) || 0;
  const letterSpacing = Number.parseFloat(computedStyle.letterSpacing) || 0;
  const approximateValueWidth =
    renderedValue.length * fontSize * averageCharacterWidthMultiplier +
    Math.max(renderedValue.length - 1, 0) * Math.max(letterSpacing, 0);
  const measurementCanvas = document.createElement('canvas');
  const measurementContext = measurementCanvas.getContext('2d');

  if (!measurementContext) {
    return Math.max(input.scrollWidth || 0, approximateValueWidth);
  }

  const font = [
    computedStyle.fontStyle,
    computedStyle.fontVariant,
    computedStyle.fontWeight,
    computedStyle.fontStretch,
    computedStyle.fontSize,
    computedStyle.lineHeight ? `/${computedStyle.lineHeight}` : '',
    computedStyle.fontFamily,
  ]
    .filter(Boolean)
    .join(' ');

  measurementContext.font = font;

  const measuredValueWidth =
    measurementContext.measureText(renderedValue).width +
    Math.max(renderedValue.length - 1, 0) * Math.max(letterSpacing, 0);

  return Math.max(input.scrollWidth || 0, approximateValueWidth, measuredValueWidth);
};

const capMin = (min = -Infinity, value: number) =>
  isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0) ? value : Math.max(min, value);

const capMax = (max = +Infinity, value: number) =>
  isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0) ? value : Math.min(max, value);

type MetricInputFocusedSection = 'wrapper' | 'decrement' | 'input' | 'increment' | null;

/**
 * ###### MetricInput has two types:
 *  - [Controlled MetricInput](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled MetricInput](https://reactjs.org/docs/uncontrolled-components.html)
 */
export const MetricInput = React.forwardRef<HTMLInputElement, MetricInputProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    defaultValue,
    id,
    name,
    placeholder,
    icon,
    prefix,
    suffix,
    error,
    min,
    max,
    onChange,
    onClick,
    onBlur,
    onFocus,
    onWheel,
    className,
    autoFocus,
    disabled,
    readOnly,
    value: valueProp,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-describedby': ariaDescribedby,
    showActionButton = true,
    onKeyDown,
    iconType,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const generatedWrapperLabelIdsRef = React.useRef<string[]>([]);
  const hasDeferredBlurRef = React.useRef(false);
  const blurHandledRef = React.useRef(false);
  const isUncontrolled = valueProp === undefined;
  const isCompositeNavigationEnabled = showActionButton && !disabled && !readOnly;

  const [value, setValue] = React.useState<React.ReactText | undefined>(valueProp ?? defaultValue);
  const [isValueOverflowing, setIsValueOverflowing] = React.useState(false);
  const [isCompositeNavigationActive, setIsCompositeNavigationActive] = React.useState(false);
  const [focusedSection, setFocusedSection] = React.useState<MetricInputFocusedSection>(null);
  const [derivedWrapperLabelledBy, setDerivedWrapperLabelledBy] = React.useState<string | undefined>(undefined);
  const resolvedAriaLabelledBy = ariaLabelledby || derivedWrapperLabelledBy;

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  React.useEffect(() => {
    if (autoFocus) {
      if (isCompositeNavigationEnabled) {
        wrapperRef.current?.focus({ preventScroll: true });
      } else {
        ref.current?.focus({ preventScroll: true });
      }
    }
  }, [autoFocus, isCompositeNavigationEnabled]);

  React.useEffect(() => {
    if (!isCompositeNavigationEnabled || ariaLabel || ariaLabelledby) {
      setDerivedWrapperLabelledBy(undefined);
      return;
    }

    const associatedLabels = Array.from(ref.current?.labels || []);

    if (!associatedLabels.length) {
      setDerivedWrapperLabelledBy(undefined);
      return;
    }

    const labelIds = associatedLabels.map((label, index) => {
      if (label.id) {
        generatedWrapperLabelIdsRef.current[index] = label.id;
        return label.id;
      }

      const generatedId =
        generatedWrapperLabelIdsRef.current[index] || `MetricInput-label-${metricInputGeneratedLabelId++}`;
      label.id = generatedId;
      generatedWrapperLabelIdsRef.current[index] = generatedId;
      return generatedId;
    });

    setDerivedWrapperLabelledBy(labelIds.join(' '));
  }, [ariaLabel, ariaLabelledby, id, isCompositeNavigationEnabled]);

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const syncOverflowState = React.useCallback(() => {
    const input = ref.current;

    if (!input) return;

    const renderedValue = input.value || input.placeholder || '';

    if (!renderedValue) {
      setIsValueOverflowing(false);
      return;
    }

    if (input.clientWidth <= 0) {
      setIsValueOverflowing(false);
      return;
    }

    const measuredWidth = getMeasuredTextWidth(input, renderedValue);

    setIsValueOverflowing(measuredWidth > input.clientWidth);
  }, []);

  React.useEffect(() => {
    syncOverflowState();
  }, [syncOverflowState, value, prefix, suffix, size, showActionButton, icon, placeholder]);

  React.useEffect(() => {
    const handleResize = () => syncOverflowState();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [syncOverflowState]);

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['MetricInput']]: true,
      [styles[`MetricInput--${size}`]]: size,
      [styles['MetricInput--disabled']]: disabled,
      [styles['MetricInput--readOnly']]: readOnly,
      [styles['MetricInput--error']]: error,
      [styles['MetricInput--wrapperFocused']]: focusedSection === 'wrapper' || focusedSection === 'input',
    },
    className
  );

  const inputClass = classNames({
    [styles['MetricInput-input']]: true,
    [paginationStyles['MetricInput-input']]: true,
    [styles[`MetricInput-input--${size}`]]: size,
    [styles['MetricInput-input--overflowing']]: isValueOverflowing,
  });

  const iconClass = classNames({
    [styles['MetricInput-icon']]: true,
    [styles[`MetricInput-icon--${size}`]]: size,
  });

  const contentClass = classNames({
    [styles['MetricInput-content']]: true,
    [styles[`MetricInput-content--${size}`]]: size,
  });

  const prefixClass = classNames({
    [styles['MetricInput-text']]: true,
    [styles[`MetricInput-text--${size}`]]: size,
  });

  const suffixClass = classNames({
    [styles['MetricInput-text']]: true,
    [styles[`MetricInput-text--${size}`]]: size,
  });

  const actionButtonsClass = classNames({
    [styles['MetricInput-actionButtons']]: true,
    [paginationStyles['MetricInput-actionButtons']]: true,
  });

  const decrementButtonClass = classNames(actionButtonsClass, {
    [styles['MetricInput-actionButtons--left']]: true,
  });

  const incrementButtonClass = classNames(actionButtonsClass, {
    [styles['MetricInput-actionButtons--right']]: true,
  });

  const actionButtonIconSize = actionButtonIconSizeMapping[size];

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUncontrolled) {
      setValue(e.target.value);
    }

    if (onChange) onChange(e);
  };

  const onArrowClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, direction: string) => {
    let newValue = Number(value || 0);
    const decimalDigits = newValue.toString().split('.')[1]?.length || 0;
    const isValid =
      direction === 'down'
        ? (min !== undefined && newValue > min) || min === undefined
        : (max !== undefined && newValue < max) || max === undefined;

    if (disabled || readOnly || !isValid) return;

    newValue = direction === 'down' ? newValue - 1 : newValue + 1;
    newValue = capMax(max, capMin(min, +newValue.toFixed(decimalDigits)));

    if (isUncontrolled) setValue(newValue);

    if (onChange) {
      const syntheticEvent = Object.create(e, {
        target: {
          value: { value: newValue },
        },
      });
      onChange(syntheticEvent);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'e':
      case 'E':
        e.preventDefault();
        return;

      case 'ArrowDown':
        e.preventDefault();
        onArrowClick(e, 'down');
        return;

      case 'ArrowUp':
        e.preventDefault();
        onArrowClick(e, 'up');
        return;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }

    if (e.defaultPrevented) return;

    if (showActionButton) {
      onKeyDownHandler(e);
    }
  };

  const activateCompositeNavigation = (nextFocusedSection: Exclude<MetricInputFocusedSection, 'wrapper' | null>) => {
    if (!isCompositeNavigationEnabled) return;

    setIsCompositeNavigationActive(true);
    setFocusedSection(nextFocusedSection);
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (document.activeElement === e.currentTarget) {
      e.currentTarget.blur();
    }

    if (onWheel) {
      onWheel(e);
    }
  };

  const handleWrapperFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!isCompositeNavigationEnabled) return;

    if (e.target === e.currentTarget) {
      blurHandledRef.current = false;
      hasDeferredBlurRef.current = false;
      setFocusedSection('wrapper');

      if (onFocus) {
        const syntheticFocusEvent = createSyntheticInputFocusEvent(e);

        if (syntheticFocusEvent) onFocus(syntheticFocusEvent);
      }
    }
  };

  const createSyntheticInputFocusEvent = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!ref.current) return null;

    return Object.create(e, {
      target: {
        value: ref.current,
      },
      currentTarget: {
        value: ref.current,
      },
      relatedTarget: {
        value: e.relatedTarget,
      },
    }) as React.FocusEvent<HTMLInputElement>;
  };

  const createSyntheticInputBlurEvent = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!ref.current) return null;

    return Object.create(e, {
      target: {
        value: ref.current,
      },
      currentTarget: {
        value: ref.current,
      },
      relatedTarget: {
        value: e.relatedTarget,
      },
    }) as React.FocusEvent<HTMLInputElement>;
  };

  const createSyntheticInputKeyboardEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!ref.current) return null;

    const syntheticKeyboardEvent = Object.create(e, {
      target: {
        value: ref.current,
      },
      currentTarget: {
        value: ref.current,
      },
    }) as React.KeyboardEvent<HTMLInputElement>;

    const originalPreventDefault = syntheticKeyboardEvent.preventDefault.bind(syntheticKeyboardEvent);

    syntheticKeyboardEvent.preventDefault = () => {
      originalPreventDefault();
      e.preventDefault();
    };

    return syntheticKeyboardEvent;
  };

  const handleWrapperBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      const shouldForwardBlurEvent = !blurHandledRef.current && (hasDeferredBlurRef.current || focusedSection !== null);

      setIsCompositeNavigationActive(false);
      setFocusedSection(null);

      if (shouldForwardBlurEvent && onBlur) {
        const syntheticBlurEvent = createSyntheticInputBlurEvent(e);

        if (syntheticBlurEvent) onBlur(syntheticBlurEvent);
      }

      hasDeferredBlurRef.current = false;
      blurHandledRef.current = false;
    }
  };

  const handleWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isCompositeNavigationEnabled) return;

    if (e.target !== e.currentTarget) return;

    if (onKeyDown) {
      const syntheticKeyboardEvent = createSyntheticInputKeyboardEvent(e);

      if (syntheticKeyboardEvent) {
        onKeyDown(syntheticKeyboardEvent);

        if (syntheticKeyboardEvent.defaultPrevented || syntheticKeyboardEvent.isDefaultPrevented()) {
          return;
        }
      }
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activateCompositeNavigation('input');
      ref.current?.focus({ preventScroll: true });
      return;
    }

    if (isMetricInputPrintableKey(e)) {
      if (isBlockedMetricInputKey(e.key)) {
        e.preventDefault();
      }

      activateCompositeNavigation('input');
      ref.current?.focus({ preventScroll: true });
    }
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || readOnly) return;

    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      activateCompositeNavigation(
        target.closest('[data-test="DesignSystem-MetricInput--downIcon"]') ? 'decrement' : 'increment'
      );
      return;
    }

    activateCompositeNavigation('input');

    if (target.closest('input')) return;

    ref.current?.focus({ preventScroll: true });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    hasDeferredBlurRef.current = false;
    blurHandledRef.current = false;
    const focusMovedWithinComposite =
      isCompositeNavigationEnabled && wrapperRef.current?.contains(e.relatedTarget as Node | null);

    if (isCompositeNavigationEnabled) {
      activateCompositeNavigation('input');
    }

    if (onFocus && !focusMovedWithinComposite) onFocus(e);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isCompositeNavigationEnabled && wrapperRef.current?.contains(e.relatedTarget as Node | null)) {
      // Focus moved inside the composite control, so fire blur only when the whole component exits.
      hasDeferredBlurRef.current = true;
      return;
    }

    hasDeferredBlurRef.current = false;
    blurHandledRef.current = true;
    if (onBlur) onBlur(e);
  };

  const handleActionButtonFocus = (section: Extract<MetricInputFocusedSection, 'decrement' | 'increment'>) => {
    activateCompositeNavigation(section);
  };

  return (
    <div
      data-test="DesignSystem-MetricInputWrapper"
      ref={wrapperRef}
      className={classes}
      tabIndex={isCompositeNavigationEnabled ? (isCompositeNavigationActive ? -1 : 0) : undefined}
      aria-label={isCompositeNavigationEnabled ? ariaLabel : undefined}
      aria-labelledby={isCompositeNavigationEnabled ? resolvedAriaLabelledBy : undefined}
      aria-describedby={isCompositeNavigationEnabled ? ariaDescribedby : undefined}
      onBlur={handleWrapperBlur}
      onClick={handleWrapperClick}
      onFocus={handleWrapperFocus}
      onKeyDown={handleWrapperKeyDown}
      role={isCompositeNavigationEnabled ? 'group' : 'presentation'}
    >
      {showActionButton && (
        <button
          type="button"
          className={decrementButtonClass}
          tabIndex={isCompositeNavigationEnabled ? (isCompositeNavigationActive ? 0 : -1) : undefined}
          disabled={disabled || readOnly}
          onClick={(e) => onArrowClick(e, 'down')}
          onFocus={() => handleActionButtonFocus('decrement')}
          aria-label="Decrement value"
          data-test="DesignSystem-MetricInput--downIcon"
        >
          <Icon name="keyboard_arrow_left" size={actionButtonIconSize} />
        </button>
      )}
      <div className={contentClass}>
        {icon && (
          <Icon
            data-test="DesignSystem-MetricInput--icon"
            name={icon}
            type={iconType}
            size={sizeMapping[size]}
            appearance={!value ? 'disabled' : 'subtle'}
            className={iconClass}
          />
        )}
        {prefix && (
          <Text data-test="DesignSystem-MetricInput--prefix" className={prefixClass} size={size} appearance="subtle">
            {prefix}
          </Text>
        )}
        <input
          data-test="DesignSystem-MetricInput"
          {...baseProps}
          {...rest}
          type="number"
          ref={ref}
          id={id}
          name={name}
          placeholder={placeholder}
          className={inputClass}
          value={value ?? ''}
          aria-label={ariaLabel}
          aria-labelledby={resolvedAriaLabelledBy}
          aria-describedby={ariaDescribedby}
          aria-invalid={error === true ? true : ariaInvalid}
          tabIndex={isCompositeNavigationEnabled && !isCompositeNavigationActive ? -1 : undefined}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChangeHandler}
          onBlur={handleInputBlur}
          onClick={onClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        />
        {suffix && (
          <Text data-test="DesignSystem-MetricInput--suffix" className={suffixClass} size={size} appearance="subtle">
            {suffix}
          </Text>
        )}
      </div>
      {showActionButton && (
        <button
          type="button"
          className={incrementButtonClass}
          tabIndex={isCompositeNavigationEnabled ? (isCompositeNavigationActive ? 0 : -1) : undefined}
          disabled={disabled || readOnly}
          onClick={(e) => onArrowClick(e, 'up')}
          onFocus={() => handleActionButtonFocus('increment')}
          aria-label="Increment value"
          data-test="DesignSystem-MetricInput--upIcon"
        >
          <Icon name="keyboard_arrow_right" size={actionButtonIconSize} />
        </button>
      )}
    </div>
  );
});

MetricInput.displayName = 'MetricInput';

export default MetricInput;
