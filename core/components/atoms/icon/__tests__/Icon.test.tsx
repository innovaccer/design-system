import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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
  'primary_darker',
  'primary_lighter',
  'alert_dark',
  'alert_darker',
  'alert_lighter',
  'success_dark',
  'success_darker',
  'success_lighter',
  'warning_dark',
  'warning_darker',
  'warning_lighter',
  'accent1',
  'accent1_dark',
  'accent1_darker',
  'accent1_lighter',
  'accent2',
  'accent2_dark',
  'accent2_darker',
  'accent2_lighter',
  'accent3',
  'accent3_dark',
  'accent3_darker',
  'accent3_lighter',
  'accent4',
  'accent4_dark',
  'accent4_darker',
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

describe('Icon component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Icon name={StringValue} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('hides a decorative icon so its ligature does not leak into an ancestor name', () => {
    const { getByTestId } = render(<Icon name="keyboard_arrow_down" />);

    expect(getByTestId('DesignSystem-Icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('keeps the ligature out of the accessible name of a wrapping control', () => {
    const { getByRole } = render(
      <button>
        <Icon name="keyboard_arrow_down" />
        AUTH POLICY
      </button>
    );

    expect(getByRole('button')).toHaveAccessibleName('AUTH POLICY');
  });

  it('exposes a labelled icon as an image instead of hiding it', () => {
    const { getByTestId } = render(<Icon name={StringValue} aria-label="Upcoming events" />);
    const icon = getByTestId('DesignSystem-Icon');

    expect(icon).toHaveAttribute('role', 'img');
    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('does not hide an interactive icon', () => {
    const { getByTestId } = render(<Icon name={StringValue} onClick={FunctionValue} />);
    const icon = getByTestId('DesignSystem-Icon');

    expect(icon).toHaveAttribute('role', 'button');
    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('does not hide a focusable icon, since aria-hidden on a focusable element is invalid', () => {
    const { getByTestId } = render(<Icon name={StringValue} tabIndex={0} />);

    expect(getByTestId('DesignSystem-Icon')).not.toHaveAttribute('aria-hidden');
  });

  it('lets a consumer opt out with an explicit aria-hidden={false}', () => {
    const { getByTestId } = render(<Icon name={StringValue} aria-hidden={false} />);

    expect(getByTestId('DesignSystem-Icon')).toHaveAttribute('aria-hidden', 'false');
  });
});
