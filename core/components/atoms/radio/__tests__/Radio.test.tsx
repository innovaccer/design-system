import * as React from 'react';
import { shallow } from 'enzyme';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';
import Radio, { IRadioProps as IProps } from '../Radio';

const Size = ['tiny', 'regular'];
const BooleanValue = [true, false];
const Label = ['Radio'];
const FunctionValue = [jest.fn()];
const StringValue = 'Options';

const Mapper: Record<string, any> = {
  size: valueHelper(Size, { iterate: true }),
  selected: valueHelper(BooleanValue, { iterate: true }),
  disabled: valueHelper(BooleanValue, { iterate: true }),
  checked: valueHelper(BooleanValue, { iterate: true }),
  label: valueHelper(Label, { iterate: true }),
  onChange: valueHelper(FunctionValue, { iterate: true }),
  name: valueHelper(StringValue, { required: true }),
  value: valueHelper(StringValue, { required: true }),
};

describe('Radio component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Radio
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
