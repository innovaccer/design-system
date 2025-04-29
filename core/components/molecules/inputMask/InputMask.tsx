import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, Validators, Mask } from '@/utils/types';
import { Input, Utils, HelpText } from '@/index';
import { InputProps } from '@/index.type';
import { getDefaultValue } from './utilites';

export interface MaskProps extends BaseProps {
  /**
   * Every value of Array represent either fixed char or regular expression for particular index
   *
   * <pre className="DocPage-codeBlock">
   * Mask: (string | RegExp)[]
   * </pre>
   */
  mask: Mask;
  /**
   * Character to be used for empty value at particular index in `Mask`
   * @default '_'
   */
  placeholderChar?: string;
  /**
   * Adds caption to `input` on error
   */
  caption?: string;
  /**
   * custom Validator for `InputMask`
   *
   * `ValidatorFn: (val: string) => boolean`
   * @default []
   */
  validators?: Validators;
  /**
   * <br/>**Second argument will be the masked value**
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
  /**
   * <br/>**Second argument will be the masked value**
   */
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>, val?: string) => void;
  /**
   * Clear the `Input` on blur if value === defaultPlaceholderValue
   * @default true
   */
  clearOnEmptyBlur?: boolean;
  /**
   * Add text below `input`
   */
  helpText?: string;
}
export type InputMaskProps = InputProps & MaskProps;
type SelectionPos = {
  start: number;
  end: number;
};

type InputMaskType = React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>> & {
  utils: {
    getDefaultValue: typeof getDefaultValue;
  };
};

/**
 * It works as Uncontrolled Input
 *
 * **Updated value can be passed**
 */
const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>((props, forwardRef) => {
  const {
    mask: maskProp,
    value: valueProp,
    placeholderChar = '_',
    validators = [],
    clearOnEmptyBlur = true,
    defaultValue,
    mask,
    error,
    caption,
    required,
    onChange,
    onPaste,
    onBlur,
    onFocus,
    onClear,
    className,
    id,
    helpText,
    ...rest
  } = props;

  const isEditable = React.useCallback((pos: number) => typeof mask[pos] === 'object', [mask]);

  const getNewCursorPosition = React.useCallback(
    (type: 'left' | 'right', position: number): number => {
      if (type === 'right') {
        for (let i = position; i < mask.length; i++) {
          if (isEditable(i)) return i;
        }
        return mask.length;
      }
      if (type === 'left') {
        for (let i = position; i >= 0; i--) {
          if (isEditable(i - 1)) return i;
        }
        return 0;
      }
      return position;
    },
    [mask, isEditable]
  );

  const getDefaultSelection = React.useCallback(() => {
    const pos = getNewCursorPosition('right', 0);
    return { start: pos, end: pos };
  }, [getNewCursorPosition]);

  const getPlaceholderValue = React.useCallback(
    (start = 0, end: number = mask.length - 1) => getDefaultValue(mask, placeholderChar).slice(start, end + 1),
    [mask, placeholderChar]
  );

  const defaultPlaceholderValue = React.useMemo(() => getPlaceholderValue(), [getPlaceholderValue]);
  const defaultSelection = React.useMemo(() => getDefaultSelection(), [getDefaultSelection]);

  const ref = React.useRef<HTMLInputElement>(null);
  const deferId = React.useRef<number | undefined>(undefined);
  const selectionPos = React.useRef<SelectionPos>(defaultSelection);
  const newSelectionPos = React.useRef<number>(0);

  const [value, setValue] = React.useState<string>(defaultValue || valueProp || '');

  React.useImperativeHandle(forwardRef, () => ref.current as HTMLInputElement);

  React.useEffect(() => {
    setValue(valueProp || '');
  }, [valueProp]);

  React.useEffect(() => {
    setCursorPosition(newSelectionPos.current);
  }, [value]);

  const getSelectionLength = React.useCallback((val: SelectionPos) => Math.abs(val.end - val.start), []);

  const getCurrSelection = React.useCallback(
    () => ({
      start: ref.current?.selectionStart || 0,
      end: ref.current?.selectionEnd || 0,
    }),
    [ref.current]
  );

  const setSelectionRange_compatible_types = ['text', 'password', 'tel', 'url'];

  const setSelectionPos = React.useCallback(
    (pos: SelectionPos): void => {
      if (ref.current) {
        const el = ref.current;
        const start = Math.min(pos.start, pos.end);
        const end = Math.max(pos.start, pos.end);
        if (setSelectionRange_compatible_types.includes(el.type)) {
          el.setSelectionRange(start, end);
        } else {
          const el_type = el.type;
          el.type = 'text';
          el.setSelectionRange(start, end);
          el.type = el_type;
        }
      }
    },
    [ref.current]
  );

  const setCursorPosition = React.useCallback(
    (val: number) => {
      if (document && document.activeElement === ref.current) {
        setSelectionPos({ start: val, end: val });
      }
    },
    [setSelectionPos]
  );

  const insertAtIndex = React.useCallback(
    (currValue: string, index: number, iterator = 0) => {
      let newValue = '';
      const newIndex = index + 1;
      let newIterator = iterator;

      if (index >= mask.length) {
        return newValue;
      }

      if (iterator >= currValue.length) {
        selectionPos.current = { start: index, end: index };
        return newValue;
      }

      const m = mask[index];
      if (isEditable(index)) {
        if (currValue[iterator].match(m)) {
          newValue += currValue[iterator];
        } else {
          newValue += placeholderChar;
        }
        newIterator++;
      } else {
        newValue += m;
      }

      newValue += insertAtIndex(currValue, newIndex, newIterator);

      return newValue;
    },
    [mask, placeholderChar, isEditable]
  );

  const updateSelection = React.useCallback(() => {
    selectionPos.current = getCurrSelection();

    deferId.current = window.requestAnimationFrame(updateSelection);
  }, [selectionPos.current, getCurrSelection]);

  const matchSeparatorValue = (currValue: string) => {
    const separator = props.placeholder || 'dd/mm/yyyy';
    if (separator.substring(0, 4) === 'yyyy') {
      return currValue && currValue[4] === separator[4] && currValue[7] === separator[7];
    }
    return currValue && currValue[2] === separator[2] && currValue[5] === separator[5];
  };

  const isSameFormat = (currValue: string, inputLength: number) => {
    const value = currValue.substring(0, inputLength);
    if (inputLength === 23) {
      const date = value.split(' - ');
      const startVal = date[0];
      const endVal = date[1];
      return matchSeparatorValue(startVal) && matchSeparatorValue(endVal);
    }
    return matchSeparatorValue(value);
  };

  const onPasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedValue = e.clipboardData?.getData('Text');
    const sameFormat = isSameFormat(pastedValue, pastedValue.length);
    const isValidDate = Utils.validators.isValid(validators, pastedValue);
    if (sameFormat && onPaste && isValidDate) {
      onPaste(e, pastedValue);
      setValue(pastedValue);
    }
  };

  const onChangeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputVal = e.currentTarget?.value;

      const currSelection = getCurrSelection();
      const start = Math.min(selectionPos.current.start, currSelection.start);
      const end = currSelection.end;

      let cursorPosition = start;
      let enteredVal = '';
      let updatedVal = '';
      let removedLength = 0;
      let insertedStringLength = 0;

      enteredVal = inputVal.slice(start, end);
      updatedVal = insertAtIndex(enteredVal, start);
      let oldValue = value;
      if (oldValue.length === 0 && (id === 'parent-TimePicker' || id === 'parent-DatePicker')) {
        oldValue = defaultPlaceholderValue;
      }
      insertedStringLength = updatedVal.length;
      if (currSelection.end > selectionPos.current.end) {
        removedLength = insertedStringLength ? getSelectionLength(selectionPos.current) : 0;
      } else if (inputVal.length < oldValue.length) {
        removedLength = oldValue.length - inputVal.length;
      }

      const maskedVal = oldValue.split('');
      for (let i = 0; i < insertedStringLength; i++) {
        maskedVal[start + i] = updatedVal[i];
      }
      for (let i = 0; i < removedLength; i++) {
        const index = start + insertedStringLength + i;
        maskedVal[index] = getPlaceholderValue(index, index);
      }

      const enteredValue = maskedVal.slice(0, mask.length).join('');
      if (
        updatedVal !== placeholderChar &&
        updatedVal !== '' &&
        !updatedVal.includes(placeholderChar) &&
        Utils.validators.isValid(validators, enteredValue)
      ) {
        cursorPosition += insertedStringLength;
      }

      const newCursorPosition = getNewCursorPosition(removedLength ? 'left' : 'right', cursorPosition);
      if (removedLength === 1 && !updatedVal.length && !isEditable(cursorPosition) && newCursorPosition > 0) {
        cursorPosition = newCursorPosition;
        cursorPosition--;
        maskedVal[cursorPosition] = placeholderChar;
      } else if (removedLength !== 1) {
        cursorPosition = newCursorPosition;
      }

      const newValue = maskedVal.slice(0, mask.length).join('');
      newSelectionPos.current = cursorPosition;
      if (newValue !== oldValue && Utils.validators.isValid(validators, newValue)) {
        if (defaultPlaceholderValue === '__:__ _M') {
          setValue(newValue.toUpperCase());
          onChange?.(e, newValue.toUpperCase());
        } else {
          setValue(newValue);
          onChange?.(e, newValue);
        }
      } else {
        window.requestAnimationFrame(() => setCursorPosition(newSelectionPos.current));
      }
    },
    [
      selectionPos.current,
      validators,
      getCurrSelection,
      insertAtIndex,
      getSelectionLength,
      getPlaceholderValue,
      getNewCursorPosition,
      isEditable,
      setCursorPosition,
      setValue,
      onChange,
    ]
  );

  const onBlurHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputVal = e.currentTarget.value;
      if (clearOnEmptyBlur) {
        if (inputVal === defaultPlaceholderValue) {
          setValue('');
          inputVal = '';
        }
      }

      onBlur?.(e, inputVal);

      if (deferId.current) window.cancelAnimationFrame(deferId.current);
    },
    [clearOnEmptyBlur, deferId.current, getPlaceholderValue, setValue, onBlur]
  );

  const onClearHandler = React.useCallback(
    (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
      newSelectionPos.current = defaultSelection.start;
      setValue(defaultPlaceholderValue);

      onClear?.(e);
    },
    [setValue, getPlaceholderValue, setCursorPosition, getDefaultSelection, onClear]
  );

  const onFocusHandler = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      deferId.current = window.requestAnimationFrame(updateSelection);
      if (!value) {
        newSelectionPos.current = defaultSelection.start;
        setValue(getPlaceholderValue());
      }

      onFocus?.(e);
    },
    [deferId.current, value, updateSelection, setValue, setSelectionPos, onFocus]
  );

  const classes = React.useMemo(
    () =>
      classNames(
        {
          'd-flex flex-column flex-grow-1': true,
        },
        className
      ),
    [className]
  );

  const isValueEqualPlaceholder = value === defaultPlaceholderValue;

  return (
    <div className={classes} data-test="DesignSystem-InputMask--Wrapper">
      <Input
        {...rest}
        value={value}
        error={error}
        required={required}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        /**
         * input right cross icon should be visible only
         * when user provides value
         */
        onClear={!isValueEqualPlaceholder ? onClearHandler : undefined}
        onBlur={onBlurHandler}
        onPaste={onPasteHandler}
        autoComplete={'off'}
        ref={ref}
      />
      <HelpText message={error ? caption : helpText} error={error} />
    </div>
  );
});

InputMask.displayName = 'InputMask';
// we are adding a new property which is not present in default interface
// we could have explicitly added the interface above with definition
// but then it would force us to marks utils as optional
// as we cannot add new properties by defining the InputMask
// that would cause user to use `!` everywhere or check for utils
(InputMask as InputMaskType).utils = {
  getDefaultValue,
};

const X = InputMask as InputMaskType;

export { X as InputMask };
export default X as InputMaskType;
