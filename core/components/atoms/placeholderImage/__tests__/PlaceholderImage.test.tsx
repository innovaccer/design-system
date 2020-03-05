import * as React from 'react';
import { shallow } from 'enzyme';
import PlaceholderImage, { IPlaceholderImageProps as IProps } from '../PlaceholderImage';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Size = ['small', 'medium', 'large'];
const BooleanValue = [true, false];

const Mapper = {
  round: valueHelper(BooleanValue, { iterate: true }),
  imageSize: valueHelper(Size, { iterate: true }),
};

describe('Image placeholder component', () => {
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

  TestHelper(Mapper, testFunc);
});
