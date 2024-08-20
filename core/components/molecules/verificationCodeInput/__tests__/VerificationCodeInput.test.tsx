import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VerificationCodeInput } from '@/index';
import { VerificationCodeInputProps as Props } from '@/index.type';
import { valueHelper, testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

const value = '2345';
const fields = [4, 6];
const type = ['number', 'text', 'password'];
const min = 5;
const max = 8;
const placeholder = '_';
const autoFocus = [false, true];
const FunctionValue = jest.fn();

const KEY_CODE = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: 'ArrowRight',
  down: 'ArrowDown',
  e: 'e',
  E: 'E',
  space: 'space',
};

describe('VerificationCodeInput component', () => {
  const mapper: Record<string, any> = {
    min,
    max,
    value,
    placeholder,
    autoFocus: valueHelper(autoFocus, { required: false, iterate: true }),
    fields: valueHelper(fields, { required: false, iterate: true }),
    type: valueHelper(type, { required: false, iterate: true }),
    onComplete: FunctionValue,
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<VerificationCodeInput {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('VerificationCodeInput component', () => {
  it('renders 4 inputs', () => {
    const { getByTestId } = render(<VerificationCodeInput />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const inputs = getByTestId('DesignSystem-VerificationCodeInput').getElementsByClassName(
      'VerificationCodeInput-Input'
    );

    expect(inputs.length).toBe(4);
  });

  it('renders 6 inputs', () => {
    const { getByTestId } = render(<VerificationCodeInput fields={6} />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const inputs = getByTestId('DesignSystem-VerificationCodeInput').getElementsByClassName(
      'VerificationCodeInput-Input'
    );

    expect(inputs.length).toBe(6);
  });
});

describe('VerificationCodeInput component with props disabled and error ', () => {
  it('with prop: disabled', () => {
    const { getByTestId } = render(<VerificationCodeInput disabled={true} onComplete={FunctionValue} />);

    const inputs = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').getElementsByClassName(
        'VerificationCodeInput-Input'
      ) as any),
    ];

    for (const el of inputs) {
      expect(el).toHaveClass('Input--disabled');
      if (el) {
        const input = el.getElementsByClassName('Input-input')[0];
        fireEvent.click(input);
        expect(input).not.toHaveFocus();
      }
    }

    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('with prop: error', () => {
    const { getByTestId } = render(<VerificationCodeInput error={true} />);

    const inputs = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').getElementsByClassName(
        'VerificationCodeInput-Input'
      ) as any),
    ];

    for (const el of inputs) {
      expect(el).toHaveClass('Input--error');
      if (el) {
        const input = el.getElementsByClassName('Input-input')[0];
        fireEvent.click(input);
        expect(input).toHaveFocus();
      }
    }
  });
});

describe('VerificationCodeInput component events', () => {
  it('Trigger on change', () => {
    const { getByTestId } = render(<VerificationCodeInput />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const inputs = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').getElementsByClassName(
        'VerificationCodeInput-Input'
      ) as any),
    ];

    for (const el of inputs) {
      if (el) {
        const input = el.getElementsByClassName('Input-input')[0];
        fireEvent.change(input, { target: { value: '234' } });
        expect(input).toHaveValue(2);
        fireEvent.change(input, { target: { value: '' } });
        expect(input).toHaveValue(2);
      }
    }
  });

  it('Trigger keyboard events', () => {
    const { getByTestId } = render(<VerificationCodeInput value="3456" />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0, input1] = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any),
    ];

    fireEvent.keyDown(input1, { key: KEY_CODE.backspace });
    fireEvent.keyDown(input1, { key: KEY_CODE.backspace });
    expect(input0).toHaveFocus();

    fireEvent.keyDown(input0, { key: KEY_CODE.right });
    expect(input1).toHaveFocus();

    fireEvent.keyDown(input1, { key: KEY_CODE.left });
    expect(input0).toHaveFocus();

    fireEvent.change(input0, { target: { value: '4' } });

    fireEvent.keyDown(input1, { key: KEY_CODE.up });
    expect(input1).toHaveFocus();
    expect(input0).toHaveValue(4);

    fireEvent.keyDown(input1, { key: KEY_CODE.down });
    expect(input1).toHaveFocus();
    expect(input0).toHaveValue(4);

    fireEvent.keyDown(input1, { key: KEY_CODE.e });
    expect(input1).toHaveFocus();
    expect(input0).toHaveValue(4);

    fireEvent.keyDown(input1, { key: KEY_CODE.E });
    expect(input1).toHaveFocus();
    expect(input0).toHaveValue(4);

    fireEvent.keyDown(input1, { key: KEY_CODE.space });
    expect(input1).toHaveFocus();
  });
});

describe('VerificationCodeInput component callback', () => {
  it('Trigger onComplete', () => {
    const { getByTestId } = render(<VerificationCodeInput onComplete={FunctionValue} />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0, input1, input2, input3] = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any),
    ];

    fireEvent.change(input0, { target: { value: '4' } });
    fireEvent.change(input1, { target: { value: '3' } });

    expect(FunctionValue).not.toHaveBeenCalled();

    fireEvent.change(input2, { target: { value: '2' } });
    fireEvent.change(input3, { target: { value: '1' } });

    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue).toHaveBeenCalledWith('4321');
  });

  it('Trigger onChange', () => {
    const { getByTestId } = render(<VerificationCodeInput onChange={FunctionValue} />);

    const [input0, input1, input2, input3] = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any),
    ];

    fireEvent.change(input0, { target: { value: '4' } });
    expect(FunctionValue).toHaveBeenCalledWith('4');

    fireEvent.change(input1, { target: { value: '3' } });
    expect(FunctionValue).toHaveBeenCalledWith('43');

    fireEvent.change(input2, { target: { value: '2' } });
    expect(FunctionValue).toHaveBeenCalledWith('432');

    fireEvent.change(input3, { target: { value: '1' } });
    expect(FunctionValue).toHaveBeenCalledWith('4321');
  });

  it('Trigger onFocus', () => {
    const { getByTestId } = render(<VerificationCodeInput onFocus={FunctionValue} />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0] = [...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any)];

    fireEvent.focus(input0);
    expect(input0).toHaveFocus();
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('Trigger onBlur', () => {
    const { getByTestId } = render(<VerificationCodeInput onBlur={FunctionValue} />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0] = [...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any)];

    fireEvent.blur(input0);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('VerificationCodeInput component types', () => {
  it('check for letters input when type="number"', () => {
    const { getByTestId } = render(<VerificationCodeInput fields={1} />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0] = [...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any)];

    fireEvent.change(input0, { target: { value: 'a' } });
    expect(input0).toHaveValue(null);
  });

  it('check for letters input when type="password"', () => {
    const { getByTestId } = render(<VerificationCodeInput fields={1} type="password" />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0] = [...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any)];

    fireEvent.change(input0, { target: { value: 'a' } });
    expect(input0).toHaveValue('a');
  });

  it('check for input when type="text"', () => {
    const { getByTestId } = render(<VerificationCodeInput fields={2} type="text" />);

    expect(getByTestId('DesignSystem-VerificationCodeInput')).toBeInTheDocument();

    const [input0, input1] = [
      ...(getByTestId('DesignSystem-VerificationCodeInput').querySelectorAll('div > input') as any),
    ];

    fireEvent.change(input0, { target: { value: 'a' } });
    fireEvent.change(input1, { target: { value: '1' } });
    expect(input0).toHaveValue('a');
    expect(input1).toHaveValue('1');
  });
});
