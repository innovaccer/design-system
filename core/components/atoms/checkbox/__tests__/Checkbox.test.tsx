import * as React from 'react';
import { render } from '@testing-library/react';
import Checkbox, { CheckboxProps as Props } from '../Checkbox';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['tiny', 'regular'];
const BooleanValue = [true, false];
const StringValue = 'Checkbox';

const FunctionValue = jest.fn();

describe('Checkbox component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    checked: valueHelper(true, { required: true }),
    label: valueHelper(StringValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Checkbox {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Checkbox component', () => {
  const mapper: Record<string, any> = {
    checked: valueHelper(BooleanValue, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    label: valueHelper(StringValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Checkbox {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Checkbox component', () => {
  const mapper: Record<string, any> = {
    indeterminate: valueHelper(true, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    label: valueHelper(StringValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Checkbox {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
