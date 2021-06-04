import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { steps } from '../Steps';
import { Stepper, Button } from '@/index';

export const stepperWithSkip = () => {
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(active - 1);
  const [skipIndexes, setSkipIndexes] = React.useState<number[]>([]);
  const requiredSteps = [0];

  const onChange = (activeStep: number) => {
    setActive(activeStep);
    return action(`Active Index: ${activeStep}`)();
  };

  const onClickHandler = () => {
    if (skipIndexes.includes(active)) {
      const updatedSkip = [...skipIndexes];
      const index = updatedSkip.findIndex(skippedIndex => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndexes(updatedSkip);
      // console.log(skipIndexes);
    }
    const updatedActive = active > completed ? active + 1 : completed + 1;
    if (active > completed) setCompleted(active);
    setActive(updatedActive);
    return action(`Active Index: ${updatedActive}`)();
  };

  const onSkipHandler = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    setActive(updatedActive);
    if (!skipIndexes.includes(active)) {
      setSkipIndexes([...skipIndexes, active]);
    }
    return action(`Active Index: ${updatedActive}`)();
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-end py-4 px-4 bg-secondary-lightest"
      style={{ height: '200px' }}
    >
      <div className="d-flex justify-content-center py-5 bg-light w-100">
        <Stepper
          steps={steps}
          active={active}
          completed={completed}
          onChange={onChange}
          skipIndexes={skipIndexes}
        />
      </div>
      <br />
      <div className="w-25 d-flex justify-content-end">
        <Button onClick={onSkipHandler} disabled={requiredSteps.includes(active)} className="mr-4">Skip</Button>
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
  const [skipIndexes, setSkipIndexes] = React.useState([]);
  const requiredSteps = [0];

  const onChange = (activeStep) => {
    setActive(activeStep);
  };

  const onClickHandler = () => {
    if (skipIndexes.includes(active)) {
      const updatedSkip = [...skipIndexes];
      const index = updatedSkip.findIndex(skippedIndex => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndexes(updatedSkip);
    }
    const updatedActive = active > completed ? active + 1 : completed + 1;
    if (active > completed) setCompleted(active);
    setActive(updatedActive);
  };

  const onSkipHandler = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    setActive(updatedActive);
    if (!skipIndexes.includes(active)) {
      setSkipIndexes([...skipIndexes, active]);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-end py-4 px-4 bg-secondary-lightest"
      style={{ height: '200px' }}
    >
      <div className="d-flex justify-content-center py-5 bg-light w-100">
        <Stepper
          steps={steps}
          active={active}
          completed={completed}
          onChange={onChange}
          skipIndexes={skipIndexes}
        />
      </div>
      <br />
      <div className="w-25 d-flex justify-content-end">
        <Button onClick={onSkipHandler} disabled={requiredSteps.includes(active)} className="mr-4">Skip</Button>
        <Button onClick={onClickHandler} appearance="primary">Next</Button>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Stepper/Variants/Stepper With Skip',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
