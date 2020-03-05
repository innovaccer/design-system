import * as React from 'react';
import { shallow } from 'enzyme';
import Badge, { IBadgeProps as IProps } from '../Badge';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['primary', 'secondary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'];
const BooleanValue = [true, false];
const StringValue = 'Badge';

const Mapper = {
  appearance: valueHelper(Appearance, { iterate: true }),
  subtle: valueHelper(BooleanValue, { iterate: true }),
  children: valueHelper(StringValue, { required: true }),
};

describe('Badge component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Badge
          {...rest}
        >
          {children}
        </Badge>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
