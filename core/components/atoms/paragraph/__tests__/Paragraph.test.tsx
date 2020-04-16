import * as React from 'react';
import { shallow } from 'enzyme';
import Paragraph, { ParagraphProps as Props } from '../Paragraph';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['default', 'white', 'destructive', 'subtle', 'disabled'];

const mapper = {
  appearance: valueHelper(appearance, { required: true, iterate: true }),
};

describe('Paragraph component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Paragraph
          {...attr}
        >
          Sample string
        </Paragraph>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
