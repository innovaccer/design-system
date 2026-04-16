import * as React from 'react';
import { render, fireEvent, createEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

describe('Stepper component keyboard accessibility', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it('activates step on Space key when step is clickable', () => {
    const active = 2;
    const completed = 1;
    const stepIndex = 1;
    const { label, value } = steps[stepIndex];

    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNode = getAllByTestId('DesignSystem-Step')[stepIndex];
    fireEvent.keyDown(stepNode, { key: ' ' });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(stepIndex, completed, label, value);
  });

  it('activates step on Enter key when step is clickable', () => {
    const active = 2;
    const completed = 1;
    const stepIndex = 0;

    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNode = getAllByTestId('DesignSystem-Step')[stepIndex];
    fireEvent.keyDown(stepNode, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('ArrowRight moves focus to next enabled step', () => {
    const active = 1;
    const completed = 0;
    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNodes = getAllByTestId('DesignSystem-Step');
    stepNodes[0].focus();
    fireEvent.keyDown(stepNodes[0], { key: 'ArrowRight' });

    expect(document.activeElement).toBe(stepNodes[1]);
  });

  it('ArrowLeft moves focus to previous enabled step', () => {
    const active = 2;
    const completed = 1;
    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNodes = getAllByTestId('DesignSystem-Step');
    stepNodes[2].focus();
    fireEvent.keyDown(stepNodes[2], { key: 'ArrowLeft' });

    expect(document.activeElement).toBe(stepNodes[1]);
  });

  it('Home moves focus to first enabled step', () => {
    const active = 2;
    const completed = 1;
    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNodes = getAllByTestId('DesignSystem-Step');
    stepNodes[2].focus();
    fireEvent.keyDown(stepNodes[2], { key: 'Home' });

    expect(document.activeElement).toBe(stepNodes[0]);
  });

  it('End moves focus to last enabled step', () => {
    const active = 2;
    const completed = 1;
    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNodes = getAllByTestId('DesignSystem-Step');
    stepNodes[0].focus();
    fireEvent.keyDown(stepNodes[0], { key: 'End' });

    expect(document.activeElement).toBe(stepNodes[2]);
  });

  it('implements roving tabindex pattern', () => {
    const active = 2;
    const completed = 1;
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={completed} />);
    const stepNodes = getAllByTestId('DesignSystem-Step');
    // Only the active step (step 2) should have tabIndex 0
    // Steps 0, 1, 2 are enabled; step 3 is disabled
    expect(stepNodes[0]).toHaveAttribute('tabIndex', '-1');
    expect(stepNodes[1]).toHaveAttribute('tabIndex', '-1');
    expect(stepNodes[2]).toHaveAttribute('tabIndex', '0');
  });

  it('disabled steps have tabIndex -1', () => {
    const active = 0;
    const completed = 0;
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={completed} />);
    const stepNodes = getAllByTestId('DesignSystem-Step');
    // Steps 2 and 3 are disabled (completed+1 < index)
    expect(stepNodes[2]).toHaveAttribute('tabIndex', '-1');
    expect(stepNodes[3]).toHaveAttribute('tabIndex', '-1');
  });

  it('each step has an aria-label with step number and label', () => {
    const active = 1;
    const completed = 0;
    const { getAllByTestId } = render(<Stepper steps={steps} active={active} completed={completed} />);
    const stepNodes = getAllByTestId('DesignSystem-Step');

    expect(stepNodes[0]).toHaveAttribute('aria-label', 'Step 1: Step A, completed');
    expect(stepNodes[1]).toHaveAttribute('aria-label', 'Step 2: Step B, current');
    expect(stepNodes[2]).toHaveAttribute('aria-label', 'Step 3: Step C');
    expect(stepNodes[3]).toHaveAttribute('aria-label', 'Step 4: Step D');
  });

  it('generates fallback aria-label when label is empty', () => {
    const emptySteps = [
      { label: '', value: 'v1' },
      { label: 'Step B', value: 'v2' },
    ];
    const { getAllByTestId } = render(<Stepper steps={emptySteps} active={0} completed={-1} />);
    const stepNodes = getAllByTestId('DesignSystem-Step');

    expect(stepNodes[0]).toHaveAttribute('aria-label', 'Step 1: Step 1, current');
    expect(stepNodes[1]).toHaveAttribute('aria-label', 'Step 2: Step B');
  });

  it('calls preventDefault on ArrowLeft and ArrowRight at boundaries to prevent scroll', () => {
    const active = 0;
    const completed = 3;
    const { getAllByTestId } = render(
      <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
    );

    const stepNodes = getAllByTestId('DesignSystem-Step');

    const eventLeft = createEvent.keyDown(stepNodes[0], { key: 'ArrowLeft' });
    eventLeft.preventDefault = jest.fn();
    fireEvent(stepNodes[0], eventLeft);
    expect(eventLeft.preventDefault).toHaveBeenCalledTimes(1);

    const eventRight = createEvent.keyDown(stepNodes[3], { key: 'ArrowRight' });
    eventRight.preventDefault = jest.fn();
    fireEvent(stepNodes[3], eventRight);
    expect(eventRight.preventDefault).toHaveBeenCalledTimes(1);
  });
});

describe('Stepper component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(
      <Stepper
        steps={[
          { label: 'Step A', value: 'Step1' },
          { label: 'Step B', value: 'Step2' },
        ]}
        active={0}
        completed={0}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
