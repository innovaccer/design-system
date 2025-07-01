import * as React from 'react';
import classNames from 'classnames';
import { Chip, Icon } from '@/index';
import { ChipProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/chipInput.module.css';

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
  maxWidth?: ChipProps['maxWidth'];
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
   *   type?: action | input | selection;
   *   clearButton?: boolean;
   *   maxWidth?: string | number;
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
  /**
   * Validator function to validate a chip before it's added.  Return `true` for valid, `false` for invalid.
   */
  chipValidator?: (chip: string) => boolean;
}

export const ChipInput = (props: ChipInputProps) => {
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
    chipValidator,
  } = props;

  const inputRef = React.createRef<HTMLInputElement>();
  const customRef = React.useRef<any>(null);

  const [chips, setChips] = React.useState(value || defaultValue);
  const [inputValue, setInputValue] = React.useState('');

  const baseProps = extractBaseProps(props);

  React.useEffect(() => {
    if (value !== undefined) {
      setChips(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (inputValue === '' && inputRef.current) {
      inputRef.current.style.flexBasis = '0';
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

    const chip = inputValue.trim();

    if (chipValidator && !chipValidator(chip)) {
      return;
    }

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
    const elementScrollWidth = inputRef.current?.scrollWidth;
    const elementClientWidth = inputRef.current?.clientWidth;
    const charLen = e.target.value.length;

    if (elementScrollWidth && elementClientWidth && inputRef.current) {
      if (elementScrollWidth > elementClientWidth && inputValue.length <= charLen && customRef.current) {
        inputRef.current.style.flexBasis = 'auto';
        customRef.current.charCount = charLen;
      } else if (
        elementScrollWidth <= elementClientWidth &&
        inputValue.length > charLen &&
        charLen <= customRef.current?.charCount - 2
      ) {
        inputRef.current.style.flex = '0';
      }
    }

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
    <div data-test="DesignSystem-ChipInput--Border" className={ChipInputBorderClass}>
      <div
        data-test="DesignSystem-ChipInput"
        {...baseProps}
        className={ChipInputClass}
        onClick={onClickHandler}
        tabIndex={disabled ? -1 : 0}
      >
        <div className={styles['ChipInput-wrapper']} ref={customRef}>
          {chips && chips.length > 0 && chipComponents}
          <input
            data-test="DesignSystem-ChipInput--Input"
            ref={inputRef}
            className={styles['ChipInput-input']}
            autoFocus={autoFocus}
            placeholder={chips && chips.length > 0 ? '' : placeholder}
            disabled={disabled}
            value={inputValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onInputChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
          {/* eslint-enable */}
        </div>
        {chips.length > 0 && (
          <Icon
            data-test="DesignSystem-ChipInput--Icon"
            name="close"
            appearance={disabled ? 'disabled' : 'subtle'}
            className={styles['ChipInput-icon']}
            onClick={onDeleteAllHandler}
            tabIndex={disabled ? -1 : 0}
          />
        )}
      </div>
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
