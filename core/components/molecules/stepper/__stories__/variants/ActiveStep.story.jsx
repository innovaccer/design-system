import * as React from 'react';
import { Stepper } from '@/index';
import { action } from '@/utils/action';
import { steps } from '../Steps';

export const activeStep = () => {
  const [active, setActive] = React.useState(0);

  const onChange = (index) => {
    setActive(index);
    return action(`Active Index: ${index}`)();
  };

  return <Stepper steps={steps} active={active} onChange={onChange} />;
};

const customCode = `() => {
  const [active, setActive] = React.useState(0);

  const steps = [
    {
      label: 'Step',
      value: 'Step1'
    },
    {
      label: 'Step',
      value: 'Step2'
    },
    {
      label: 'Step',
      value: 'Step3'
    },
    {
      label: 'Step',
      value: 'Step4'
    }
  ];

  const onChange = (index) => {
    setActive(index);
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      onChange={onChange}
    />
  );
}`;

export default {
  title: 'Components/Stepper/Variants/Active Step',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
