import * as React from 'react';
import { shallow } from 'enzyme';
import BreadcrumbWrapper, { IBreadcrumbsWrapperProps as IProps } from '../BreadcrumbsWrapper';
import Breadcrumb from '../Breadcrumb';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const ReactNode = [(<Breadcrumb><h2>Hello World</h2></Breadcrumb>)];
const StringValue = ['Heading'];

const Mapper = {
  children: valueHelper(ReactNode, { required: true }),
  heading: valueHelper(StringValue, { iterate: true })
};

describe('BreadcrumbWrapper component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const {
      children,
      ...rest
    } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <BreadcrumbWrapper
          {...rest}
        >
          {children}
        </BreadcrumbWrapper>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
