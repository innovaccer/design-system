import * as React from 'react';
import { Meter } from '@/index';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MeterProps as Props } from '@/index.type';

const value = [50, 75];
const min = [0, 0];
const max = [100, 100];
const stepCount = [5, 10];
const meterSize = ['regular', 'large', 'small'];
const fillColor = ['success', 'warning', 'alert', 'info'];
const emptyColor = ['danger', 'alert'];
const labelSize = ['large', 'regular', 'small'];
const showLabel = [true, false];

describe('Meter Component Snapshot', () => {
  const mapper = {
    value: valueHelper(value, { required: true, iterate: true }),
    min: valueHelper(min, { required: true, iterate: true }),
    max: valueHelper(max, { required: true, iterate: true }),
    stepCount: valueHelper(stepCount, { required: true, iterate: true }),
    meterSize: valueHelper(meterSize, { required: true, iterate: true }),
    fillColor: valueHelper(fillColor, { required: true, iterate: true }),
    emptyColor: valueHelper(emptyColor, { required: true, iterate: true }),
    labelSize: valueHelper(labelSize, { required: true, iterate: true }),
    showLabel: valueHelper(showLabel, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Meter {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Meter Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Meter value={50} min={0} max={100} stepCount={5} meterSize="regular" />);
    const meter = getByTestId('DesignSystem-Meter');
    expect(meter).toBeInTheDocument();
  });

  it('renders correctly with custom props', () => {
    const { getByTestId } = render(
      <Meter
        value={75}
        min={0}
        max={100}
        stepCount={10}
        meterSize="large"
        fillColor="success"
        emptyColor="danger"
        labelSize="large"
        renderLabel={({ filledSteps }) => `Filled: ${filledSteps}`}
      />
    );
    const meter = getByTestId('DesignSystem-Meter');
    expect(meter).toBeInTheDocument();
    const meterLabel = getByTestId('DesignSystem-Meter-Label');
    expect(meterLabel).toBeInTheDocument();
  });

  it('calculates filled steps correctly for range greater than half-filled', () => {
    const { getAllByTestId } = render(<Meter value={51} min={0} max={100} stepCount={5} meterSize="regular" />);
    const filledSteps = getAllByTestId('DesignSystem-Meter-Step').filter((step) =>
      step.classList.contains('Meter-Step--filled')
    );
    expect(filledSteps.length).toBe(3);
  });

  it('calculates filled steps correctly for range less than half-filled', () => {
    const { getAllByTestId } = render(<Meter value={50} min={0} max={100} stepCount={5} meterSize="regular" />);
    const filledSteps = getAllByTestId('DesignSystem-Meter-Step').filter((step) =>
      step.classList.contains('Meter-Step--filled')
    );
    expect(filledSteps.length).toBe(2);
  });

  it('renders the correct number of steps with prop: stepCount', () => {
    const { getAllByTestId } = render(<Meter value={50} stepCount={6} meterSize="regular" />);
    const steps = getAllByTestId('DesignSystem-Meter-Step');
    expect(steps.length).toBe(6);
  });

  it('applies the correct colors to steps', () => {
    const { getAllByTestId } = render(
      <Meter value={50} stepCount={4} meterSize="regular" fillColor="success" emptyColor="danger" />
    );
    const filledSteps = getAllByTestId('DesignSystem-Meter-Step').filter((step) =>
      step.classList.contains('Meter-Step--filled')
    );
    const emptySteps = getAllByTestId('DesignSystem-Meter-Step').filter((step) =>
      step.classList.contains('Meter-Step--empty')
    );
    filledSteps.forEach((step) => {
      expect(step).toHaveClass('Meter-Step--success');
    });
    emptySteps.forEach((step) => {
      expect(step).toHaveStyle('background: danger');
    });
  });

  it('renders the label correctly with prop: renderLabel', () => {
    const { getByTestId } = render(
      <Meter
        value={50}
        min={0}
        max={100}
        stepCount={5}
        meterSize="regular"
        renderLabel={({ filledSteps }) => `Filled: ${filledSteps}`}
      />
    );
    const meterLabel = getByTestId('DesignSystem-Meter-Label');
    expect(meterLabel).toHaveTextContent('Filled: 2');
  });

  it('renders the component with accessible', () => {
    const { getByTestId } = render(<Meter value={50} stepCount={5} meterSize="regular" />);
    const meter = getByTestId('DesignSystem-Meter');
    expect(meter).toHaveAttribute('role', 'meter');
    expect(meter).toHaveAttribute('aria-valuenow', '50');
    expect(meter).toHaveAttribute('aria-valuemin', '0');
    expect(meter).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders the component with correct size', () => {
    const { getByTestId, getAllByTestId } = render(<Meter value={50} stepCount={5} meterSize="large" />);
    const step = getAllByTestId('DesignSystem-Meter-Step')[1];
    const label = getByTestId('DesignSystem-Meter-Label');
    expect(step).toHaveClass('Meter-Step--large');
    expect(label).toHaveClass('Text--large');
  });

  it('renders the component with default size', () => {
    const { getByTestId, getAllByTestId } = render(<Meter value={50} stepCount={5} />);
    const step = getAllByTestId('DesignSystem-Meter-Step')[1];
    const label = getByTestId('DesignSystem-Meter-Label');
    expect(step).toHaveClass('Meter-Step--regular');
    expect(label).toHaveClass('Text--regular');
  });

  it('renders the component with label size', () => {
    const { getByTestId, getAllByTestId } = render(<Meter value={50} stepCount={5} labelSize="large" />);
    const step = getAllByTestId('DesignSystem-Meter-Step')[1];
    const label = getByTestId('DesignSystem-Meter-Label');
    expect(step).toHaveClass('Meter-Step--regular');
    expect(label).toHaveClass('Text--large');
  });

  it('renders the component with showLabel false', () => {
    const { queryByTestId } = render(<Meter value={50} stepCount={5} showLabel={false} />);
    const label = queryByTestId('DesignSystem-Meter-Label');
    expect(label).toBeNull();
  });

  it('renders component with custom className', () => {
    const { getByTestId } = render(<Meter value={50} stepCount={5} className="custom-meter" />);
    const meter = getByTestId('DesignSystem-Meter');
    expect(meter).toHaveClass('custom-meter');
  });

  it('renders component with custom data-test attribute', () => {
    const { getByTestId } = render(<Meter value={50} stepCount={5} data-test="DesignSystem-Meter-Test" />);
    const meter = getByTestId('DesignSystem-Meter-Test');
    expect(meter).toBeInTheDocument();
  });
});
