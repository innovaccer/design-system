import * as React from 'react';
import { PageHeader, Stepper, Button } from '@/index';

export const withStepper = () => {
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

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const options = {
    title,
    separator,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />,
    actions: <Button>Finish later</Button>,
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

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep)
  };

  const options = {
    title,
    separator: false,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />,
    actions: <Button>Finish later</Button>
  };

  return (
    <div className="w-100 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 0/With Stepper',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
