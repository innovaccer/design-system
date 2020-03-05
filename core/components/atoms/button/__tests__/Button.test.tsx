import * as React from 'react';
import { shallow } from 'enzyme';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';
import Button, { IButtonProps as IProps } from '../Button';

const BooleanValue = [true, false];
const Icon = ['events'];
const IconAlign = ['left', 'right'];
const Size = ['tiny', 'regular', 'large'];
const Appearance = ['basic', 'primary', 'success', 'alert', 'transparent'];
const FunctionValue = [jest.fn()];
const StringValue = ['button'];

const Mapper: Record<string, any> = {
  children: valueHelper(StringValue, { iterate: true }),
  size: valueHelper(Size, { iterate: true }),
  appearance: valueHelper(Appearance, { iterate: true }),
  expanded: valueHelper(BooleanValue, { iterate: true }),
  disabled: valueHelper(BooleanValue, { iterate: true }),
  loading: valueHelper(BooleanValue, { iterate: true }),
  icon: valueHelper(Icon, { iterate: true }),
  iconAlign: valueHelper(IconAlign, { iterate: true }),
  onClick: valueHelper(FunctionValue, { iterate: true }),
  onMouseEnter: valueHelper(FunctionValue, { iterate: true }),
  onMouseLeave: valueHelper(FunctionValue, { iterate: true }),
};

describe('Button component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...rest}
        >
          {children}
        </Button >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
