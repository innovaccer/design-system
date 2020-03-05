import * as React from 'react';
import { shallow } from 'enzyme';
import Checkbox, { ICheckboxProps as IProps } from '../Checkbox';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Size = ['tiny', 'regular'];
const BooleanValue = [true, false];
const StringValue = ['Checkbox'];

const FunctionValue = [jest.fn()];

const Mapper: Record<string, any> = {
  size: valueHelper(Size, { iterate: true }),
  checked: valueHelper(BooleanValue, { iterate: true }),
  intermediate: valueHelper(BooleanValue, { iterate: true }),
  disabled: valueHelper(BooleanValue, { iterate: true }),
  label: valueHelper(StringValue, { iterate: true }),
  name: valueHelper(StringValue, { iterate: true }),
  value: valueHelper(StringValue, { iterate: true }),
  onChange: valueHelper(FunctionValue, { iterate: true }),
};

describe('Checkbox component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Checkbox
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
