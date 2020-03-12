import * as React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb, { IBreadcrumbProps as IProps } from '../Breadcrumb';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const ReactNode = [(<h2>Hello World</h2>)];

const Mapper = {
  children: valueHelper(ReactNode, { required: true }),
};

describe('Breadcrumb component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Breadcrumb>
          {children}
        </Breadcrumb>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
