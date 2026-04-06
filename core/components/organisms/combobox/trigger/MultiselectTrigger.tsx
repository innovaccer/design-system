import * as React from 'react';
import classNames from 'classnames';
import { Chip, Icon } from '@/index';
import { ChipProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { OptionType } from '@/common.type';
import styles from '@css/components/chipInput.module.css';
import inputStyles from '@css/components/input.module.css';

const keyCodes = {
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter',
};

type ChipOptions = {
  icon?: ChipProps['icon'];
  type?: ChipProps['type'];
  iconType?: ChipProps['iconType'];
  clearButton?: ChipProps['clearButton'];
  role?: ChipProps['role'];
  onClick?: (value: OptionType, index: number) => void;
};

export interface MultiSelectTriggerProps extends BaseProps {
  /**
   * Allows duplicate chips if set to true.
   */
  allowDuplicates?: boolean;
  /**
   * <pre className="DocPage-codeBlock">
   *  ChipOptions: {
   *   icon?: string;
   *   type?: action | input | selection
   *   clearButton?: boolean;
   *   role?: string;
   *   onClick?: (value: string, index: number) => void;
   *   iconType?: 'rounded' | 'outlined'
   *  }
   * </pre>
   */
  chipOptions: ChipOptions;
  /**
   * Disables the chip input if set to true.
   */
  disabled?: boolean;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * A placeholder that is displayed if the input has no values.
   */
  placeholder?: string;
  /**
   * The chip labels to display (enables controlled mode if set).
   */
  value?: OptionType[];
  /**
   * The chips to display by default (for uncontrolled mode).
   */
  defaultValue: OptionType[];
  /**
   * Adds autoFocus to input
   */
  autoFocus?: boolean;
  /**
   * Callback function that is called when the chips change.
   */
  onChange?: (chips: OptionType[]) => void;
  /**
   * Callback function that is called when the chips change.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Callback function that is called when the key is released.
   */
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `MultiSelectTrigger` value changes
   */
  onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Specifies tab index of `MultiSelectTrigger`
   */
  tabIndex?: number;
  /**
   * Pass ref to chip input
   */
  forwardedRef?: React.Ref<HTMLInputElement>;
  /**
   * Specify role to chip input
   */
  role?: React.AriaRole;
  /**
   * Accessible name for trigger
   */
  'aria-label'?: string;
  /**
   * Associates trigger with external label
   */
  'aria-labelledby'?: string;
  /**
   * Exposes invalid state to assistive tech; when `error` is true this is set to `true` automatically.
   */
  'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling';
}

export const MultiSelectTrigger = React.forwardRef<HTMLElement, MultiSelectTriggerProps>((props, forwardedInputRef) => {
  const {
    chipOptions,
    allowDuplicates,
    disabled,
    error,
    placeholder,
    defaultValue,
    value,
    className,
    autoFocus,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onInputChange,
    tabIndex,
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-invalid': ariaInvalid,
    ...rest
  } = props;

  const localInputRef = React.useRef<HTMLInputElement>();
  const customRef = React.useRef<any>();
  const inputElementRef = (forwardedInputRef || localInputRef) as React.RefObject<HTMLInputElement>;

  const [chips, setChips] = React.useState<OptionType[]>(value || defaultValue);
  const [inputValue, setInputValue] = React.useState('');

  const baseProps = extractBaseProps(props);

  React.useEffect(() => {
    if (value !== undefined) {
      setChips(value);
      setInputValue('');
    }
  }, [value]);

  React.useEffect(() => {
    if (inputValue === '' && inputElementRef.current) {
      inputElementRef.current.style.flexBasis = '0';
      customRef.current.charCount = null;
    }
  }, [inputValue]);

  const ChipInputBorderClass = classNames({
    [styles['ChipInput-border']]: true,
    [styles['ChipInput-border--error']]: error,
  });

  const ChipInputClass = classNames(
    {
      [styles.ChipInput]: true,
      [styles['ChipInput--disabled']]: disabled,
      [styles['ChipInput--withChips']]: chips && chips.length > 0,
      [styles['ChipInput--error']]: error,
    },
    className
  );

  const onUpdateChips = (updatedChips: OptionType[]) => {
    if (onChange) onChange(updatedChips);
  };

  const onChipDeleteHandler = (index: number) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    if (!value) {
      setChips(updatedChips);
    }

    onUpdateChips(updatedChips);
  };

  const onChipAddHandler = () => {
    if (!inputValue) return;

    const chip = inputValue.trim();
    const isChipExist = chips.filter((item) => item.label === chip).length > 0;
    if ((allowDuplicates || !isChipExist) && chip) {
      const updatedChips = [...chips, { label: chip, value: chip, isSelectedOption: false }];

      if (!value) {
        setChips(updatedChips);
      }

      onUpdateChips(updatedChips);
      setInputValue('');
    }
  };

  const onDeleteAllHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const updatedChips: OptionType[] = [];

    if (!value) {
      setChips(updatedChips);
    }

    onUpdateChips(updatedChips);
    setInputValue('');
    onInputChange && onInputChange();
  };

  const onKeyDownHandler = (event: any) => {
    const chipsLength = chips.length;

    switch (event.key) {
      case keyCodes.DELETE:
      case keyCodes.BACKSPACE:
        if (inputValue === '' && chipsLength > 0) {
          onChipDeleteHandler(chipsLength - 1);
        }
        break;
      case keyCodes.ENTER:
        event.preventDefault();
        onChipAddHandler();
        break;
      default:
        break;
    }

    onKeyDown && onKeyDown(event);
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = inputElementRef.current;

    if (inputElement) {
      const charLen = event.target.value.length;
      const elementScrollWidth = inputElement.scrollWidth;
      const elementClientWidth = inputElement.clientWidth;

      if (elementScrollWidth > elementClientWidth && inputValue.length <= charLen) {
        inputElement.style.flexBasis = 'auto';
        if (customRef.current) {
          customRef.current.charCount = charLen;
        }
      } else if (
        elementScrollWidth <= elementClientWidth &&
        inputValue.length > charLen &&
        charLen <= (customRef.current?.charCount || 0) - 1
      ) {
        inputElement.style.flexBasis = '0';
      }
    }

    setInputValue(event.target.value);
    onInputChange && onInputChange(event);
  };

  const onClickHandler = () => {
    inputElementRef.current?.focus();
  };
  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled || event.currentTarget !== event.target) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClickHandler();
    }
  };

  const chipComponents = chips.map((chip, index) => {
    const { type = 'input', onClick, clearButton, ...rest } = chipOptions;

    const chipLabel = typeof chip === 'string' ? chip : chip?.label;
    const clearButtonAriaLabel =
      typeof chipLabel === 'string' && chipLabel.trim() !== '' ? `Remove ${chipLabel.trim()}` : 'Remove';

    return (
      <Chip
        data-test="DesignSystem-MultiSelectTrigger--Chip"
        label={chipLabel}
        name={chip}
        type={type}
        disabled={disabled}
        key={index}
        className="my-3 mx-2"
        onClick={() => onClick && onClick(chip, index)}
        onClose={() => onChipDeleteHandler(index)}
        {...rest}
        clearButton={clearButton}
        clearButtonAriaLabel={clearButtonAriaLabel}
        tabIndex={clearButton ? -1 : undefined}
      />
    );
  });

  return (
    <div data-test="DesignSystem-MultiSelectTrigger--Border" className={ChipInputBorderClass}>
      <div
        data-test="DesignSystem-MultiSelectTrigger"
        {...baseProps}
        className={ChipInputClass}
        onClick={onClickHandler}
        onKeyDown={handleTriggerKeyDown}
        tabIndex={disabled ? -1 : tabIndex !== undefined ? tabIndex : 0}
        role="button"
        aria-disabled={disabled || undefined}
      >
        <div className={styles['ChipInput-wrapper']} ref={customRef}>
          {chips && chips.length > 0 && chipComponents}
          <input
            {...rest}
            data-test="DesignSystem-MultiSelectTrigger--Input"
            ref={inputElementRef}
            className={styles['ChipInput-input']}
            autoFocus={autoFocus}
            placeholder={chips && chips.length > 0 ? '' : placeholder}
            disabled={disabled}
            value={inputValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onInputChangeHandler}
            onKeyDown={onKeyDownHandler}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-invalid={error === true ? true : ariaInvalid}
          />
        </div>
        {!disabled && (chips.length > 0 || inputValue.length > 0) && (
          <div
            data-test="DesignSystem-MultiSelectTrigger--Icon"
            className={classNames(
              inputStyles['Input-icon'],
              inputStyles['Input-iconWrapper--right'],
              'align-items-center',
              'flex-shrink-0'
            )}
            role="button"
            onClick={onDeleteAllHandler}
            tabIndex={disabled ? -1 : 0}
            aria-label="Clear all options"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onDeleteAllHandler(e as any);
              }
            }}
          >
            <Icon name="close" size={16} className={classNames(inputStyles['Input-icon--right'], 'p-3')} />
          </div>
        )}
      </div>
    </div>
  );
});

MultiSelectTrigger.displayName = 'MultiSelectTrigger';
MultiSelectTrigger.defaultProps = {
  chipOptions: {},
  defaultValue: [],
  allowDuplicates: false,
  autoFocus: false,
  tabIndex: -1,
};

export default MultiSelectTrigger;
