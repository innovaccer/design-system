import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

describe('PlaceholderParagraph component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<PlaceholderParagraph />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
