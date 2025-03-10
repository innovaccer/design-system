import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, Validators, Mask } from '@/utils/types';
import { Input, Utils, HelpText } from '@/index';
import { InputProps } from '@/index.type';
import { getDefaultValue } from './utilites';

export interface MaskProps extends BaseProps {
  mask: Mask;
  placeholderChar?: string;
  caption?: string;
  validators?: Validators;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>, val?: string) => void;
  clearOnEmptyBlur?: boolean;
  helpText?: string;
}
export type InputMaskProps = InputProps & MaskProps;
type SelectionPos = { start: number; end: number };

type InputMaskType = React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>> & {
  utils: {
    getDefaultValue: typeof getDefaultValue;
  };
};

const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>((props, forwardRef) => {
  const {
    mask,
    placeholderChar = '_',
    validators = [],
    clearOnEmptyBlur = true,
    defaultValue,
    value: valueProp,
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

  const ref = React.useRef<HTMLInputElement>(null);
  const valueRef = React.useRef<string>(defaultValue || valueProp || getDefaultValue(mask, placeholderChar));
  const cursorPosRef = React.useRef<number>(0);
  const forceUpdate = React.useReducer(() => ({}), {})[1];

  React.useImperativeHandle(forwardRef, () => ref.current as HTMLInputElement);

  React.useEffect(() => {
    valueRef.current = valueProp || getDefaultValue(mask, placeholderChar);
    forceUpdate();
  }, [valueProp]);

  const setCursorPosition = (position: number) => {
    requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.setSelectionRange(position, position);
      }
    });
  };

  const formatInputValue = (rawValue: string): string => {
    const formattedValue = getDefaultValue(mask, placeholderChar).split('');
    let rawIndex = 0;
    for (let i = 0; i < formattedValue.length && rawIndex < rawValue.length; i++) {
      if (mask[i] === 'M' || mask[i] === 'D' || mask[i] === 'Y') {
        if (/\d/.test(rawValue[rawIndex])) {
          formattedValue[i] = rawValue[rawIndex];
          rawIndex++;
        }
      }
    }
    return formattedValue.join('');
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value.replace(/[^\d]/g, '');
    valueRef.current = formatInputValue(rawValue);
    cursorPosRef.current = input.selectionStart || valueRef.current.length;
    forceUpdate();
    onChange?.(e, valueRef.current);
    setCursorPosition(cursorPosRef.current);
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;
    if (clearOnEmptyBlur && inputVal === getDefaultValue(mask, placeholderChar)) {
      valueRef.current = '';
      inputVal = '';
    }
    forceUpdate();
    onBlur?.(e, inputVal);
  };

  const onClearHandler = (e: React.MouseEvent<HTMLElement>) => {
    valueRef.current = getDefaultValue(mask, placeholderChar);
    forceUpdate();
    onClear?.(e);
  };

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!valueRef.current) {
      valueRef.current = getDefaultValue(mask, placeholderChar);
      forceUpdate();
    }
    onFocus?.(e);
  };

  const onPasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedValue = e.clipboardData?.getData('Text').replace(/[^\d]/g, '');
    if (Utils.validators.isValid(validators, pastedValue)) {
      valueRef.current = formatInputValue(pastedValue);
      forceUpdate();
      onPaste?.(e, valueRef.current);
    }
  };

  const classes = classNames('d-flex flex-column flex-grow-1', className);

  return (
    <div className={classes} data-test="DesignSystem-InputMask--Wrapper">
      <Input
        {...rest}
        value={valueRef.current}
        error={error}
        required={required}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        onClear={valueRef.current !== getDefaultValue(mask, placeholderChar) ? onClearHandler : undefined}
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
(InputMask as InputMaskType).utils = { getDefaultValue };

export { InputMask };
export default InputMask as InputMaskType;
