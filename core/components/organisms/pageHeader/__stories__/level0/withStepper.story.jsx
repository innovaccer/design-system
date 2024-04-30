import * as React from 'react';
import { PageHeader, Stepper, Button, Text } from '@/index';

export const level0WithStepper = () => {
  const title = 'Annual Wellness Visit';

  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message',
    },
    {
      value: 'step_3',
      label: 'Schedule',
    },
  ];

  const separator = false;

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
    <div className="w-100 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
};

const customCode = `() => {
  const title = 'Annual Wellness Visit';

  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
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
    separator: false,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary" onClick={onClickHandler}>Next</Button>
      </div>
    )
  };

  return (
    <div className="w-100 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 0/Level 0 With Stepper',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
