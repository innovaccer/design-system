import * as React from 'react';
import Stepper from '../Stepper';
import { action } from '@storybook/addon-actions';

const steps = [
  {
    label: 'Enter email',
    value: 'enter_email'
  },
  {
    label: 'Verify email',
    value: 'verify_email'
  },
  {
    label: 'Create profile',
    value: 'create_profile'
  },
  {
    label: 'Setup organization',
    value: 'setup_organization'
  },
  {
    label: 'Invite team',
    value: 'invite_team'
  }
];

export const standaloneStepper = () => {
  const [active, setActive] = React.useState(0);

  const onChange = (index: number) => {
    setActive(index);
    return action(`Active Index: ${index}`)();
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      completed={-1}
      onChange={onChange}
    />
  );
};

const customCode = `() => {
  const [active, setActive] = React.useState(0);

  const steps = [
    {
      label: 'Enter email',
      value: 'enter_email'
    },
    {
      label: 'Verify email',
      value: 'verify_email'
    },
    {
      label: 'Create profile',
      value: 'create_profile'
    },
    {
      label: 'Setup organization',
      value: 'setup_organization'
    },
    {
      label: 'Invite team',
      value: 'invite_team'
    }
  ];

  const onChange = (index) => {
    setActive(index);
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      completed={-1}
      onChange={onChange}
    />
  );
}`;

export default {
  title: 'Components/Stepper/Standalone Stepper',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
