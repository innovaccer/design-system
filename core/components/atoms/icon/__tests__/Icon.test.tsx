import * as React from 'react';
import { shallow } from 'enzyme';
import Icon, { IIconProps as IProps } from '../Icon';
import { TestHelper, filterUndefined, valueHelper, arrayHelper, testMessageHelper } from '@/utils/TestHelper';

const Size = [50];
const Appearance = ['destructive', 'white', 'subtle', 'disabled', 'alert', 'info', 'success', 'warning'];
const Type = ['filled', 'outline', 'rounded', 'sharp'];
const FunctionValue = [jest.fn()];
const Helpers = ['m-6', 'mx-4'];
const StringValue = 'events';

const Mapper: Record<string, any> = {
  name: valueHelper(StringValue, { required: true }),
  size: valueHelper(Size, { iterate: true }),
  appearance: valueHelper(Appearance, { iterate: true }),
  type: valueHelper(Type, { iterate: true }),
  onClick: valueHelper(FunctionValue, { iterate: true }),
  helpers: arrayHelper(Helpers),
};

describe('Icon component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Icon
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };
  TestHelper(Mapper, testFunc);
});
