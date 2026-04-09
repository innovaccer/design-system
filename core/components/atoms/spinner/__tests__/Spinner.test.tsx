import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import Spinner, { SpinnerProps as Props } from '../Spinner';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['primary', 'secondary', 'white', 'alert'];
const size = ['xsmall', 'small', 'medium', 'large'];

describe('Spinner component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Spinner {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Spinner component', () => {
  const mapper = {
    size: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Spinner {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Spinner component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Spinner />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Spinner accessibility props', () => {
  it('renders with default aria-label "Loading"', () => {
    const { getByRole } = render(<Spinner appearance="primary" size="medium" />);
    const spinner = getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
    expect(spinner).not.toHaveAttribute('aria-labelledby');
  });

  it('renders with custom aria-label', () => {
    const { getByRole } = render(<Spinner appearance="primary" size="medium" aria-label="Saving data" />);
    const spinner = getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Saving data');
  });

  it('renders with aria-labelledby and omits aria-label', () => {
    const { getByRole } = render(<Spinner appearance="primary" size="medium" aria-labelledby="spinner-label" />);
    const spinner = getByRole('status');
    expect(spinner).toHaveAttribute('aria-labelledby', 'spinner-label');
    expect(spinner).not.toHaveAttribute('aria-label');
  });
});
