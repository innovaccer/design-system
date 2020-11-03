import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, Validators, Mask } from '@/utils/types';
import { Input, Caption, Utils } from '@/index';
import { InputProps } from '@/index.type';
import { getDefaultValue } from './utilites';

export interface MaskProps extends BaseProps {
  /**
   * Every value of Array represent either fixed char or regular expression for particular index
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
}
export type InputMaskProps = InputProps & MaskProps;
type SelectionPos = {
  start: number,
  end: number
};

/**
 * It works as Uncontrolled Input
 *
 * **Updated value can be passed**
 */
export const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>((props, forwardRef) => {
  const {
    mask: maskProp,
    value: valueProp,
    placeholderChar = '_',
    validators = [],
    defaultValue,
    mask,
    error,
    caption,
    required,
    onChange,
    onBlur,
    onClick,
    onFocus,
    onClear,
    className,
    ...rest
  } = props;

  const getNewCursorPosition = (type: 'left' | 'right', position: number): number => {
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
  };

  const getDefaultSelection = () => {
    const pos = getNewCursorPosition('right', 0);
    return { start: pos, end: pos };
  };

  const getPlaceholderValue = (start: number = 0, end: number = mask.length - 1) =>
    getDefaultValue(mask, placeholderChar).slice(start, end);

  const getSelectionLength = (val: SelectionPos) => Math.abs(val.end - val.start);

  const isEditable = (pos: number) => typeof mask[pos] === 'object';

  const deferId = React.useRef<number | undefined>();
  const selectionRef = React.useRef<number>(0);
  const [value, setValue] = React.useState<string>(defaultValue || valueProp || '');
  const [selection, setSelection] = React.useState<SelectionPos>(getDefaultSelection());
  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardRef, () => ref.current as HTMLInputElement);

  React.useEffect(() => {
    setValue(valueProp || '');
  }, [valueProp]);

  const setCursorPosition = (val: number) => setSelectionPos({ start: val, end: val });

  const getCurrSelection = () => ({
    start: ref.current!.selectionStart || 0,
    end: ref.current!.selectionEnd || 0,
  });

  const setSelectionPos = (pos: SelectionPos): void => {
    if (ref.current) {
      const el = ref.current;
      const start = Math.min(pos.start, pos.end);
      const end = Math.max(pos.start, pos.end);
      el.setSelectionRange(start, end);
    }
  };

  const updateSelection = () => {
    setSelection(getCurrSelection());

    deferId.current = window.requestAnimationFrame(updateSelection);
  };

  const insertAtIndex = (currValue: string, index: number, iterator: number = 0) => {
    let newValue = '';
    const newIndex = index + 1;
    let newIterator = iterator;

    if (index >= mask.length) {
      return newValue;
    }

    if (iterator >= currValue.length) {
      selectionRef.current = index;
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
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;

    const currSelection = getCurrSelection();
    const start = Math.min(selection.start, currSelection.start);
    const end = currSelection.end;

    let cursorPosition = start;
    let enteredVal = '';
    let updatedVal = '';
    let removedLength = 0;
    let insertedStringLength = 0;

    enteredVal = inputVal.slice(start, end);
    updatedVal = insertAtIndex(enteredVal, start);
    insertedStringLength = updatedVal.length;
    if (currSelection.end > selection.end) {
      removedLength = insertedStringLength ? getSelectionLength(selection) : 0;
    } else if (inputVal.length < value.length) {
      removedLength = value.length - inputVal.length;
    }

    cursorPosition += insertedStringLength;

    const maskedVal = value.split('');
    for (let i = 0; i < insertedStringLength; i++) {
      maskedVal[start + i] = updatedVal[i];
    }
    for (let i = 0; i < removedLength; i++) {
      const index = start + insertedStringLength + i;
      maskedVal[index] = getPlaceholderValue(index, index);
    }

    const newCursorPosition = getNewCursorPosition(removedLength ? 'left' : 'right', cursorPosition);
    if (removedLength === 1
      && !updatedVal.length
      && !isEditable(cursorPosition)
      && newCursorPosition > 0) {
      cursorPosition = newCursorPosition;
      cursorPosition--;
      maskedVal[cursorPosition] = placeholderChar;
    } else if (removedLength !== 1) {
      cursorPosition = newCursorPosition;
    }
    const newValue = maskedVal.slice(0, mask.length).join('');
    window.requestAnimationFrame(() => setCursorPosition(cursorPosition));

    if (Utils.validators.isValid(validators, newValue)) {
      setValue(newValue);
      if (onChange) onChange(e, newValue);
    }
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;

    if (onBlur) onBlur(e, inputVal);

    if (deferId.current) window.cancelAnimationFrame(deferId.current);
  };

  const onClearHandler = (e: React.MouseEvent<HTMLElement>) => {
    setValue('');

    if (onClear) onClear(e);
  };

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    deferId.current = window.requestAnimationFrame(updateSelection);
    if (!value) {
      setValue(getPlaceholderValue());
      window.requestAnimationFrame(() => setSelectionPos(getDefaultSelection()));
    }

    if (onFocus) onFocus(e);
  };

  const classes = classNames({
    'd-flex flex-column flex-grow-1': true,
  }, className);

  return (
    <div className={classes}>
      <Input
        {...rest}
        value={value}
        error={error}
        required={required}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        onClear={onClearHandler}
        onBlur={onBlurHandler}
        autoComplete={'off'}
        ref={ref}
      />
      <Caption error={error} withInput={true} hide={!caption}>
        {caption}
      </Caption>
    </div>
  );
});

InputMask.displayName = 'InputMask';
// @ts-ignore
InputMask.utils = {
  getDefaultValue
};

export default InputMask;
