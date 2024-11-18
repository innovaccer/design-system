import * as React from 'react';
import { render } from '@testing-library/react';
import Spinner, { SpinnerProps as Props } from '../Spinner';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['primary', 'secondary', 'white'];
const size = ['xsmall', 'small', 'medium', 'large'];

describe('Spinner component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Spinner {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Spinner component', () => {
  const mapper = {
    size: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Spinner {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
