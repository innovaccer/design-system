import * as React from 'react';
import Input, { IInputProps } from '@/components/atoms/input';
import validators from '@/utils/validators';
import masks from './masks';

export type Validator = {
  name: string,
  type: string
};
export interface IInputMaskProps extends IInputProps {
  mask: Validator | (string | RegExp)[];
  placeholderChar?: string;
  validator?: Validator | ((val: string) => boolean);
}

const InputMask = React.forwardRef<HTMLInputElement, IInputMaskProps>((props, forwardRef) => {
  const {
    mask: maskProp,
    value: valueProp,
    error: errorProp,
    placeholderChar = '_',
    onChange,
    onBlur,
    validator,
    caption,
    ...rest
  } = props;

  const mask = Array.isArray(maskProp) ? maskProp : masks[maskProp.name][maskProp.type];

  const [value, setValue] = React.useState<string>(valueProp || '');
  const [caret, setCaret] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(errorProp || false);
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
        el.focus();
        const p = Math.ceil(pos);
        el.setSelectionRange(p, p);
      } else { // fail city, fortunately this never happens (as far as I've tested) :)
        el.focus();
      }
      // }
    }
  };

  const getRawValue = (val: string) => val.split('')
    .filter(v => !(fixedMask.includes(v) || v === placeholderChar))
    .join('');

  function convertToMasked(val: string = ''): string {
    let index = getDiffIndex(val, value);
    if (index < 0) index = mask.length;

    const rawValue = getRawValue(val.substr(index));
    let it = 0;
    let newVal = value.substr(0, index);
    let newCaretPos = index;
    const oldRawValue = getRawValue(value.substr(index));
    let eIndex = getDiffIndex(rawValue, oldRawValue);
    if (eIndex >= 0) {
      if (oldRawValue.length <= rawValue.length) eIndex++;
      else eIndex--;
    } else {
      if (ref.current) {
        newCaretPos = ref.current.selectionStart ? ref.current.selectionStart : 0;
      }
    }
    for (let i = index; i < mask.length; i++) {
      const m = mask[i];
      if (it < eIndex) {
        newCaretPos++;
      }
      if (typeof m === 'object') {
        if (it < rawValue.length && rawValue[it].match(m)) {
          newVal += rawValue[it++];
        } else {
          newVal += placeholderChar;
        }
      } else {
        newVal += m;
      }
    }

    setCaret(newCaretPos);

    return newVal;
  }

  function getDiffIndex(newStr: string, oldStr: string): number {
    let index = -1;
    for (let i = 0; i < Math.max(newStr.length, oldStr.length); i++) {
      if (newStr[i] !== oldStr[i]) {
        index = i;
        break;
      }
    }
    return index;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;
    const maskedVal = convertToMasked(inputVal);
    setValue(maskedVal);

    if (onChange) onChange(e);
  };

  const onClearHandler = () => {
    setValue('');
    setError(false);
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;
    const maskedVal = convertToMasked(inputVal);

    if (validator) {
      if (!maskedVal.includes(placeholderChar)) {
        if (typeof validator !== 'function') {
          if (validators[validator.name]) {
            const isValid = validators[validator.name](validator.type, maskedVal);
            setError(!isValid);
          }
        } else {
          setError(validator(maskedVal));
        }
      } else {
        setError(true);
      }
    }

    if (onBlur) onBlur(e);
  };

  return (
    <Input
      {...rest}
      value={value}
      error={error}
      caption={error ? 'Invalid Value' : caption}
      onChange={onChangeHandler}
      onClear={onClearHandler}
      onBlur={onBlurHandler}
      autocomplete={'off'}
      ref={ref}
    />
  );
});

export default InputMask;
