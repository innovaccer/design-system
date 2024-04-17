import * as React from 'react';
import { action } from '@/utils/action';
import { Stepper, Button } from '@/index';

export const stepperWithSkip = () => {
  const steps = [
    {
      label: 'Step 1',
      value: 'Step1',
    },
    {
      label: 'Step 2',
      value: 'Step2',
    },
    {
      label: 'Step 3',
      value: 'Step3',
    },
  ];
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);
  const maxSteps = steps.length;
  const [skipIndices, setSkipIndices] = React.useState([]);

  const onChange = (activeStep) => {
    return action(`Active Index: ${activeStep}`)();
  };

  const onNextHandler = () => {
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active);
    setActive(active + 1);
  };

  const onSkipHandler = () => {
    if (!skipIndices.includes(active)) {
      setSkipIndices([...skipIndices, active]);
    }
    setActive(active + 1);
  };

  const onPreviousHandler = () => {
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active - 1);
    setActive(active - 1);
  };

  const resetStepper = () => {
    setActive(0);
    setCompleted(-1);
    setSkipIndices([]);
  };

  return (
    <div className="d-flex flex-column py-4 px-6 bg-secondary-lightest">
      <div className="d-flex justify-content-center py-5 w-100">
        <Stepper steps={steps} active={active} completed={completed} onChange={onChange} skipIndexes={skipIndices} />
      </div>
      <div className="w-100 d-flex mt-12 justify-content-between">
        {active === maxSteps ? (
          <div className="w-100 d-flex justify-content-center">
            <Button onClick={resetStepper}>Reset</Button>
          </div>
        ) : (
          <div className="my-4 w-100 d-flex justify-content-between">
            <Button onClick={onPreviousHandler} disabled={active === 0}>
              Previous
            </Button>
            <div className="d-flex flex-row">
              <Button className="mr-4" onClick={onSkipHandler}>
                {active < maxSteps - 1 ? 'Skip' : 'Skip and Finish'}
              </Button>
              <Button onClick={onNextHandler} appearance="primary">
                {active < maxSteps - 1 ? 'Next' : 'Finish'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const customCode = `() => {
  const steps = [
    {
      label: 'Step 1',
      value: 'Step1',
    },
    {
      label: 'Step 2',
      value: 'Step2',
    },
    {
      label: 'Step 3',
      value: 'Step3',
    },
  ];
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);
  const maxSteps = steps.length;
  const [skipIndices, setSkipIndices] = React.useState([]);

  const onChange = (activeStep) => {
    return action(\`Active Index: \${activeStep}\`)();
  };

  const onNextHandler = () => {
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active);
    setActive(active + 1);
  };

  const onSkipHandler = () => {
    if (!skipIndices.includes(active)) {
      setSkipIndices([...skipIndices, active]);
    }
    setActive(active + 1);
  };

  const onPreviousHandler = () => {
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active - 1);
    setActive(active - 1);
  };

  const resetStepper = () => {
    setActive(0);
    setCompleted(-1);
    setSkipIndices([]);
  };

  return (
    <div className="d-flex flex-column py-4 px-6 bg-secondary-lightest">
      <div className="d-flex justify-content-center py-5 w-100">
        <Stepper steps={steps} active={active} completed={completed} onChange={onChange} skipIndexes={skipIndices} />
      </div>
      <div className="w-100 d-flex mt-12 justify-content-between">
        {active === maxSteps ? (
          <div className="w-100 d-flex justify-content-center">
            <Button onClick={resetStepper}>Reset</Button>
          </div>
        ) : (
          <div className="my-4 w-100 d-flex justify-content-between">
            <Button onClick={onPreviousHandler} disabled={active === 0}>
              Previous
            </Button>
            <div className="d-flex flex-row">
              <Button className="mr-4" onClick={onSkipHandler}>
                {active < maxSteps - 1 ? 'Skip' : 'Skip and Finish'}
              </Button>
              <Button onClick={onNextHandler} appearance="primary">
                {active < maxSteps - 1 ? 'Next' : 'Finish'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Stepper/Variants/Stepper With Skip',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
