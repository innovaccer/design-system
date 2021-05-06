import * as React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps as Props } from '../Icon';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = 50;
const appearance = ['destructive', 'white', 'subtle', 'disabled', 'alert', 'info', 'success', 'warning'];
const type = ['filled', 'outline', 'rounded', 'outlined', 'round', 'two-tone', 'sharp'];
const FunctionValue = jest.fn();
const StringValue = 'events';

describe('Icon component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Icon
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Icon component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    type: valueHelper(type, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Icon
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});
