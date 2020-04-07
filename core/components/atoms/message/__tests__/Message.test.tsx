import * as React from 'react';
import { shallow } from 'enzyme';
import Message, { MessageProps as Props } from '../Message';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['default', 'alert', 'info', 'success', 'warning'];
const title = 'Title goes here';

describe('Message component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

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

  testHelper(mapper, testFunc);
});

describe('Message component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    title: valueHelper(title, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

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

  testHelper(mapper, testFunc);
});
