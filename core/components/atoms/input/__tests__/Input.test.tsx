import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Input, { InputProps as Props } from '../Input';

const iconValue = ['events'];
const inputValue = ['value'];
const StringValue = 'value';
const nameValue = 'name';
const inputType = ['text', 'password', 'number'];
const size = ['tiny', 'regular', 'large'];
const FunctionValue = jest.fn();
const defaultValue = '123';

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    type: valueHelper(inputType, { required: true, iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    type: valueHelper('number', { required: true }),
    inlineLabel: valueHelper('USD', { required: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(inputValue, { iterate: true }),
    placeholder: valueHelper('Placeholder', { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    disabled: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    disabled: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    readOnly: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    error: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input component selection range is set correctly on input type change', () => {
  it('through Action Button', () => {
    const InputComponent = () => {
      const [visibility, setVisibility] = React.useState(false);

      return (
        <Input
          defaultValue={defaultValue}
          type={visibility ? 'number' : 'password'}
          actionIcon={
            <Input.ActionButton
              onClick={() => setVisibility((x) => !x)}
              name={visibility ? 'visibility_on' : 'visibility_off'}
            />
          }
        />
      );
    };

    const { getByTestId } = render(<InputComponent />);
    const input = getByTestId('DesignSystem-Input');
    const actionButton = getByTestId('DesignSystem-Input-ActionButton');

    input.focus = jest.fn();

    fireEvent.click(actionButton);

    expect(input.focus).toHaveBeenCalled();
    expect((input as HTMLInputElement).type).toBe('number');

    fireEvent.click(actionButton);
    expect(input.focus).toHaveBeenCalled();
    expect((input as HTMLInputElement).type).toBe('password');
  });
});
