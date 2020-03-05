import * as React from 'react';
import { shallow } from 'enzyme';
import Avatar, { IAvatarProps as IProps } from '../Avatar';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['primary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'];
const StringValue = 'JD';
const Mapper = {
  children: valueHelper(StringValue, { required: true }),
  appearance: valueHelper(Appearance, { iterate: true }),
};

describe('Avatar component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Avatar
          {...rest}
        >
          {children}
        </Avatar>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
