import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

describe('InputMask component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<InputMask mask={mask} label="Card Number" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('uses label as aria-label fallback when aria-label is omitted', () => {
    const { getByTestId } = render(<InputMask mask={mask} label="Start Date" />);
    expect(getByTestId('DesignSystem-Input')).toHaveAttribute('aria-label', 'Start Date');
  });

  it('keeps an explicit aria-label when label is also provided', () => {
    const { getByTestId } = render(<InputMask mask={mask} label="Start Date" aria-label="Start date mm/dd/yyyy" />);
    expect(getByTestId('DesignSystem-Input')).toHaveAttribute('aria-label', 'Start date mm/dd/yyyy');
  });

  it('does not let an undefined aria-label wipe the label fallback', () => {
    const { getByTestId } = render(
      <InputMask mask={mask} label="End Date" aria-label={undefined as unknown as string} />
    );
    expect(getByTestId('DesignSystem-Input')).toHaveAttribute('aria-label', 'End Date');
  });

  it('prefers aria-labelledby over aria-label and label', () => {
    const { getByTestId } = render(
      <InputMask mask={mask} label="Date" aria-label="ignored" aria-labelledby="external-date-label" />
    );
    const input = getByTestId('DesignSystem-Input');
    expect(input).toHaveAttribute('aria-labelledby', 'external-date-label');
    expect(input).not.toHaveAttribute('aria-label');
  });

  it('keeps a distinct clear-button name from label when aria-labelledby is set', () => {
    const { getByTestId } = render(
      <InputMask
        mask={mask}
        label="Start Date"
        aria-labelledby="external-start-label"
        value="1111 2222 3333 4444"
        onClear={onClearHandler}
      />
    );

    const input = getByTestId('DesignSystem-Input');
    expect(input).toHaveAttribute('aria-labelledby', 'external-start-label');
    expect(input).not.toHaveAttribute('aria-label');
    expect(getByTestId('DesignSystem-Input--closeIcon').parentElement).toHaveAttribute(
      'aria-label',
      'Clear Start Date'
    );
  });

  it('preserves an explicit clearButtonAriaLabel over generated fallbacks', () => {
    const { getByTestId } = render(
      <InputMask
        mask={mask}
        label="Start Date"
        placeholder="mm/dd/yyyy"
        clearButtonAriaLabel="Effacer la date"
        value="1111 2222 3333 4444"
        onClear={onClearHandler}
      />
    );

    expect(getByTestId('DesignSystem-Input--closeIcon').parentElement).toHaveAttribute('aria-label', 'Effacer la date');
  });
});
