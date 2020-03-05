import * as React from 'react';
import { shallow } from 'enzyme';
import Subheading, { ISubheadingProps as IProps } from '../Subheading';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['default', 'subtle', 'disabled', 'white'];
const StringValue = 'Subheading';

const Mapper = {
  appearance: valueHelper(Appearance, { iterate: true }),
  children: valueHelper(StringValue, { required: true })
};

describe('Subheading component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Subheading
          {...rest}
        >
          {children}
        </Subheading>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
