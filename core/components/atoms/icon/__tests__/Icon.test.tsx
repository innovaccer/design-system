import * as React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps as Props } from '../Icon';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const originalWarn = console.warn;

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

describe('Icon accessibility', () => {
  beforeEach(() => {
    console.warn = jest.fn();
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  it('warns when clickable icon has no accessible name', () => {
    render(<Icon name="close" size={16} onClick={jest.fn()} />);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('missing an accessible name'));
  });

  it('does not warn when clickable icon has aria-label', () => {
    render(<Icon name="close" size={16} onClick={jest.fn()} aria-label="Close" />);
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('does not warn when clickable icon has aria-labelledby', () => {
    render(<Icon name="close" size={16} onClick={jest.fn()} aria-labelledby="label-id" />);
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('does not warn when icon is not clickable', () => {
    render(<Icon name="close" size={16} />);
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('passes aria-describedby to the rendered element', () => {
    const { container } = render(
      <Icon name="info" size={16} onClick={jest.fn()} aria-label="Info" aria-describedby="desc-id" />
    );
    expect(container.querySelector('i')).toHaveAttribute('aria-describedby', 'desc-id');
  });

  it('defaults to aria-hidden="true" for decorative non-interactive icons', () => {
    const { container } = render(<Icon name="place" size={16} />);
    expect(container.querySelector('i')).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not override explicit aria-hidden="false"', () => {
    const { container } = render(<Icon name="place" size={16} aria-hidden={false} />);
    expect(container.querySelector('i')).toHaveAttribute('aria-hidden', 'false');
  });

  it('does not add aria-hidden when icon has aria-label', () => {
    const { container } = render(<Icon name="place" size={16} aria-label="Location" />);
    expect(container.querySelector('i')).not.toHaveAttribute('aria-hidden');
  });

  it('does not add aria-hidden for interactive icons', () => {
    const { container } = render(<Icon name="close" size={16} onClick={jest.fn()} aria-label="Close" />);
    expect(container.querySelector('i')).not.toHaveAttribute('aria-hidden');
  });
});
