import * as React from 'react';
import { shallow } from 'enzyme';
import Placeholder, { IPlaceholderProps as IProps } from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Style = [{
  width: valueHelper('150px', { required: true }),
  height: valueHelper('150px', { required: true })
}];
const Size = ['small', 'medium', 'large'];
const BooleanValue = [true, false];

const Mapper = {
  withImage: valueHelper(BooleanValue, { iterate: true }),
  round: valueHelper(BooleanValue, { iterate: true }),
  imageSize: valueHelper(Size, { iterate: true }),
  style: valueHelper(Style, { iterate: true }),
};

describe('Placeholder component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Placeholder {...attr}>
          <PlaceholderParagraph length="small" />
        </Placeholder>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
