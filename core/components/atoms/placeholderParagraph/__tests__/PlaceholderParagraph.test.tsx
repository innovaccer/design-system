import * as React from 'react';
import { render } from '@testing-library/react';
import PlaceholderParagraph, { PlaceholderParagraphProps as Props } from '../PlaceholderParagraph';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const length = ['small', 'medium', 'large'];

const mapper = {
  length: valueHelper(length, { required: true, iterate: true }),
};

describe('Image placeholder component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<PlaceholderParagraph {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
