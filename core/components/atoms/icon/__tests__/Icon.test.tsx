import * as React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps as Props } from '../Icon';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = 50;
const appearance = [
  'destructive',
  'white',
  'subtle',
  'disabled',
  'alert',
  'info',
  'success',
  'warning',
  'primary',
  'primary_dark',
  'primary_lighter',
  'alert_dark',
  'alert_lighter',
  'success_dark',
  'success_lighter',
  'warning_dark',
  'warning_lighter',
  'accent1',
  'accent1_dark',
  'accent1_lighter',
  'accent2',
  'accent2_dark',
  'accent2_lighter',
  'accent3',
  'accent3_dark',
  'accent3_lighter',
  'accent4',
  'accent4_dark',
  'accent4_lighter',
  'inverse',
];
const type = ['filled', 'outline', 'rounded', 'outlined', 'round', 'two-tone', 'sharp'];
const FunctionValue = jest.fn();
const StringValue = 'events';

describe('Icon component snapshot', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Icon {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Icon component snapshot', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(StringValue, { required: true }),
    size: valueHelper(size, { required: true }),
    type: valueHelper(type, { required: true, iterate: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Icon {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Icon component symbols', () => {
  it('check for material symbols font variation settings', () => {
    const { getByTestId } = render(
      <Icon name="places" variations={{ fill: 0, grade: 150, opticalSize: 30, weight: 200 }} />
    );
    expect(getByTestId('DesignSystem-Icon')).toHaveStyle(
      `font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 150, "opsz" 30;`
    );
  });

  it('check for material symbols default font variation settings', () => {
    const { getByTestId } = render(<Icon name="more_horiz" />);
    expect(getByTestId('DesignSystem-Icon')).toHaveStyle(
      `font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 24;`
    );
  });

  it('check for material symbols custom font variation settings', () => {
    const { getByTestId } = render(<Icon name="speed" />);
    expect(getByTestId('DesignSystem-Icon')).toHaveStyle(
      `font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 20;`
    );
  });
});
