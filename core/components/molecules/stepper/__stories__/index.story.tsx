import * as React from 'react';
import Stepper from '../Stepper';
import { action } from '@storybook/addon-actions';
import { steps } from './Steps';

export const all = () => {
  const [active, setActive] = React.useState(2);

  const onChange = (index: number) => {
    setActive(index);
    return action(`Active Index: ${index}`)();
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      completed={1}
      onChange={onChange}
    />
  );
};

const customCode = `() => {
  const [active, setActive] = React.useState(2);

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
      completed={1}
      onChange={onChange}
    />
  );
}`;

export default {
  title: 'Components/Stepper/All',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
