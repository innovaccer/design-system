import * as React from 'react';
import classNames from 'classnames';
import { Chip, Icon } from '@/index';
import { ChipProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';

const keyCodes = {
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter',
};

type ChipOptions = {
  icon?: ChipProps['icon'],
  type?: ChipProps['type'],
  clearButton?: ChipProps['clearButton'],
  onClick?: (value: string, index: number) => void;
};

export interface ChipInputProps extends BaseProps {
  /**
   * Allows duplicate chips if set to true.
   */
  allowDuplicates: boolean;
  /**
   * <pre className="DocPage-codeBlock">
   *  ChipOptions: {
   *   icon?: string;
   *   type?: action | input | selection
   *   clearButton?: boolean;
   *   onClick?: (value: string, index: number) => void;
   *  }
   * </pre>
   */
  chipOptions: ChipOptions;
  /**
   * Disables the chip input if set to true.
   */
  disabled?: boolean;
  /**
   * A placeholder that is displayed if the input has no values.
   */
  placeholder?: string;
  /**
   * The chip labels to display (enables controlled mode if set).
   */
  value?: string[];
  /**
   * The chips to display by default (for uncontrolled mode).
   */
  defaultValue: string[];
  /**
   * Adds autoFocus to input
   */
  autoFocus: boolean;
  /**
   * Callback function that is called when the chips change.
   */
  onChange?: (chips: string[]) => void;
  /**
   * Handler to be called when `Input` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const ChipInput = (props: ChipInputProps) => {
  const {
    chipOptions,
    allowDuplicates,
    disabled,
    placeholder,
    defaultValue,
    value,
    className,
    autoFocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const inputRef = React.createRef<HTMLInputElement>();
  const [chips, setChips] = React.useState(value || defaultValue);
  const [inputValue, setInputValue] = React.useState('');

  const baseProps = extractBaseProps(props);

  React.useEffect(() => {
    if (value !== undefined) {
      setChips(value);
    }
  }, [value]);

  const ChipInputClass = classNames({
    ChipInput: true,
    ['ChipInput--disabled']: disabled,
    ['ChipInput--withChips']: chips.length > 0
  }, className);

  const onUpdateChips = (updatedChips: string[]) => {
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

    const chip = inputValue.trim().toLowerCase();
    if ((allowDuplicates || chips.indexOf(chip) === -1) && chip) {
      const updatedChips = [...chips, chip];

      if (!value) {
        setChips(updatedChips);
      }

      onUpdateChips(updatedChips);
      setInputValue('');
    }
  };

  const onDeleteAllHandler = () => {
    const updatedChips: string[] = [];

    if (!value) {
      setChips(updatedChips);
    }

    onUpdateChips(updatedChips);
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
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickHandler = () => {
    inputRef.current?.focus();
  };

  const chipComponents = chips.map((chip, index) => {
    const { type = 'input', onClick, ...rest } = chipOptions;

    return (
      <Chip
        data-test="DesignSystem-ChipInput--Chip"
        label={chip}
        name={chip}
        type={type}
        disabled={disabled}
        key={index}
        className="my-2 mx-2"
        onClick={() => onClick && onClick(chip, index)}
        onClose={() => onChipDeleteHandler(index)}
        {...rest}
      />
    );
  });

  return (
    <div
      data-test="DesignSystem-ChipInput"
      {...baseProps}
      className={ChipInputClass}
      onClick={onClickHandler}
    >
      <div className="ChipInput-wrapper">
        {chips && chips.length > 0 && chipComponents}
        <input
          data-test="DesignSystem-ChipInput--Input"
          ref={inputRef}
          className="ChipInput-input"
          autoFocus={autoFocus}
          placeholder={placeholder}
          disabled={disabled}
          value={inputValue}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onInputChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
      {chips.length > 0 && (
        <Icon
          data-test="DesignSystem-ChipInput--Icon"
          name="close"
          appearance="subtle"
          className="ChipInput-icon"
          onClick={onDeleteAllHandler}
        />
      )}
    </div>
  );
};

ChipInput.displayName = 'ChipInput';
ChipInput.defaultProps = {
  chipOptions: {},
  defaultValue: [],
  allowDuplicates: false,
  autoFocus: false,
};

export default ChipInput;
