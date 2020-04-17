import * as React from 'react';
import Input, { InputProps } from '@/components/atoms/input';

export type Mask = (string | RegExp)[];

interface extraProps {
  /**
   * Every value of Array represent either fixed char or regular expression for particular index
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Mask: (string | RegExp)[]
   * </pre>
   */
  mask: Mask;
  /**
   * Character to be used for empty value at particular index in `mask`
   * @default "_"
   */
  placeholderChar?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, val?: string) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>, val?: string) => void;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type InputMaskProps = InputProps & extraProps;

export const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>((props, forwardRef) => {
  const {
    mask: maskProp,
    value: valueProp,
    placeholderChar = '_',
    mask,
    error,
    onChange,
    onBlur,
    onClick,
    onClear,
    caption,
    ...rest
  } = props;

  const [value, setValue] = React.useState<string>('');
  const [caret, setCaret] = React.useState<number>(0);
  const ref = React.useRef<HTMLInputElement>(null);

  const fixedMask = mask.filter(m => typeof m === 'string' && m.length === 1);

  React.useEffect(() => {
    if (valueProp) {
      setValue(convertToMasked(valueProp));
    }
  }, [valueProp]);

  React.useEffect(() => {
    setCaretPos(caret);
  }, [caret]);

  React.useEffect(() => {
    if (ref.current) {
      const el = ref.current;
      el.addEventListener('keyup', e => {
        if (e.keyCode === 37 || e.keyCode === 39) {
          if (ref.current) {
            const pos = ref.current.selectionEnd;
            if (ref.current.selectionStart === ref.current.selectionEnd) {
              if (pos) setCaret(pos);
            }
          }
        }
      });
    }
  }, [ref]);

  React.useImperativeHandle(forwardRef, () => ref.current as HTMLInputElement);

  const setCaretPos = (pos: number): void => {
    if (ref.current) {
      const el = ref.current;

      // if (el.createTextRange) {
      //   var range = el.createTextRange();
      //   range.move('character', pos);
      //   range.select();
      //   return true;
      // }

      // else {
      //   // (el.selectionStart === 0 added for Firefox bug)
      if (el.selectionStart || el.selectionStart === 0) {
        // el.focus();
        const p = Math.ceil(pos);
        el.setSelectionRange(p, p);
      } else { // fail city, fortunately this never happens (as far as I've tested) :)
        // el.focus();
      }
      // }
    }
  };

  const getRawValue = (val: string = '') => val.split('')
    .filter(v => !(fixedMask.includes(v) || v === placeholderChar))
    .join('');

  function convertToMasked(val: string = ''): string {
    let currCaret: number = 0;
    if (ref.current) {
      currCaret = ref.current.selectionEnd ? ref.current.selectionEnd : 0;
    }

    const oldRawValue = getRawValue(value);
    const rawValue = getRawValue(val);
    let it = 0;
    let newVal = '';
    let newCaretPos: number = currCaret;
    for (let i = 0; i < mask.length; i++) {
      const m = mask[i];
      if (typeof m === 'object') {
        if (it < rawValue.length && rawValue[it].match(m)) {
          newVal += rawValue[it++];
        } else {
          newVal += placeholderChar;
        }
      } else {
        newVal += m;
        if (i >= caret && i <= newCaretPos && it < rawValue.length) {
          if (rawValue.length > oldRawValue.length) newCaretPos++;
        }
      }
    }

    setCaret(newCaretPos);

    return newVal;
  }

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    if (ref.current) {
      const pos = ref.current.selectionStart ? ref.current.selectionStart : 0;
      if (ref.current.selectionEnd === pos) setCaret(pos);
    }
    if (onClick) onClick(e);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;
    const maskedVal = convertToMasked(inputVal);
    setValue(maskedVal);

    if (onChange) onChange(e, maskedVal);
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;
    const maskedVal = convertToMasked(inputVal);

    if (onBlur) onBlur(e, maskedVal);
  };

  const onClearHandler = (e: React.MouseEvent<HTMLElement>) => {
    setValue('');

    if (onClear) onClear(e);
  };

  return (
    <Input
      {...rest}
      value={value}
      error={error}
      caption={error ? 'Invalid Value' : caption}
      onClick={onClickHandler}
      onChange={onChangeHandler}
      onClear={onClearHandler}
      onBlur={onBlurHandler}
      autocomplete={'off'}
      ref={ref}
    />
  );
});

export default InputMask;
