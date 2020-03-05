import * as React from 'react';
import { shallow } from 'enzyme';
import PlaceholderParagraph, { IPlaceholderParagraphProps as IProps } from '../PlaceholderParagraph';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Length = ['small', 'medium', 'large'];

const Mapper = {
  length: valueHelper(Length, { iterate: true })
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

  TestHelper(Mapper, testFunc);
});
