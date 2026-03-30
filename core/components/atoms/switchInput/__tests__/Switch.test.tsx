import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Switch, { SwitchProps as Props } from '../Switch';

export const size = ['tiny', 'regular'];
const BooleanValue = [true, false];

describe('Switch component', () => {
  const mapper: Record<string, any> = {
    checked: valueHelper(true, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    'aria-label': valueHelper('Test Switch', { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Switch {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Switch component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { iterate: true }),
    checked: valueHelper(true, { required: true }),
    'aria-label': valueHelper('Test Switch', { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Switch {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Switch accessibility', () => {
  it('should warn when neither aria-label nor aria-labelledby is provided', () => {
    const consoleWarn = jest.spyOn(console, 'warn').mockImplementation();
    render(<Switch checked={true} />);
    expect(consoleWarn).toHaveBeenCalledWith(
      'Switch: An `aria-label` or `aria-labelledby` prop is required for accessibility.'
    );
    consoleWarn.mockRestore();
  });

  it('should not warn when aria-label is provided', () => {
    const consoleWarn = jest.spyOn(console, 'warn').mockImplementation();
    render(<Switch checked={true} aria-label="Toggle feature" />);
    expect(consoleWarn).not.toHaveBeenCalled();
    consoleWarn.mockRestore();
  });

  it('should not warn when aria-labelledby is provided', () => {
    const consoleWarn = jest.spyOn(console, 'warn').mockImplementation();
    render(<Switch checked={true} aria-labelledby="switch-label" />);
    expect(consoleWarn).not.toHaveBeenCalled();
    consoleWarn.mockRestore();
  });

  it('should have role="switch" on the input', () => {
    const { getByRole } = render(<Switch aria-label="Toggle" checked={true} />);
    expect(getByRole('switch')).toBeInTheDocument();
  });

  it('should set aria-checked matching the checked state', () => {
    const { getByRole } = render(<Switch aria-label="Toggle" checked={true} />);
    expect(getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });
});
