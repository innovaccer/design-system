import * as React from 'react';
import Stepper from '../Stepper';
import { Button } from '@/components/atoms/button';
import { action } from '@storybook/addon-actions';
import { steps } from './Steps';

export const stepperWithTrigger = () => {
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(active - 1);

  const onChange = (activeStep: number) => {
    setActive(activeStep);
    return action(`Active Index: ${activeStep}`)();
  };

  const onClickHandler = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    if (active > completed) setCompleted(active);
    setActive(updatedActive);
    return action(`Active Index: ${updatedActive}`)();
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-end py-4 px-4"
      style={{ height: '200px', background: 'var(--secondary-lightest)' }}
    >
      <div className="d-flex justify-content-center py-5 bg-light w-100">
        <Stepper
          steps={steps}
          active={active}
          completed={completed}
          onChange={onChange}
        />
      </div>
      <br />
      <div className="w-25 d-flex justify-content-end">
        <Button onClick={onClickHandler} appearance="primary">Next</Button>
      </div>
    </div>
  );
};

const customCode = `() => {
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

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(active - 1);

  const onChange = (index) => {
    setActive(index);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-end py-4 px-4"
      style={{ height: '200px', background: 'var(--secondary-lightest)' }}
    >
      <div className="d-flex justify-content-center py-5 bg-light w-100">
        <Stepper
          steps={steps}
          active={active}
          completed={completed}
          onChange={onChange}
        />
      </div>
      <br />
      <div className="w-25 d-flex justify-content-end">
        <Button onClick={onClickHandler} appearance="primary">Next</Button>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
