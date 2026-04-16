import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import Caption, { CaptionProps as Props } from '../Caption';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];

describe('Caption component', () => {
  const mapper = {
    error: valueHelper(BooleanValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Caption>{'Caption'}</Caption>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Caption component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Caption>{'Caption'}</Caption>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
