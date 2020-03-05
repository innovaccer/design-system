import * as React from 'react';
import { shallow } from 'enzyme';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';
import Input, { IInputProps as IProps } from '../Input';

const BooleanValue = [true, false];
const StringValue = ['events'];
const NameValue = 'name';
const NumberValue = [10];
const InputType = ['text', 'password', 'number'];
const Size = ['tiny', 'regular', 'large'];
const FunctionValue = [jest.fn()];

const Mapper: Record<string, any> = {
  name: valueHelper(NameValue, { required: true }),
  size: valueHelper(Size, { iterate: true }),
  label: valueHelper(StringValue, { iterate: true }),
  inlineLabel: valueHelper(StringValue, { iterate: true }),
  type: valueHelper(InputType, { iterate: true }),
  value: valueHelper([...StringValue, ...NumberValue], { iterate: true }),
  loading: valueHelper(BooleanValue, { iterate: true }),
  icon: valueHelper(StringValue, { iterate: true }),
  placeholder: valueHelper(StringValue, { iterate: true }),
  disabled: valueHelper(BooleanValue, { iterate: true }),
  required: valueHelper(BooleanValue, { iterate: true }),
  error: valueHelper(BooleanValue, { iterate: true }),
  caption: valueHelper(StringValue, { iterate: true }),
  clearButton: valueHelper(BooleanValue, { iterate: true }),
  info: valueHelper(StringValue, { iterate: true }),
  onClearHandler: valueHelper(FunctionValue, { iterate: true }),
  onChangeHandler: valueHelper(FunctionValue, { iterate: true }),
  onClickHandler: valueHelper(FunctionValue, { iterate: true }),
};

describe('Input component', () => {
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

  TestHelper(Mapper, testFunc);
});
