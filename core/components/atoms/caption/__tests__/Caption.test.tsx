import * as React from 'react';
import { render } from '@testing-library/react';
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
