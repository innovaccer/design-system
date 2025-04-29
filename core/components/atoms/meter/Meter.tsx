import * as React from 'react';
import { Step, StepColor, StepType } from './Step';
import { BaseProps } from '@/utils/types';
import { Text } from '@/index';
import styles from '@css/components/meter.module.css';
import classNames from 'classnames';
import { useMeterValues } from './useMeterValues';

export type MeterLabelSize = 'small' | 'regular' | 'large';
export type MeterSize = 'small' | 'regular' | 'large';

export type RenderLabelProps = {
  filledSteps: number;
  value: number;
  min: number;
  max: number;
  stepCount: number;
  percentage: number;
};

export type FillStepProps = {
  value: number;
  stepCount: number;
  min: number;
  max: number;
};

export type MeterValueProps = {
  value: number;
  min: number;
  max: number;
  stepCount: number;
  getFilledSteps?: (props: FillStepProps) => number;
};

export interface MeterProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Value of the `Meter`
   */
  value: number;
  /**
   * Minimum range of the `Meter`
   */
  min: number;
  /**
   * Maximum range of the `Meter`
   */
  max: number;
  /**
   * Total number of steps in the `Meter`
   */
  stepCount: number;
  /**
   * Color of the empty `Step`
   */
  emptyColor?: string;
  /**
   * Color of the filled `Step`
   */
  fillColor?: StepColor | StepColor[];
  /**
   * Size of the Meter
   */
  meterSize: MeterSize;
  /**
   * Size of the Meter `Label`
   */
  labelSize?: MeterLabelSize;
  /**
   * Render prop to display Meter Label
   *
   * <pre className="DocPage-codeBlock">
   * RenderLabelProps: {
   *   filledSteps: number;
   *   value: number;
   *   min: number;
   *   max: number;
   *   stepCount: number;
   *   percentage: number;
   * }
   * </pre>
   *
   * It receives an object with the following properties:
   * `filledSteps`: Number of filled steps in the Meter  <br />
   * `value`: Value of the Meter <br />
   * `min`: Minimum range of the Meter <br />
   * `max`: Maximum range of the Meter <br />
   * `stepCount`: Total number of steps in the Meter <br />
   * `percentage`: Percentage of the Meter filled <br />
   *
   */
  renderLabel?: (props: RenderLabelProps) => string | number;
  /**
   * Determines whether to show default value label in percentage
   */
  showLabel?: boolean;
  /**
   * Custom function to calculate the number of filled steps
   * @param FillStepProps
   * @returns number
   * @default calculateFilledSteps
   *
   * <pre className="DocPage-codeBlock">
   * FillStepProps: {
   *  value: number;
   *  stepCount: number;
   *  min: number;
   *  max: number;
   * }
   * </pre>
   */
  getFilledSteps?: (props: FillStepProps) => number;
  /**
   * Aria label for the Meter
   */
  ariaLabel?: string;
}

/**
 * **Note:**
 * - Meter component is using `> half step range` logic to calculate filled steps
 * - Use [custom hook `useMeterValues`](https://mds.innovaccer.com/?path=/docs/components-meter-custom-label--custom-label) to get number of filled steps and percentage internally calculated by the component
 * - To use a [custom logic](https://mds.innovaccer.com/?path=/docs/components-meter-custom-step-logic--custom-step-logic) to calculate filled steps, you can pass it as `getFilledSteps` prop
 * - To render [custom label](https://mds.innovaccer.com/?path=/docs/components-meter-all--all), you can pass a render prop `renderLabel`
 */

export const Meter = (props: MeterProps) => {
  const {
    value,
    min,
    max,
    stepCount,
    emptyColor,
    fillColor,
    getFilledSteps,
    meterSize,
    className,
    renderLabel,
    labelSize,
    ariaLabel,
    showLabel,
    ...rest
  } = props;

  const { filledSteps, percentage } = useMeterValues({ value, min, max, stepCount, getFilledSteps });

  const steps = Array.from({ length: stepCount }, (_, index) => {
    const type = index < filledSteps ? 'filled' : 'empty';
    const stepColor = Array.isArray(fillColor) ? fillColor[index % fillColor.length] : fillColor;

    const stepClassName = classNames({
      ['mr-2']: index < stepCount - 1,
    });

    const stepProps = {
      stepSize: meterSize,
      emptyColor,
      type: type as StepType,
      fillColor: stepColor,
      className: stepClassName,
    };

    return <Step key={index} {...stepProps} />;
  });

  const renderLabelProps = {
    filledSteps,
    value,
    min,
    max,
    stepCount,
    percentage,
  };

  const label = renderLabel ? renderLabel(renderLabelProps) : `${percentage}%`;

  return (
    <div
      data-test="DesignSystem-Meter"
      className={classNames(styles.Meter, className)}
      role="meter"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label={ariaLabel}
      {...rest}
    >
      {steps}
      {(showLabel || renderLabel) && (
        <Text className="ml-4" size={labelSize || meterSize} data-test="DesignSystem-Meter-Label">
          {label}
        </Text>
      )}
    </div>
  );
};

Meter.displayName = 'Meter';
Meter.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  stepCount: 5,
  fillColor: 'info',
  meterSize: 'regular',
  type: 'empty',
  showLabel: true,
  emptyColor: 'var(--secondary-light)',
};

Meter.useMeterValues = useMeterValues;

export default Meter;
