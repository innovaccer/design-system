import * as React from 'react';
import classNames from 'classnames';
import { Chip, Icon } from '@/index';
import { ChipProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { OptionType } from '@/common.type';

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
}

export const MultiSelectTrigger = (props: MultiSelectTriggerProps) => {
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
    ...rest
  } = props;

  const inputRef = React.createRef<HTMLInputElement>();
  const [chips, setChips] = React.useState<OptionType[]>(value || defaultValue);
  const [inputValue, setInputValue] = React.useState('');

  const baseProps = extractBaseProps(props);

  React.useEffect(() => {
    if (value !== undefined) {
      setChips(value);
      setInputValue('');
    }
  }, [value]);

  const ChipInputBorderClass = classNames({
    ['ChipInput-border']: true,
    ['ChipInput-border--error']: error,
  });

  const ChipInputClass = classNames(
    {
      ChipInput: true,
      ['ChipInput--disabled']: disabled,
      ['ChipInput--withChips']: chips && chips.length > 0,
      ['ChipInput--error']: error,
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
    setInputValue(event.target.value);
    onInputChange && onInputChange(event);
  };

  const onClickHandler = () => {
    inputRef.current?.focus();
  };

  const chipComponents = chips.map((chip, index) => {
    const { type = 'input', onClick, ...rest } = chipOptions;

    const chipLabel = typeof chip === 'string' ? chip : chip?.label;

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
      />
    );
  });

  return (
    /* TODO(a11y): fix accessibility  */
    /* eslint-disable  */
    <div data-test="DesignSystem-MultiSelectTrigger--Border" className={ChipInputBorderClass}>
      <div
        data-test="DesignSystem-MultiSelectTrigger"
        {...baseProps}
        className={ChipInputClass}
        onClick={onClickHandler}
        tabIndex={disabled ? -1 : tabIndex || 0}
      >
        <div className="ChipInput-wrapper">
          {chips && chips.length > 0 && chipComponents}
          <input
            {...rest}
            data-test="DesignSystem-MultiSelectTrigger--Input"
            ref={props.forwardedRef || inputRef}
            className="ChipInput-input"
            autoFocus={autoFocus}
            placeholder={chips && chips.length > 0 ? '' : placeholder}
            disabled={disabled}
            value={inputValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onInputChangeHandler}
            onKeyDown={onKeyDownHandler}
            role={role}
          />
          {/* eslint-enable */}
        </div>
        {(chips.length > 0 || inputValue.length > 0) && (
          <Icon
            data-test="DesignSystem-MultiSelectTrigger--Icon"
            name="close"
            appearance={disabled ? 'disabled' : 'subtle'}
            className="ChipInput-icon"
            onClick={onDeleteAllHandler}
            tabIndex={disabled ? -1 : 0}
          />
        )}
      </div>
    </div>
  );
};

MultiSelectTrigger.displayName = 'MultiSelectTrigger';
MultiSelectTrigger.defaultProps = {
  chipOptions: {},
  defaultValue: [],
  allowDuplicates: false,
  autoFocus: false,
};

export default MultiSelectTrigger;
