import * as React from 'react';
import { render } from '@testing-library/react';
import PlaceholderImage, { PlaceholderImageProps as Props } from '../PlaceholderImage';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['small', 'medium', 'large'];
const BooleanValue = [true, false];

describe('Image placeholder component', () => {
  const mapper = {
    round: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<PlaceholderImage {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Image placeholder component', () => {
  const mapper = {
    size: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<PlaceholderImage {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
