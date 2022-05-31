import * as React from 'react';
import PageHeader from '../..//PageHeader';
import { Stepper, Button, Text } from '@/index';

export const withStepper = () => {
  const title = 'Page title';

  const stepperData = [
    {
      value: 'step_1',
      label: 'Step 1',
    },
    {
      value: 'step_2',
      label: 'Step 2',
    },
    {
      value: 'step_3',
      label: 'Step 3',
    },
  ];

  const separator = true;

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };

  const options = {
    title,
    separator,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4">
          <Text appearance="subtle">Meta data</Text>
        </span>
        <Button appearance="primary" onClick={onClickHandler}>
          Next
        </Button>
      </div>
    ),
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
};

const customCode = `() => {
  const title = 'Page title';

   const stepperData = [
    {
      value: 'step_1',
      label: 'Step 1',
    },
    {
      value: 'step_2',
      label: 'Step 2'
    },
    {
      value: 'step_3',
      label: 'Step 3',
    }
  ];

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep)
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  }

  const options = {
    title,
    seperator: true,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary" onClick={onClickHandler}>Primary</Button>
      </div>
    )
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 0/Variants/With Stepper',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
