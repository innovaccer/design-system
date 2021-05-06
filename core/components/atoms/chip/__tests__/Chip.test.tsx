import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Chip, { ChipProps as Props } from '../Chip';

const type = ['Action', 'Selection', 'Input'];
const BooleanValue = [true, false];
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(type, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chip
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Input', { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chip
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Action', { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chip
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Selection', { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chip
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Chip component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper('Selection', { required: true }),
    selected: valueHelper(BooleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chip
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
