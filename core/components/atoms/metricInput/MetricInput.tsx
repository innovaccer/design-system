import * as React from 'react';
import classNames from 'classnames';
import { Button, Icon, Text } from '@/index';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';
import { AutoComplete, IconType } from '@/common.type';
import styles from '@css/components/metricInput.module.css';
import paginationStyles from '@css/components/pagination.module.css';

export type MetricInputSize = 'regular' | 'large';

export interface MetricInputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
  /**
   * Name of the `MetricInput`
   */
  name?: string;
  /**
   * Value of the `MetricInput` (Used in case of controlled `MetricInput`)
   */
  value?: string | number;
  /**
   * Adds default value to `MetricInput` (Used in case of uncontrolled `MetricInput`)
   */
  defaultValue?: string | number;
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
  regular: 16,
  large: 20,
};

const capMin = (min = -Infinity, value: number) =>
  isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0) ? value : Math.max(min, value);

const capMax = (max = +Infinity, value: number) =>
  isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0) ? value : Math.min(max, value);

/**
 * ###### MetricInput has two types:
 *  - [Controlled MetricInput](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled MetricInput](https://reactjs.org/docs/uncontrolled-components.html)
 */
export const MetricInput = React.forwardRef<HTMLInputElement, MetricInputProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    defaultValue,
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
    className,
    autoFocus,
    disabled,
    readOnly,
    value: valueProp,
    showActionButton = true,
    onKeyDown,
    iconType,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);
  const isUncontrolled = valueProp === undefined;

  const [value, setValue] = React.useState(valueProp || defaultValue);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  React.useEffect(() => {
    if (autoFocus) ref.current?.focus({ preventScroll: true });
  }, []);

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['MetricInput']]: true,
      [styles[`MetricInput--${size}`]]: size,
      [styles['MetricInput--disabled']]: disabled,
      [styles['MetricInput--readOnly']]: readOnly,
      [styles['MetricInput--error']]: error,
    },
    className
  );

  const inputClass = classNames({
    [styles['MetricInput-input']]: true,
    [paginationStyles['MetricInput-input']]: true,
    [styles[`MetricInput-input--${size}`]]: size,
    [`mr-4`]: !suffix && !showActionButton && size === 'regular',
    [`mr-6`]: !suffix && !showActionButton && size === 'large',
  });

  const iconClass = classNames({
    [styles['MetricInput-icon']]: true,
    [styles[`MetricInput-icon--${size}`]]: size,
  });

  const prefixClass = classNames({
    ['mr-4']: size === 'regular',
    ['mr-5']: size !== 'regular',
  });

  const suffixClass = classNames({
    ['ml-4 mr-3']: size === 'regular',
    ['mx-5']: size !== 'regular',
  });

  const actionButton = classNames({
    ['p-0']: true,
    [styles[`MetricInput-arrowIcon--${size}`]]: size,
    ['ml-3']: true,
  });

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

  const onKeyDownHandler = (e: any) => {
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showActionButton) {
      onKeyDownHandler(e);
    }
  };

  const actionButtonSize = size === 'large' ? 'regular' : 'tiny';

  return (
    <div data-test="DesignSystem-MetricInputWrapper" className={classes} onKeyDown={onKeyDown} role="presentation">
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
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChangeHandler}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
      />
      {suffix && (
        <Text data-test="DesignSystem-MetricInput--suffix" className={suffixClass} size={size} appearance="subtle">
          {suffix}
        </Text>
      )}
      {showActionButton && (
        <div className={paginationStyles['MetricInput-arrowIcons']}>
          <Button
            type="button"
            icon="keyboard_arrow_up"
            size={actionButtonSize}
            className={`${actionButton} mb-2`}
            onClick={(e) => onArrowClick(e, 'up')}
            data-test="DesignSystem-MetricInput--upIcon"
          />
          <Button
            type="button"
            icon="keyboard_arrow_down"
            size={actionButtonSize}
            className={actionButton}
            onClick={(e) => onArrowClick(e, 'down')}
            data-test="DesignSystem-MetricInput--downIcon"
          />
        </div>
      )}
    </div>
  );
});

MetricInput.displayName = 'MetricInput';

export default MetricInput;
