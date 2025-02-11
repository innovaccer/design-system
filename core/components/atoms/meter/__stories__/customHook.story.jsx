import * as React from 'react';
import { Meter, Text } from '@/index';

// CSF format story
export const customLabel = () => {
  const value = 100;
  const min = 50;
  const max = 150;
  const stepCount = 5;

  const { filledSteps, percentage } = Meter.useMeterValues({ value, min, max, stepCount });

  return (
    <div className="d-flex flex-column">
      <Meter value={value} stepCount={stepCount} min={min} max={max} showLabel={false} />
      <Text size="small" appearance="subtle" className="mt-6">
        {filledSteps} batches completed ({percentage}%)
      </Text>
    </div>
  );
};

const customCode = `() => {
  const value = 100;
  const min = 50;
  const max = 150;
  const stepCount = 5;

  const { filledSteps, percentage } = Meter.useMeterValues({ value, min, max, stepCount });

  return (
    <div className="d-flex flex-column">
      <Meter value={value} stepCount={stepCount} min={min} max={max} showLabel={false} />
      <Text size="small" appearance="subtle" className="mt-6">
        {filledSteps} batches completed ({percentage}%)
      </Text>
    </div>
  );
}`;

export default {
  title: 'Components/Meter/Custom Label',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
        customCode,
      },
    },
  },
};
