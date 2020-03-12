import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Input, { IInputProps as IProps } from '../Input';

const iconValue = ['events'];
const inputValue = ['value'];
const StringValue = 'value';
const caption = ['Enter Full Name'];
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
    const attr = filterUndefined(props) as IProps;

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
    const attr = filterUndefined(props) as IProps;

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
    const attr = filterUndefined(props) as IProps;

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
    const attr = filterUndefined(props) as IProps;

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
    const attr = filterUndefined(props) as IProps;

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
    const attr = filterUndefined(props) as IProps;

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
    const attr = filterUndefined(props) as IProps;

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
    label: valueHelper(StringValue, { required: true }),
    required: valueHelper(true, { required: true }),
    caption: valueHelper(caption, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

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
    label: valueHelper(StringValue, { required: true }),
    required: valueHelper(true, { required: true }),
    caption: valueHelper(StringValue, { required: true }),
    error: valueHelper(true, { required: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

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
