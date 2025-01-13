import React from 'react';
import { Meter } from '@/index';

export const customStepLogic = () => {
  const getFilledSteps = ({ value, stepCount, min, max }) => {
    return Math.round(((value - min) / (max - min)) * stepCount);
  };

  return <Meter value={50} getFilledSteps={getFilledSteps} />;
};

const customCode = `() => {
  const getFilledSteps = ({ value, stepCount, min, max }) => {
    return Math.round(((value - min) / (max - min)) * stepCount);
  };

  return <Meter value={50} getFilledSteps={getFilledSteps} />;
}`;

export default {
  title: 'Components/Meter/Custom Step Logic',
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
