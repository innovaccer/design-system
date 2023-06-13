import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Stepper, { StepperProps as Props } from '../Stepper';

const steps = [
  {
    label: 'Step A',
    value: 'Step1',
  },
  {
    label: 'Step B',
    value: 'Step2',
  },
  {
    label: 'Step C',
    value: 'Step3',
  },
  {
    label: 'Step D',
    value: 'Step4',
  },
];

const FunctionValue = jest.fn();

describe('Stepper component', () => {
  const mapper = {
    steps: valueHelper(steps, { required: true }),
    active: valueHelper(1, { required: true }),
    completed: valueHelper(0, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Stepper {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Stepper component', () => {
  it('renders steps', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} />);
    expect(getAllByTestId('DesignSystem-Step')).toHaveLength(4);
  });

  it('renders steps label', () => {
    const labels = ['Step A', 'Step B', 'Step C', 'Step D'];
    const { getAllByTestId } = render(<Stepper steps={steps} />);
    const stepLabels = getAllByTestId('DesignSystem-Step');

    stepLabels.forEach((label, index) => {
      expect(label.textContent).toMatch(labels[index]);
    });
  });

  it('renders default active step', () => {
    const defaultActive = 0;
    const { getAllByTestId } = render(<Stepper steps={steps} />);
    expect(getAllByTestId('DesignSystem-Step')[defaultActive]).toHaveClass('Step--active');
  });
});

describe('Stepper Component with overwrite class', () => {
  it('overwrite Stepper class', () => {
    const { getByTestId } = render(<Stepper steps={steps} className="StepperClass" />);
    expect(getByTestId('DesignSystem-Stepper')).toHaveClass('StepperClass');
  });
});

describe('Stepper component with prop: active', () => {
  const active = 1;

  it('adds Step--active and color-primary-dark class', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={0} />);
    expect(getAllByTestId('DesignSystem-Step')[active]).toHaveClass('Step--active');
  });

  it('renders Text inside active step', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={0} />);
    expect(getAllByTestId('DesignSystem-Text')[active]).toHaveClass('color-primary-dark');
  });

  it('renders Icon inside active step', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={0} />);
    expect(getAllByTestId('DesignSystem-Step--Icon')[active].textContent).toMatch('radio_button_unchecked');
    expect(getAllByTestId('DesignSystem-Step--Icon')[active]).toHaveStyle('color: var(--primary-dark)');
  });

  it('renders stepper with equal active and completed prop', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={active} />);
    expect(getAllByTestId('DesignSystem-Step')[active]).toHaveClass('Step--active');
    expect(getAllByTestId('DesignSystem-Text')[active]).toHaveClass('color-primary-dark');
    expect(getAllByTestId('DesignSystem-Step--Icon')[active].textContent).toMatch('check_circle');
  });
});

describe('Stepper component with prop: completed', () => {
  const completed = 1;

  it('renders Icon inside completed step', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} completed={completed} active={2} />);
    const completedSteps = getAllByTestId('DesignSystem-Step--Icon');

    completedSteps.forEach((step, index) => {
      if (index <= completed) {
        expect(step.textContent).toMatch('check_circle');
        expect(step).toHaveStyle('color: var(--primary-dark)');
      }
    });
  });

  it('renders Text inside completed step', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} completed={completed} active={2} />);
    const completedSteps = getAllByTestId('DesignSystem-Text');

    completedSteps.forEach((step, index) => {
      if (index <= completed) {
        expect(step).toHaveClass('color-inverse');
      }
    });
  });
});

describe('Stepper component with disabled steps', () => {
  const active = 2;
  const completed = 1;

  it('adds Step--disabled class', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={completed} />);
    const disabledSteps = getAllByTestId('DesignSystem-Step');

    disabledSteps.forEach((step, index) => {
      if (Math.max(completed, active) < index) {
        expect(step).toHaveClass('Step--disabled');
      }
    });
  });

  it('renders Icon inside disabled step', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={completed} />);
    const disabledSteps = getAllByTestId('DesignSystem-Step--Icon');

    disabledSteps.forEach((step, index) => {
      if (Math.max(completed, active) < index) {
        expect(step.textContent).toMatch('radio_button_unchecked');
        expect(step).toHaveStyle('color: var(--inverse-lightest)');
      }
    });
  });

  it('renders Text inside disabled step', () => {
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={completed} />);
    const disabledSteps = getAllByTestId('DesignSystem-Text');

    disabledSteps.forEach((step, index) => {
      if (Math.max(completed, active) < index) {
        expect(step).toHaveClass('color-inverse-lightest');
      }
    });
  });
});

describe('Stepper component with onChange callback', () => {
  const active = 2;
  const completed = 1;

  const onChange = jest.fn();

  it('calls onChange callback', () => {
    const stepClicked = 1;
    const { label } = steps[stepClicked];
    const { value } = steps[stepClicked];

    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNode = getAllByTestId('DesignSystem-Step')[stepClicked];
    fireEvent.click(stepNode);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(stepClicked, completed, label, value);
  });

  it('upcoming steps are disabled ', () => {
    const disabledClicked = 3;

    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNode = getAllByTestId('DesignSystem-Step')[disabledClicked];
    fireEvent.click(stepNode);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
