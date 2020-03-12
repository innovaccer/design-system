import * as React from 'react';
import { shallow } from 'enzyme';
import PlaceholderParagraph, { IPlaceholderParagraphProps as IProps } from '../PlaceholderParagraph';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const length = ['small', 'medium', 'large'];

const mapper = {
  length: valueHelper(length, { required: true, iterate: true })
};

describe('Image placeholder component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <PlaceholderParagraph
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
