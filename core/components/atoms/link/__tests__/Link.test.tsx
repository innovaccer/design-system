import * as React from 'react';
import { shallow } from 'enzyme';
import Link, { ILinkProps as IProps } from '../Link';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const target = ['_blank', '_self', '_parent', '_top'];
const StringValue = 'Sample string';
const FunctionValue = jest.fn();

const Mapper = {
  id: valueHelper(StringValue, { required: true }),
  href: valueHelper(StringValue, { required: true }),
  target: valueHelper(target, { required: true, iterate: true }),
  rel: valueHelper(StringValue, { required: true }),
  onClick: valueHelper(FunctionValue, { required: true }),
};

describe('Link component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Link
          {...attr}
        >
          <span>Link</span>
        </Link>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
