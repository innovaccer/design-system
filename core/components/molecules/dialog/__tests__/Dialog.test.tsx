import * as React from 'react';
import { render } from '@testing-library/react';
import Dialog, { DialogProps as Props } from '../Dialog';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const FunctionValue = jest.fn();
const dimension = ['small', 'medium', 'large'];
const appearance = ['basic', 'primary', 'success', 'alert', 'transparent'];
const StringValue = 'Sample String';

describe('Dialog component', () => {
  const mapper = {
    onClose: valueHelper(FunctionValue, { required: true }),
    open: valueHelper(true, { required: true }),
    heading: valueHelper(StringValue, { required: true }),
    icon: valueHelper(StringValue, { required: true }),
    title: valueHelper(StringValue, { required: true }),
    description: valueHelper(StringValue, { required: true }),
    closeOnBackdrop: valueHelper(FunctionValue, { required: true }),
    primaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonLabel: valueHelper(StringValue, { required: true }),
    primaryButtonCallback: valueHelper(FunctionValue, { required: true }),
    primaryButtonAppearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dialog {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dialog component', () => {
  const mapper = {
    open: valueHelper(true, { required: true }),
    icon: valueHelper(StringValue, { required: true }),
    title: valueHelper(StringValue, { required: true }),
    heading: valueHelper(StringValue, { required: true }),
    onClose: valueHelper(FunctionValue, { required: true }),
    description: valueHelper(StringValue, { required: true }),
    primaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonCallback: valueHelper(FunctionValue, { required: true }),
    secondaryButtonAppearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dialog {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dialog component', () => {
  const mapper = {
    open: valueHelper(true, { required: true }),
    icon: valueHelper(StringValue, { required: true }),
    title: valueHelper(StringValue, { required: true }),
    heading: valueHelper(StringValue, { required: true }),
    onClose: valueHelper(FunctionValue, { required: true }),
    description: valueHelper(StringValue, { required: true }),
    primaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonLabel: valueHelper(StringValue, { required: true }),
    dimension: valueHelper(dimension, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Dialog {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dialog component with props', () => {
  it('renders Modal', () => {
    const { getByTestId } = render(
      <Dialog
        open={true}
        heading={StringValue}
        primaryButtonLabel={StringValue}
        secondaryButtonLabel={StringValue}
        primaryButtonCallback={FunctionValue}
        secondaryButtonCallback={FunctionValue}
        onClose={FunctionValue}
      />
    );

    expect(getByTestId('DesignSystem-Dialog')).toHaveClass('Modal');
  });

  it('renders default dimension', () => {
    const { getByTestId } = render(
      <Dialog
        open={true}
        heading={StringValue}
        primaryButtonLabel={StringValue}
        secondaryButtonLabel={StringValue}
        primaryButtonCallback={FunctionValue}
        secondaryButtonCallback={FunctionValue}
        onClose={FunctionValue}
      />
    );

    expect(getByTestId('DesignSystem-Dialog')).toHaveClass('Col Col--3 Col--xs-10');
  });

  it('renders default primary button appearance', () => {
    const { getByTestId } = render(
      <Dialog
        open={true}
        heading={StringValue}
        primaryButtonLabel={StringValue}
        secondaryButtonLabel={StringValue}
        primaryButtonCallback={FunctionValue}
        secondaryButtonCallback={FunctionValue}
        onClose={FunctionValue}
      />
    );

    expect(getByTestId('DesignSystem-Dialog--PrimaryButton')).toHaveClass('Button--primary');
  });

  it('renders default secondary button appearance', () => {
    const { getByTestId } = render(
      <Dialog
        open={true}
        heading={StringValue}
        primaryButtonLabel={StringValue}
        secondaryButtonLabel={StringValue}
        primaryButtonCallback={FunctionValue}
        secondaryButtonCallback={FunctionValue}
        onClose={FunctionValue}
      />
    );

    expect(getByTestId('DesignSystem-Dialog--SecondaryButton')).toHaveClass('Button--basic');
  });
});

describe('Dialog Component with overwrite class', () => {
  const className = 'DS-Dialog';

  it('overwrite Dialog class', () => {
    const { getByTestId } = render(
      <Dialog
        open={true}
        heading={StringValue}
        primaryButtonLabel={StringValue}
        secondaryButtonLabel={StringValue}
        primaryButtonCallback={FunctionValue}
        secondaryButtonCallback={FunctionValue}
        onClose={FunctionValue}
        className={className}
      />
    );

    expect(getByTestId('DesignSystem-Dialog')).toHaveClass(className);
  });
});
