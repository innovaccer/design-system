import * as React from 'react';
import { shallow } from 'enzyme';
import PlaceholderImage, { IPlaceholderImageProps as IProps } from '../PlaceholderImage';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['small', 'medium', 'large'];
const BooleanValue = [true, false];

describe('Image placeholder component', () => {
  const mapper = {
    round: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <PlaceholderImage
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Image placeholder component', () => {
  const mapper = {
    imagesize: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <PlaceholderImage
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
