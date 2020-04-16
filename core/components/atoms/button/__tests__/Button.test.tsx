import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Button, { ButtonProps as Props } from '../Button';

const BooleanValue = [true, false];
const icon = 'events';
const iconAlign = ['left', 'right'];
const size = ['tiny', 'regular', 'large'];
const appearance = ['basic', 'primary', 'success', 'alert', 'transparent'];

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...attr}
        >
          Button
        </Button >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...attr}
        >
          Button
        </Button >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true }),
    iconAlign: valueHelper(iconAlign, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...attr}
        >
          Button
        </Button >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    disabled: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...attr}
        >
          Button
        </Button >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...attr}
        >
          Button
        </Button >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component with no children', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Button
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
