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
    if (valueProp !== undefined) {
      valueRef.current = valueProp;
      forceUpdate();
    }
  }, [valueProp]);

  const setCursorPosition = (position: number) => {
    requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.setSelectionRange(position, position);
      }
    });
  };

  const formatInputValue = (rawValue: string): { formattedValue: string; cursorPos: number } => {
    const formattedValue = getDefaultValue(mask, placeholderChar).split('');
    let rawIndex = 0;
    let newCursorPos = 0;

    for (let i = 0; i < formattedValue.length && rawIndex < rawValue.length; i++) {
      if (mask[i] === 'M' || mask[i] === 'D' || mask[i] === 'Y') {
        if (/[0-9]/.test(rawValue[rawIndex])) {
          formattedValue[i] = rawValue[rawIndex];
          rawIndex++;
          newCursorPos = i + 1;
        }
      }
    }
    return { formattedValue: formattedValue.join(''), cursorPos: newCursorPos };
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value.replace(/[^0-9]/g, '');
    const cursorPosition = input.selectionStart || 0;

    const { formattedValue, cursorPos } = formatInputValue(rawValue);
    valueRef.current = formattedValue;
    forceUpdate();

    requestAnimationFrame(() => {
      input.value = formattedValue;
      setCursorPosition(cursorPos);
    });

    onChange?.(e, formattedValue);
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
    const pastedValue = e.clipboardData?.getData('Text').replace(/[^0-9]/g, '');
    if (Utils.validators.isValid(validators, pastedValue)) {
      const { formattedValue, cursorPos } = formatInputValue(pastedValue);
      valueRef.current = formattedValue;
      forceUpdate();
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.value = formattedValue;
          setCursorPosition(cursorPos);
        }
      });
      onPaste?.(e, formattedValue);
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
