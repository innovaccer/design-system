import * as React from 'react';
import { shallow } from 'enzyme';
import Placeholder, { PlaceholderProps as Props } from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const style = {
  width: valueHelper('150px', { required: true }),
  height: valueHelper('150px', { required: true })
};
const size = ['small', 'medium', 'large'];
const BooleanValue = [true, false];

describe('Placeholder component', () => {
  const mapper = {
    withImage: valueHelper(BooleanValue, { required: true, iterate: true }),
    style: valueHelper(style, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Placeholder {...attr}>
          <PlaceholderParagraph length="small" />
        </Placeholder>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Placeholder component', () => {
  const mapper = {
    withImage: valueHelper(true, { required: true }),
    round: valueHelper(BooleanValue, { required: true, iterate: true }),
    style: valueHelper(style, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Placeholder {...attr}>
          <PlaceholderParagraph length="small" />
        </Placeholder>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Placeholder component', () => {
  const mapper = {
    withImage: valueHelper(true, { required: true }),
    imageSize: valueHelper(size, { required: true, iterate: true }),
    style: valueHelper(style, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Placeholder {...attr}>
          <PlaceholderParagraph length="small" />
        </Placeholder>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
