import React, { useState, useEffect, RefObject, ChangeEvent, KeyboardEvent, FocusEvent, useMemo } from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import styles from '@css/components/verificationCodeInput.module.css';

const KEY_CODE = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: 'ArrowRight',
  down: 'ArrowDown',
  e: 'e',
  E: 'E',
};

interface VerificationProps extends BaseProps {
  /**
   * Number of input fields to be used to compose code input.
   * @default 4
   */
  fields?: number;

  /**
   * Type of values to be entered.
   * @default "number"
   */
  type?: 'text' | 'number' | 'password';

  /**
   * Callback triggered after all values are entered.
   */
  onComplete?: (value: string) => void;

  /**
   * Callback triggered when input value is changed.
   */
  onChange?: (value: string) => void;
}

type Refs = RefObject<HTMLInputElement | null>[];

export type VerificationCodeInputProps = VerificationProps &
  Omit<
    InputProps,
    | 'name'
    | 'type'
    | 'defaultValue'
    | 'size'
    | 'icon'
    | 'inlineLabel'
    | 'autoComplete'
    | 'onChange'
    | 'onClear'
    | 'info'
    | 'min'
    | 'max'
    | 'minLength'
    | 'maxLength'
    | 'actionIcon'
  >;

const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const {
    type = 'number',
    fields = 4,
    placeholder = '_',
    autoFocus = true,
    onComplete,
    onChange,
    onFocus,
    onBlur,
    className,
    value,
    ...rest
  } = props;

  const initialValues = useMemo(() => {
    if (props.value && props.value.length) {
      return props.value.split('');
    }
    return Array(fields).fill('');
  }, []);

  const initialRefs = useMemo(() => {
    return [...Array(fields)].map(() => {
      return React.createRef<HTMLInputElement>();
    });
  }, []);

  const [values, setValues] = useState<string[]>(initialValues);
  const [refs] = useState<Refs>(initialRefs);

  useEffect(() => {
    if (refs[0] && refs[0].current && autoFocus) {
      refs[0].current.focus({ preventScroll: true });
    }
  }, []);

  useEffect(() => {
    const completeValue = values.join('');
    const isComplete = completeValue.length === fields;
    isComplete && onComplete?.(completeValue);
    onChange?.(completeValue);
  }, [values]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.dataset.id as string, 10);
    const fieldValue = e.target.value;
    let nextRef;
    const newValues = [...values];

    if (!fieldValue) {
      return;
    }

    if (fieldValue.length > 1) {
      let nextIndex = fieldValue.length + index - 1;
      if (nextIndex >= fields) {
        nextIndex = fields - 1;
      }
      nextRef = refs[nextIndex];
      const split = fieldValue.split('');
      split.forEach((item: string, i: number) => {
        const cursor: number = index + i;
        if (cursor < fields) {
          newValues[cursor] = item;
        }
      });
      setValues(newValues);
    } else {
      nextRef = refs[index + 1];
      newValues[index] = fieldValue;
      setValues(newValues);
    }

    if (nextRef && nextRef.current) {
      nextRef.current.focus({ preventScroll: true });
      nextRef.current.select();
    }
  };

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
    e.target.placeholder = '';
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = placeholder;
    if (onBlur) {
      onBlur(e);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const index = parseInt(e.currentTarget.dataset.id as string, 10);
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = refs[prevIndex];
    const nextRef = refs[nextIndex];
    switch (e.key) {
      case KEY_CODE.backspace: {
        e.preventDefault();
        const vals = [...values];
        if (values[index]) {
          vals[index] = '';
          setValues(vals);
        } else if (prev && prev.current) {
          vals[prevIndex] = '';
          prev.current.focus({ preventScroll: true });
          setValues(vals);
        }
        break;
      }
      case KEY_CODE.left: {
        e.preventDefault();
        if (prev && prev.current) {
          prev.current.focus({ preventScroll: true });
        }
        break;
      }
      case KEY_CODE.right: {
        e.preventDefault();
        if (nextRef && nextRef.current) {
          nextRef.current.focus({ preventScroll: true });
        }
        break;
      }
      case KEY_CODE.up:
      case KEY_CODE.down:
      case KEY_CODE.e:
      case KEY_CODE.E: {
        if (type === 'number') {
          e.preventDefault();
        }
        break;
      }
      default:
        break;
    }
  };

  const wrapperClassNames = (i: number) =>
    classNames(
      {
        [styles['VerificationCodeInput-Input']]: true,
        'ml-4': i > 0,
      },
      className
    );

  return (
    <div data-test="DesignSystem-VerificationCodeInput" className={styles['VerificationCodeInput']}>
      {values.map((val: string, index: number) => (
        <Input
          key={index}
          className={wrapperClassNames(index)}
          size="large"
          minWidth="40px"
          value={val}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onKeyDown={onKeyDown}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          data-id={index}
          ref={refs[index]}
          type={type}
          {...rest}
        />
      ))}
    </div>
  );
};

VerificationCodeInput.displayName = 'VerificationCodeInput';
VerificationCodeInput.defaultProps = {
  type: 'number',
  fields: 4,
};

export default VerificationCodeInput;
