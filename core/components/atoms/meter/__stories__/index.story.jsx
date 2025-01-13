import * as React from 'react';
import { Meter, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const stepCount = 5;

  return (
    <div className="d-flex align-items-center">
      <Text className="mr-5" weight="medium">
        Score:
      </Text>
      <Meter
        value={40}
        max={200}
        stepCount={stepCount}
        renderLabel={({ filledSteps, value, min, max, stepCount, percentage }) => {
          action(
            'filledSteps, value, min, max, stepCount, percentage',
            filledSteps,
            value,
            min,
            max,
            stepCount,
            percentage
          )();
          return `${filledSteps} out of 5`;
        }}
      />
    </div>
  );
};

const customCode = `() => {
  const stepCount = 5;
  return (
    <div className="d-flex align-items-center">
      <Text className="mr-5" weight="medium">Score:</Text>
      <Meter value={40} max={100} stepCount={stepCount} renderLabel={({filledSteps, stepCount }) => \`\${filledSteps} out of \${stepCount}\`} />
    </div>
  );
}`;

export default {
  title: 'Components/Meter/All',
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
