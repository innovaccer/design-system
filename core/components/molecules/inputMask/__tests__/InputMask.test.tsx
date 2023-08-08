import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputMaskProps as Props } from '@/index.type';
import { InputMask } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
const onFocusHandler = jest.fn();
const onChangeHandler = jest.fn();
const onBlurHandler = jest.fn();
const onClearHandler = jest.fn();

const mask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

describe('Input Mask component', () => {
  const mapper = {
    placeholderChar: valueHelper('*', { required: false }),
    mask: valueHelper(mask, { required: true }),
    caption: valueHelper('card', { required: true }),
    validators: valueHelper(undefined, { required: true }),
    onChange: valueHelper(onChangeHandler, { required: false }),
    onBlur: valueHelper(onBlurHandler, { required: false }),
    onClear: valueHelper(onChangeHandler, { required: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<InputMask {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Input Mask component with prop mask', () => {
  it('render Input', () => {
    const { getByTestId } = render(<InputMask mask={mask} />);
    expect(getByTestId('DesignSystem-InputMask--Wrapper')).toHaveClass('d-flex');
  });
});

describe('Input Mask component prop: onFocusHandler', () => {
  it('calls onFocusHandler callback without value', () => {
    const { getByTestId } = render(<InputMask mask={mask} onFocus={onFocusHandler} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveAttribute('value', '____ ____ ____ ____');
    expect(onFocusHandler).toHaveBeenCalledTimes(1);
  });

  it('calls onFocusHandler callback with value', () => {
    const value = '1111 2222 3333 4444';
    const { getByTestId } = render(<InputMask mask={mask} onFocus={onFocusHandler} value={value} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveAttribute('value', value);
  });
});

describe('Input Mask component prop: onBlurHandler', () => {
  const value = '____ ____ ____ ____';
  it('calls onBlurHandler callback  when clearOnEmptyBlur is false', () => {
    const { getByTestId } = render(<InputMask mask={mask} onBlur={onBlurHandler} clearOnEmptyBlur={false} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveValue(value);
    fireEvent.blur(input);
    expect(input).toHaveValue(value);
  });

  it('calls onBlurHandler callback  when clearOnEmptyBlur is true', () => {
    const { getByTestId } = render(<InputMask mask={mask} onBlur={onBlurHandler} />);
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveValue(value);
    fireEvent.blur(input);
    expect(input).toHaveValue('');
  });
});

describe('Input Mask component prop: onChangeHandler', () => {
  it('calls onChangeHandler callback ', async () => {
    const value = '33';
    const { getByTestId } = render(<InputMask mask={mask} onChange={onChangeHandler} />);
    const input = getByTestId('DesignSystem-Input');
    input.focus();
    fireEvent.select(input, {
      target: { selectionStart: 0, selectionEnd: 0 },
    });
    fireEvent.change(input, {
      target: {
        value,
        selectionStart: value.length,
        selectionEnd: value.length,
      },
    });
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

describe('Input Mask component prop: onClearHandler', () => {
  it('calls onClearHandler callback without value', () => {
    const value = '1111 2222 3333 4444';
    const { getByTestId } = render(<InputMask mask={mask} onClear={onClearHandler} value={value} />);
    const input = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(input);
    expect(onClearHandler).toHaveBeenCalledTimes(1);
  });

  it('with onClearHandler available only when user inputs value', () => {
    const value = '1111 2222 3333 4444';
    const { getByTestId } = render(
      <InputMask mask={mask} onClear={onClearHandler} value={value} placeholder="____ ____ ____ ____" />
    );
    const closeIcon = getByTestId('DesignSystem-Input--closeIcon');
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(closeIcon);
    expect(closeIcon).not.toBeInTheDocument();
  });
});
