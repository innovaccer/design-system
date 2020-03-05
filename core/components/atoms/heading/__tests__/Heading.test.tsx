import * as React from 'react';
import { shallow } from 'enzyme';
import Heading, { IHeadingProps as IProps } from '../Heading';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['default', 'subtle', 'disabled', 'white'];
const Size = ['m', 'l', 'xl', 'xxl'];
const StringValue = 'Heading';

const Mapper = {
  appearance: valueHelper(Appearance, { iterate: true }),
  size: valueHelper(Size, { iterate: true }),
  children: valueHelper(StringValue, { required: true })
};

describe('Heading component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Heading
          {...rest}
        >
          {children}
        </Heading>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
