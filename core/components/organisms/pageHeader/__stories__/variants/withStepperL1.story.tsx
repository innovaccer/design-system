import * as React from 'react';
import PageHeader from '../../PageHeader';
import { select, text, boolean } from '@storybook/addon-knobs';
import { Stepper, Button, Breadcrumbs, Badge, StatusHint, MetaList } from '@/index';
import { action } from '@/utils/action';

export const withStepper = () => {
  const navigationPosition = select('navigationPosition', ['center', 'bottom'], 'center');
  const separator = boolean('separator', true);
  const title = text('title', 'Page title');

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

  const breadcrumbData = [
    {
      label: 'Level 0',
      link: '/level0',
    },
    {
      label: 'Level 1',
      link: '/level1',
    },
  ];

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
    navigationPosition,
    title,
    separator,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <Button appearance="primary" onClick={onClickHandler}>
          Next
        </Button>
      </div>
    ),
    breadcrumbs: <Breadcrumbs list={breadcrumbData} onClick={(link) => action(`on-click: ${link}`)} />,
    badge: <Badge appearance="secondary">Badge</Badge>,
    status: <StatusHint appearance="alert">Alert</StatusHint>,
    meta: <MetaList list={[{ label: 'Meta data' }]} seperator={true} />,
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
};

const customCode = `() => {
  const navigationPosition = 'center';

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

  const breadcrumbData = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
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
  };

   const options = {
    navigationPosition,
    title,
    seperator: true,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <Button appearance="primary" onClick={onClickHandler}>Next</Button>
      </div>
    ),
    breadcrumbs: (
      <Breadcrumbs
        list={breadcrumbData}
      />
    ),
    badge: (
      <Badge appearance="secondary">Badge</Badge>
    ),
    status: (
      <StatusHint appearance="alert">Alert</StatusHint>
    ),
    meta: (
      <MetaList
        list={[{ label: 'Meta data' }]}
        seperator={true}
      />
    )
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/Variants/With Stepper',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
