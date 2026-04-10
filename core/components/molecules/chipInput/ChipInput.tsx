import * as React from 'react';
import classNames from 'classnames';
import { Chip, Icon } from '@/index';
import { ChipProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { isSpaceKey } from '@/accessibility/utils';
import styles from '@css/components/chipInput.module.css';
import inputStyles from '@css/components/input.module.css';
import { ChipInputBorderFocusRegion, getChipInputBorderFocusRegion } from './utils';

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
  role?: ChipProps['role'];
  onClick?: (value: string, index: number) => void;
};

export type ChipInputSize = 'regular' | 'small';

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
   *   role?: string;
   *   onClick?: (value: string, index: number) => void;
   *   iconType?: 'rounded' | 'outlined'
   *  }
   * </pre>
   */
  chipOptions: ChipOptions;
  /**
   * The size of the chip input.
   */
  size?: ChipInputSize;
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
   * Focuses the text input on mount. Defaults to `false` when using `ChipInput` directly.
   */
  autoFocus?: boolean;
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
  /**
   * Accessible name for chip input trigger container
   */
  'aria-label'?: string;
  /**
   * Associates chip input with an external label element
   */
  'aria-labelledby'?: string;
  /**
   * Associates chip input with a description element
   */
  'aria-describedby'?: string;
}

export const ChipInput = (props: ChipInputProps) => {
  const {
    chipOptions,
    allowDuplicates,
    size = 'regular',
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
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
  } = props;

  const inputRef = React.createRef<HTMLInputElement>();
  const customRef = React.useRef<any>();

  const [chips, setChips] = React.useState(value || defaultValue);
  const [inputValue, setInputValue] = React.useState('');
  const [borderFocusRegion, setBorderFocusRegion] = React.useState<ChipInputBorderFocusRegion>(null);

  const handleBorderFocusIn = React.useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    setBorderFocusRegion(getChipInputBorderFocusRegion(e.target, styles['ChipInput-input']));
  }, []);

  const handleBorderFocusOut = React.useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget;
    if (next instanceof Node && e.currentTarget.contains(next)) return;
    setBorderFocusRegion(null);
  }, []);

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

  const showBorderFocusRing = borderFocusRegion === 'input' || borderFocusRegion === 'fieldChrome';

  const ChipInputBorderClass = classNames({
    [styles['ChipInput-border']]: true,
    [styles['ChipInput-border--error']]: error,
    [styles['ChipInput-border--focusRing']]: showBorderFocusRing,
  });

  const ChipInputClass = classNames(
    {
      [styles.ChipInput]: true,
      [styles['ChipInput--disabled']]: disabled,
      [styles['ChipInput--withChips']]: chips && chips.length > 0,
      [styles['ChipInput--error']]: error,
      [styles[`ChipInput--${size}`]]: size,
    },
    className
  );

  const InputClass = classNames({
    [styles['ChipInput-input']]: true,
    [styles[`ChipInput-input--${size}`]]: size,
    ['p-0']: true,
  });

  const ChipClass = classNames({
    ['mr-3']: true,
    ['my-2']: size === 'small',
    ['my-3']: size === 'regular',
  });

  const iconWrapperClass = classNames({
    [inputStyles['Input-icon']]: true,
    [inputStyles['Input-iconWrapper--right']]: true,
    ['pr-3']: size === 'small',
    ['pr-3-5']: size === 'regular',
  });

  const iconClass = classNames({
    [inputStyles['Input-icon--right']]: !disabled,
    ['p-3-5']: size === 'small',
    ['p-3']: size === 'regular',
  });

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

  const chipComponents = chips.map((chip, index) => {
    const { type = 'input', onClick, ...rest } = chipOptions;

    return (
      <Chip
        data-test="DesignSystem-ChipInput--Chip"
        label={chip}
        name={chip}
        type={type}
        size={size}
        disabled={disabled}
        key={index}
        className={ChipClass}
        onClick={() => onClick && onClick(chip, index)}
        onClose={() => onChipDeleteHandler(index)}
        {...rest}
      />
    );
  });

  const iconSize = size === 'small' ? 12 : 16;

  return (
    <div
      data-test="DesignSystem-ChipInput--Border"
      className={ChipInputBorderClass}
      onFocusCapture={handleBorderFocusIn}
      onBlurCapture={handleBorderFocusOut}
    >
      <div data-test="DesignSystem-ChipInput" {...baseProps} className={ChipInputClass}>
        <div
          className={styles['ChipInput-wrapper']}
          ref={customRef}
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              inputRef.current?.focus();
            }
          }}
        >
          {chips && chips.length > 0 && chipComponents}
          <input
            data-test="DesignSystem-ChipInput--Input"
            ref={inputRef}
            className={InputClass}
            autoFocus={autoFocus}
            placeholder={chips && chips.length > 0 ? '' : placeholder}
            disabled={disabled}
            value={inputValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onInputChangeHandler}
            onKeyDown={onKeyDownHandler}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          />
        </div>
        {chips.length > 0 && (
          <div
            data-test="DesignSystem-ChipInput--Icon"
            className={classNames(iconWrapperClass, 'align-self-center', 'flex-shrink-0')}
            tabIndex={disabled ? -1 : 0}
            role="button"
            aria-label="Clear all"
            aria-disabled={disabled || undefined}
            onClick={disabled ? undefined : onDeleteAllHandler}
            onKeyDown={
              disabled
                ? undefined
                : (e) => {
                    if (e.key === 'Enter' || isSpaceKey(e)) {
                      e.preventDefault();
                      onDeleteAllHandler();
                    }
                  }
            }
          >
            <Icon name="close" size={iconSize} appearance={disabled ? 'disabled' : undefined} className={iconClass} />
          </div>
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
