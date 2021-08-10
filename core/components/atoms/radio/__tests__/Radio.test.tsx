import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Radio, { RadioProps as Props } from '../Radio';

const size = ['tiny', 'regular'];
const BooleanValue = [true, false];
const label = 'Radio';
const FunctionValue = jest.fn();
const StringValue = 'Options';

describe('Radio component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    selected: valueHelper(true, { required: true }),
    label: valueHelper(label, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Radio {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Radio component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    selected: valueHelper(true, { required: true }),
    label: valueHelper(label, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Radio {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
