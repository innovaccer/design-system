import * as React from 'react';
import classNames from 'classnames';
import Step from './Step';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/stepper.module.css';

export interface StepProp {
  label: string;
  value?: string | number;
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
  onChange?: (active: number, completed: number, label?: string, value?: string | number) => void;

  skipIndexes: number[];
}

export const Stepper = (props: StepperProps) => {
  const { steps, active, completed, onChange, className, skipIndexes } = props;

  const baseProps = extractBaseProps(props);

  const onChangeHandler = (index: number, stepLabel: string, stepValue?: string | number) => {
    if (onChange) onChange(index, completed, stepLabel, stepValue);
  };

  const StepperClass = classNames(
    {
      [styles['Stepper']]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-Stepper" {...baseProps} className={StepperClass}>
      {steps.map((step, index) => {
        const { label, value } = step;

        const isSkipped = skipIndexes.includes(index);
        const activeStep = active === index;
        const completedStep = !isSkipped && completed >= index;
        const disabled = !activeStep && !isSkipped && completed + 1 < index;

        return (
          <Step
            key={index}
            label={label}
            value={value}
            active={activeStep}
            completed={completedStep}
            disabled={disabled}
            onChange={(steplabel, stepvalue) => onChangeHandler(index, steplabel, stepvalue)}
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
