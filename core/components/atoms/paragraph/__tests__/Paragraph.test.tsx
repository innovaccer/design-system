import * as React from 'react';
import { shallow } from 'enzyme';
import Paragraph, { IParagraphProps as IProps } from '../Paragraph';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['default', 'white', 'destructive', 'subtle', 'disabled'];
const StringValue = ['Sample string'];
const NumberValue = [10];

const Mapper = {
  appearance: valueHelper(Appearance, { iterate: true }),
  children: valueHelper([...StringValue, ...NumberValue], { required: true, iterate: true }),
};

describe('Paragraph component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Paragraph
          {...rest}
        >
          {children}
        </Paragraph>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
