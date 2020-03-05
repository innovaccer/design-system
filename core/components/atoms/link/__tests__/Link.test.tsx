import * as React from 'react';
import { shallow } from 'enzyme';
import Link, { ILinkProps as IProps } from '../Link';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Target = ['_blank', '_self', '_parent', '_top'];
const StringValue = ['Sample string'];
const FunctionValue = [jest.fn()];
const ReactNodeValue = [(<span>Link</span>)];

const Mapper = {
  id: valueHelper(StringValue, { iterate: true }),
  href: valueHelper(StringValue, { iterate: true }),
  target: valueHelper(Target, { iterate: true }),
  rel: valueHelper(StringValue, { iterate: true }),
  onClick: valueHelper(FunctionValue, { iterate: true }),
  children: valueHelper(ReactNodeValue, { iterate: true })
};

describe('Link component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Link
          {...rest}
        >
          {children}
        </Link>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
