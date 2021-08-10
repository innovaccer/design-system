import * as React from 'react';
import { render } from '@testing-library/react';
import Legend, { LegendProps as IProps } from '../Legend';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const weight = ['strong', 'medium'];
const labelAppearance = ['default', 'white', 'destructive', 'subtle', 'disabled'];
const iconAppearance = [
  'primary',
  'secondary',
  'success',
  'alert',
  'warning',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
  'inverse',
];
const label = 'Legend';

describe('Legend component', () => {
  const mapper = {
    labelWeight: valueHelper(weight, { required: true, iterate: true }),
    label: valueHelper(label, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Legend {...attr}>{label}</Legend>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Legend component', () => {
  const mapper = {
    labelAppearance: valueHelper(labelAppearance, { required: true, iterate: true }),
    label: valueHelper(label, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Legend {...attr}>{label}</Legend>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Legend component', () => {
  const mapper = {
    iconAppearance: valueHelper(iconAppearance, { required: true, iterate: true }),
    label: valueHelper(label, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Legend {...attr}>{label}</Legend>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
