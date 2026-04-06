import * as React from 'react';
import classNames from 'classnames';
import Step from './Step';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/stepper.module.css';

const ARROW_NAV_KEYS = ['ArrowLeft', 'ArrowRight', 'Home', 'End'] as const;

export interface StepProp {
  label: string;
  value?: React.ReactText;
}

export interface StepperProps extends BaseProps {
  /**
   * Set the active step (zero based index).
   *
   * Set to -1 to disable all the steps.
   */
  active: number;
  /**
   * Set the completed steps (zero based index).
   *
   * **Number of completed steps <= completed index**
   */
  completed: number;
  /**
   * <pre className="docPage-codeBlock">
   * StepProp {
   *  label: string;
   *  value?: React.ReactText;
   * }
   * </pre>
   *
   * | Name | Description |
   * | --- | --- |
   * | label | Describes Label of the step |
   * | value | Value of option |
   *
   */
  steps: StepProp[];
  /**
   * Callback function called when user clicks on a non-disabled step.
   */
  onChange?: (active: number, completed: number, label?: string, value?: React.ReactText) => void;

  skipIndexes: number[];
}

export const Stepper = (props: StepperProps) => {
  const { steps, active, completed, onChange, className, skipIndexes } = props;

  const baseProps = extractBaseProps(props);
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const onChangeHandler = (index: number, stepLabel: string, stepValue?: React.ReactText) => {
    if (onChange) onChange(index, completed, stepLabel, stepValue);
  };

  const getEnabledIndexes = () =>
    steps
      .map((_, idx) => {
        const isSkipped = skipIndexes.includes(idx);
        const activeStep = active === idx;
        const disabled = !activeStep && !isSkipped && completed + 1 < idx;
        return { idx, disabled };
      })
      .filter(({ disabled }) => !disabled)
      .map(({ idx }) => idx);

  const handleStepKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (!ARROW_NAV_KEYS.includes(e.key as (typeof ARROW_NAV_KEYS)[number])) return;
    e.preventDefault();

    const enabledIndexes = getEnabledIndexes();
    const pos = enabledIndexes.indexOf(index);
    if (pos === -1) return;

    if (e.key === 'ArrowRight' && pos < enabledIndexes.length - 1) {
      stepRefs.current[enabledIndexes[pos + 1]]?.focus();
    } else if (e.key === 'ArrowLeft' && pos > 0) {
      stepRefs.current[enabledIndexes[pos - 1]]?.focus();
    } else if (e.key === 'Home') {
      stepRefs.current[enabledIndexes[0]]?.focus();
    } else if (e.key === 'End') {
      stepRefs.current[enabledIndexes[enabledIndexes.length - 1]]?.focus();
    }
  };

  const StepperClass = classNames(
    {
      [styles['Stepper']]: true,
    },
    className
  );

  const enabledIndexes = getEnabledIndexes();
  const hasActiveStep = active >= 0 && active < steps.length;

  return (
    <div data-test="DesignSystem-Stepper" {...baseProps} className={StepperClass} role="group" aria-label="Steps">
      {steps.map((step, index) => {
        const { label, value } = step;

        const isSkipped = skipIndexes.includes(index);
        const activeStep = active === index;
        const completedStep = !isSkipped && completed >= index;
        const disabled = !activeStep && !isSkipped && completed + 1 < index;

        // For roving tabindex: active step gets tabIndex={0}, or first enabled if active is invalid/out-of-range
        const isTabStop = activeStep || (!hasActiveStep && index === enabledIndexes[0]);

        return (
          <Step
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            label={label}
            value={value}
            active={activeStep}
            completed={completedStep}
            disabled={disabled}
            isTabStop={isTabStop}
            stepIndex={index}
            onChange={(steplabel, stepvalue) => onChangeHandler(index, steplabel, stepvalue)}
            onKeyDown={(e) => handleStepKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

Stepper.displayName = 'Stepper';
Stepper.defaultProps = {
  completed: -1,
  active: 0,
  skipIndexes: [],
};

export default Stepper;
