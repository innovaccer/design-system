import * as React from 'react';
import { shallow } from 'enzyme';
import Message, { IMessageProps as IProps } from '../Message';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['default', 'alert', 'info', 'success', 'warning'];
const Title = ['Title goes here'];

const Mapper: Record<string, any> = {
  appearance: valueHelper(Appearance, { iterate: true }),
  title: valueHelper(Title, { iterate: true }),
};

describe('Message component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Message
          {...attr}
        >
          Description goes here
        </Message>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
