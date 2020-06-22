import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Input, { InputProps as Props } from '../Input';

const iconValue = ['events'];
const inputValue = ['value'];
const StringValue = 'value';
const nameValue = 'name';
const inputType = ['text', 'password', 'number'];
const size = ['tiny', 'regular', 'large'];
const FunctionValue = jest.fn();

describe('Input component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
      const tree = shallow(
        <Input
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
