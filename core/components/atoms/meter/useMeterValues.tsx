import { useEffect, useState } from 'react';
import { MeterValueProps } from './Meter';

const calculateFilledSteps = (value: number, stepCount: number, min: number, max: number) => {
  if (value < min) return 0;
  if (value > max) return stepCount;

  const range = max - min;
  const stepRange = range / stepCount;
  const halfStepRange = stepRange / 2;

  let filledSteps = 0;

  for (let step = 1; step <= stepCount; step++) {
    const lowerBound = min + (step - 1) * stepRange;
    const midpoint = lowerBound + halfStepRange;

    if (value > midpoint) {
      filledSteps = step;
    }
  }

  return filledSteps;
};

const calculatePercentage = (value: number, min: number, max: number) => {
  if (value < min) return 0;
  if (value > max) return 100;

  return ((value - min) / (max - min)) * 100;
};

export const useMeterValues = (props: MeterValueProps) => {
  const { value, min, max, stepCount, getFilledSteps } = props;
  const [filledSteps, setFilledSteps] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const steps = getFilledSteps
      ? getFilledSteps({ value, stepCount, min, max })
      : calculateFilledSteps(value, stepCount, min, max);
    const percent = calculatePercentage(value, min, max);

    setFilledSteps(steps);
    setPercentage(percent);
  }, [value, min, max, stepCount, getFilledSteps]);

  return { filledSteps, percentage, value, min, max, stepCount };
};
