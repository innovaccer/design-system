import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';

export type AutoComplete = 'on' | 'off';
export type Size = 'regular' | 'large';

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
  size?: Size;
  /**
   * Material icon name
   */
  icon?: string;
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
   * Determines if arrow icons are visible
   */
  withArrowIcons?: boolean;
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
}

const sizeMapping = {
  regular: 16,
  large: 20,
};

const capMin = (min: number = -Infinity, value: number) =>
  isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.max(min, value);

const capMax = (max: number = +Infinity, value: number) =>
  isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.min(max, value);

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
    withArrowIcons,
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

  const classes = classNames({
    ['MetricInput']: true,
    [`MetricInput--${size}`]: size,
    ['MetricInput--disabled']: disabled || readOnly,
    ['MetricInput--error']: error
  }, className);

  const inputClass = classNames({
    ['MetricInput-input']: true,
    [`MetricInput-input--${size}`]: size,
  });

  const iconClass = classNames({
    ['MetricInput-icon']: true,
    [`MetricInput-icon--${size}`]: size,
  });

  const getArrowClass = (direction: string) => (
    classNames({
      ['MetricInput-arrowIcon']: true,
      [`MetricInput-arrowIcon--${size}`]: size,
      [`MetricInput-arrowIcon--${direction}`]: direction,
    })
  );

  const arrowIconsClass = classNames({
    ['MetricInput-arrowIcons']:true,
    ['MetricInput-arrowIcons--hide']: !withArrowIcons,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUncontrolled) {
      setValue(e.target.value);
    }

    if (onChange) onChange(e);
  };

  const onArrowClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, direction: string) => {
    let newValue = Number(value || 0);
    const isValid =
      direction === 'down'
        ? (min !== undefined && newValue > min) || min === undefined
        : (max !== undefined && newValue < max) || max === undefined;

    if (disabled || readOnly || !isValid) return;

    newValue = direction === 'down' ? newValue - 1 : newValue + 1;
    newValue = capMax(max, capMin(min, newValue));

    if (isUncontrolled) setValue(newValue);

    if (onChange) {
      const syntheticEvent = Object.create(e, { target: { value: newValue } });
      onChange(syntheticEvent);
    }
  };

  const onKeyDown = (e: any) => {
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

  const iconSize = size === 'regular' ? 12 : 16;

  return (
    <div
      data-test="DesignSystem-MetricInputWrapper"
      className={classes}
      onClick={() => ref.current?.focus()}
    >
      {icon && (
        <Icon
          data-test="DesignSystem-MetricInput--icon"
          name={icon}
          size={sizeMapping[size]}
          appearance={!value ? 'disabled' : 'subtle'}
          className={iconClass}
        />
      )}
      {prefix && (
        <Text
          data-test="DesignSystem-MetricInput--prefix"
          className={size === 'regular' ? 'mr-4' : 'mr-5'}
          size={size}
          appearance="subtle"
        >
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
        onKeyDown={onKeyDown}
      />
      {suffix && (
        <Text
          data-test="DesignSystem-MetricInput--suffix"
          className={size === 'regular' ? 'ml-4' : 'ml-5'}
          size={size}
          appearance="subtle"
        >
          {suffix}
        </Text>
      )}
      <div data-test="DesignSystem-MetricInput--iconsWrapper" className={arrowIconsClass} tabIndex={0}>
        <Icon
          className={getArrowClass('up')}
          size={iconSize}
          name="keyboard_arrow_up"
          onClick={e => onArrowClick(e, 'up')}
          data-test="DesignSystem-MetricInput--upIcon"
        />
        <Icon
          className={getArrowClass('down')}
          size={iconSize}
          name="keyboard_arrow_down"
          onClick={e => onArrowClick(e, 'down')}
          data-test="DesignSystem-MetricInput--downIcon"
        />
      </div>
    </div>
  );
});

MetricInput.displayName = 'MetricInput';
MetricInput.defaultProps = {
  withArrowIcons:true
};

export default MetricInput;
